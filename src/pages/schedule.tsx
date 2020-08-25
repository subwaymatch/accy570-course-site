import { motion } from 'framer-motion';
import Layout from 'src/components/layout';
import CourseCalendar from 'src/components/course-calendar';

export default function SchedulePage() {
  return (
    <Layout backgroundColor="#eee" fluid>
      <motion.div exit={{}}></motion.div>
      <CourseCalendar />
    </Layout>
  );
}
