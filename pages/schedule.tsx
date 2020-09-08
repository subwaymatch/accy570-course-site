import { motion } from 'framer-motion';
import Layout from 'components/layout';
import CourseCalendar from 'components/course-calendar';

export default function SchedulePage() {
  return (
    <Layout backgroundColor="#eee" fluid>
      <motion.div exit={{}}></motion.div>
      <CourseCalendar />
    </Layout>
  );
}
