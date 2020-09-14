import { useEffect, useState } from 'react';
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
    console.log('joinLiveSession');

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

              <div className={cx('explanation', 'columns')}>
                <div className="column is-2">
                  <img src={HamsterImage} alt="Cute Hamster" />
                </div>

                <div className="column is-9 is-offset-1">
                  <p className={cx('message')}>
                    During the live session, your submissions on multiple choice
                    and coding questions will be shared with the instructor.{' '}
                    <strong>
                      will ONLY use that information to ensure that you're
                      following the lectures.
                    </strong>
                    I Submitting incorrect answers will not have any negative
                    impact on your participation score. In fact, it's a good
                    signal that you're trying. You can also choose to opt out -
                    if this is the case, please use the Zoom chat to update me
                    on your progress.
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
