import { useState } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import useLiveSessionStore from 'stores/useLiveSessionStore';
import Layout from 'components/layout';
import styles from './join.module.scss';
import classNames from 'classnames/bind';
import HamsterImage from 'images/cute-hamster-on-wheel.svg';

const cx = classNames.bind(styles);

export default function LiveJoinPage({ socketIOEndpoint }) {
  const router = useRouter();
  const netId = useLiveSessionStore((state) => state.netId);
  const setNetId = useLiveSessionStore((state) => state.setNetId);

  const [netIdVal, setNetIdVal] = useState<string>(netId as string);

  const joinLiveSession = () => {
    setNetId(netIdVal);

    router.push('/live/wait');
  };

  return (
    <Layout className={cx('joinPage')} backgroundColor="#f7f7f7">
      <div className="row">
        <div className="col-12">
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

              <div className={cx('explanation', 'row')}>
                <div className="column col-md-3">
                  <img src={HamsterImage} alt="Cute Hamster" />
                </div>

                <div className="column col-md-9">
                  <p className={cx('message')}>
                    During the live session, your in-class exercise submissions
                    will be shared with Park and Michael. We will only use that
                    information to (1) provide help and (2) calculate
                    participation scores.{' '}
                    <strong>
                      Submitting incorrect answers WILL NOT damage your
                      participation points.
                    </strong>{' '}
                    You can also choose to opt out - if this is the case, please
                    use the Zoom chat to let us know when you're done with the
                    exercises in each page.
                  </p>
                </div>
              </div>

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
