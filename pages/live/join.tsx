import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import useLiveSessionStore from 'stores/useLiveSessionStore';
import socketIOClient from 'socket.io-client';
import Layout from 'components/layout';
import styles from './join.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

let socket;

export default function LiveJoinPage({ socketIOEndpoint }) {
  const router = useRouter();
  const netId = useLiveSessionStore((state) => state.netId);
  const setNetId = useLiveSessionStore((state) => state.setNetId);

  const [netIdVal, setNetIdVal] = useState<string>(netId as string);

  console.log(`socketIOEndpoint=${socketIOEndpoint}`);

  useEffect(() => {
    socket = socketIOClient(socketIOEndpoint);
    socket.on('FromAPI', (data) => {
      console.log(data);
    });

    socket.on('joinAccept', (data) => {
      console.log('join accepted');

      console.log(data);
    });
  }, []);

  const joinLiveSession = () => {
    console.log('joinLiveSession');

    socket.emit('joinRequest', {
      netId: netIdVal,
    });

    setNetId(netIdVal);
    console.log(`joinLiveSession(${netIdVal})`);

    router.push('/live/wait');
  };

  return (
    <Layout className={cx('joinPage')} backgroundColor="#f7f7f7">
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
                value={netIdVal}
                onChange={(e) => {
                  e.preventDefault();
                  setNetIdVal(e.target.value);
                }}
              />

              <p>
                During the live session, your submissions on multiple choice and
                coding questions will be communicated with the instructor.
              </p>

              <input type="submit" value="Join" />
            </form>
          </motion.div>
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
