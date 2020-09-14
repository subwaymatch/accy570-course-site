import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import useLiveSessionStore from 'stores/useLiveSessionStore';
import styles from './wait.module.scss';
import Layout from 'components/layout';
import { fadeUpDownVariants } from 'animations/variants';
import LiveSessionWaitImage from 'images/live-session-wait.png';

export default function LiveSessionWaitPage() {
  const router = useRouter();
  const netId = useLiveSessionStore((state) => state.netId);

  useEffect(() => {
    // If username is not set, redirect the user to join page
    if (!netId) {
      router.push('/live/join');
    }
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-full">
            <p className={styles.message}>
              Hello <span className={styles.userName}>{netId}</span>! You have
              successfully joined the live session.
            </p>
            <motion.img
              src={LiveSessionWaitImage}
              alt="Live Session Illustration"
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
