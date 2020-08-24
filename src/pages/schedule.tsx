import { motion } from 'framer-motion';
import Layout from 'src/components/layout';
import styles from './schedule.module.scss';
import classNames from 'classnames/bind';
import CourseCalendar from 'src/components/course-calendar';

const cx = classNames.bind(styles);

enum ScheduleType {
  Lecture,
  AfterClassAssignment,
  Quiz,
  Midterm,
  FinalProject,
}

export default function SchedulePage() {
  return (
    <Layout>
      <motion.div exit={{}}></motion.div>
      <CourseCalendar />
    </Layout>
  );
}
