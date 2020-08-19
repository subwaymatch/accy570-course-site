import Layout from 'src/components/layout';
import styles from './home.module.scss';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: {
    y: 40,
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="row"
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="col-12">
          <motion.div variants={heroVariants}>
            <p className={styles.heroText}>
              Learn anything by solving problems.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}
