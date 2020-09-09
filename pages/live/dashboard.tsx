import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from 'components/layout';

export default function DashboardPage() {
  useEffect(() => {}, []);

  return (
    <Layout>
      <motion.div exit={{}}>Dashboard</motion.div>
    </Layout>
  );
}
