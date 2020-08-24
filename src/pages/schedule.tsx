import { motion } from 'framer-motion';
import Layout from 'src/components/layout';
import styles from './schedule.module.scss';
import classNames from 'classnames/bind';
import CourseCalendar from 'src/components/course-calendar';

const cx = classNames.bind(styles);

export default function SchedulePage() {
  return (
    <Layout backgroundColor="#eee" fluid>
      <motion.div exit={{}}></motion.div>
      <CourseCalendar />
    </Layout>
  );
}
