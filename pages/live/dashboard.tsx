import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from 'components/layout';
import useLiveSessionStore from 'stores/useLiveSessionStore';

export default function DashboardPage() {
  const resetCurrentPage = useLiveSessionStore(
    (state) => state.resetCurrentPage
  );

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
      </motion.div>
    </Layout>
  );
}
