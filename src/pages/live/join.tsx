import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, updateUserName } from 'lib/slices/liveUserSlice';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import socketIOClient from 'socket.io-client';
import Layout from 'src/components/layout';
import styles from './live.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

let socket;

export default function SocketPage({ socketIOEndpoint }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [userName, setUserName] = useState(user.userName);
  const [response, setResponse] = useState('');

  console.log(`socketIOEndpoint=${socketIOEndpoint}`);

  useEffect(() => {
    socket = socketIOClient(socketIOEndpoint);
    socket.on('FromAPI', (data) => {
      setResponse(data);
    });

    socket.on('joinAccept', (data) => {
      console.log('join accepted');

      console.log(data);
    });
  }, []);

  const joinLiveSession = () => {
    // socket.emit('joinRequest', {
    //   userName,
    //   sessionName: 'AD5',
    // });
    console.log(`joinLiveSession(${userName})`);
    dispatch(updateUserName(userName));

    setTimeout(() => {
      // Once user is added to the list
      router.push('/live/wait');
    }, 2000);
  };

  return (
    <Layout backgroundColor="#fffff5" fluid>
      <div className={cx('pageWrapper')}>
        <div className="container">
          <div className="columns">
            <div className="column is-full">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
              >
                <form
                  className={cx('joinForm')}
                  onSubmit={(e) => {
                    e.preventDefault();
                    joinLiveSession();
                  }}
                >
                  <label>NetID</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => {
                      e.preventDefault();
                      setUserName(e.target.value);
                    }}
                  />

                  <input type="submit" value="Join" />
                </form>
                It's <time dateTime={response}>{response}</time>
                <br />
                UserName: {user.userName}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      socketIOEndpoint:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:5000'
          : 'https://accy570-live-server.herokuapp.com/',
    },
  };
};
