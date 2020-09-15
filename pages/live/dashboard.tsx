import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from 'components/layout';
import useLiveSessionStore from 'stores/useLiveSessionStore';
import { useDocument } from '@nandorojo/swr-firestore';

export default function DashboardPage() {
  const resetCurrentPage = useLiveSessionStore(
    (state) => state.resetCurrentPage
  );

  const { data, update, error } = useDocument(`liveSessions/current`, {
    listen: true,
  });

  console.log(data);

  useEffect(() => {}, []);

  return (
    <Layout>
      <motion.div exit={{}}>
        <div className="columns">
          <div className="column is-full">
            <h1>Dashboard</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column is-full">
            <button onClick={resetCurrentPage}>Reset</button>
          </div>
        </div>

        {Object.keys(data).map((netId) => (
          <div>{netId}</div>
        ))}
      </motion.div>
    </Layout>
  );
}
