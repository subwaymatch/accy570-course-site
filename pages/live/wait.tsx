import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styles from './wait.module.scss';
import Layout from 'components/layout';
import { fadeUpDownVariants } from 'animations/variants';
import LiveSessionWaitImage from 'images/live-session-wait.png';

export default function LiveSessionWaitPage() {
  const router = useRouter();

  const user = {
    userName: 'test',
  };

  useEffect(() => {
    // If username is not set, redirect the user to join page
    if (!user.userName) {
      router.push('/live/join');
    }
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-full">
            <p className={styles.message}>
              Hello <span className={styles.userName}>{user.userName}</span>!
              Please wait here until class begins.
            </p>
            <motion.img
              src={LiveSessionWaitImage}
              alt="Waiting for Live Session to Begin..."
              variants={fadeUpDownVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
