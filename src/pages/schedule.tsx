import { motion } from 'framer-motion';
import Layout from 'src/components/layout';

export default function SchedulePage() {
  return (
    <Layout>
      <div className="column">
        <div className="column">
          <motion.h1 exit={{}}>Schedule</motion.h1>
        </div>
      </div>
    </Layout>
  );
}
