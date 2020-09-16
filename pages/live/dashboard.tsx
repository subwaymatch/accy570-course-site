import { motion } from 'framer-motion';
import Layout from 'components/layout';
import useLiveSessionStore from 'stores/useLiveSessionStore';
import { useDocument } from '@nandorojo/swr-firestore';
import styles from './dashboard.module.scss';
import classNames from 'classnames/bind';
import { BiReset } from 'react-icons/bi';
import { MdDone, MdClear, MdAccessTime } from 'react-icons/md';
import firebase from 'firebase/clientApp';
import moment from 'moment';

const cx = classNames.bind(styles);

const ChallengeAttemptItem = ({
  questionId,
  success,
  timestamp,
}: {
  questionId: string;
  success: boolean;
  timestamp: firebase.firestore.Timestamp;
}) => (
  <div
    className={cx('challengeAttemptItem', {
      success,
      fail: !success,
    })}
  >
    <span className={styles.iconWrapper}>
      {success ? <MdDone /> : <MdClear />}
    </span>
    <span className={styles.questionId}>{questionId}</span>
    <span className={styles.timestamp}>
      <MdAccessTime className={styles.icon} />
      <span>{moment(timestamp.toDate()).fromNow()}</span>
    </span>
  </div>
);

export default function DashboardPage() {
  const clearAttempts = useLiveSessionStore((state) => state.resetCurrentPage);

  const { data, update, error } = useDocument(`liveSessions/current`, {
    listen: true,
  });

  const challengeAttempts =
    data && data.hasOwnProperty('challengeAttempts')
      ? data['challengeAttempts']
      : {};

  return (
    <Layout>
      <motion.div className={styles.dashboard} exit={{}}>
        <div className="row">
          <div className="col-12">
            <div className={styles.dashboardHeader}>
              <div className="row">
                <div className="col-9">
                  <h1>Live Dashboard</h1>
                </div>

                <div className="col-3">
                  <button
                    className={styles.clearButton}
                    onClick={clearAttempts}
                  >
                    <BiReset className={styles.icon} />
                    <span>Clear Attempts</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {Object.keys(challengeAttempts).map((netId) => {
          const userChallengeAttempts = challengeAttempts[netId];

          return (
            <div key={netId} className="row">
              <div className="col-12">
                <div className={styles.userAttemptsBox}>
                  <div className="row">
                    <div className="col-md-3">
                      <span className={styles.netIdLabel}>NetID</span>
                      <span className={styles.netId}>{netId}</span>
                    </div>
                    <div className="col-md-9">
                      {Object.keys(userChallengeAttempts).map((questionId) => (
                        <ChallengeAttemptItem
                          key={`${netId}-${questionId}`}
                          questionId={questionId}
                          success={userChallengeAttempts[questionId]['success']}
                          timestamp={
                            userChallengeAttempts[questionId]['timestamp']
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </Layout>
  );
}
