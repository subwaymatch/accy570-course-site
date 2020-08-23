import Layout from 'src/components/layout';
import styles from './home.module.scss';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';
import { clickableVariants } from 'src/animations/variants';
import { SiZoom } from 'react-icons/si';

const cx = classNames.bind(styles);

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

const ZoomLinkButton = ({ label, href }: { label: string; href: string }) => (
  <motion.a
    variants={clickableVariants}
    whileHover="hover"
    whileTap="tap"
    className={cx('zoomLink')}
    href={href}
  >
    <SiZoom className={cx('zoomIcon')} />
    <span className={cx('label')}>{label}</span>
  </motion.a>
);

export default function Home() {
  return (
    <Layout className={cx('homePage')}>
      <motion.div
        className="columns"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={heroVariants}
      >
        <div className="column is-full">
          <div className={cx('syllabusHeader')}>
            <h1>ACCY 570: Data Analytics Foundations for Accuntancy</h1>

            <div className={cx('meetingTimes')}>
              <div>Section AD5 (MW 3:30-4:50 PM) - BIF 2063</div>
              <div>Section OD5 (MW 3:30-4:50 PM) - Online</div>
              <div>
                Lab Sessions for both AD5 & OD5 (MW 6:00-6:50 PM) - Online
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className={cx('columns', 'section', 'zoomLinksSection')}>
        <div className="column is-one-quarter">
          <h2>Zoom Links</h2>
        </div>
        <div className="column is-three-quarters">
          <div className="columns">
            <div className="column is-half">
              <ZoomLinkButton label="for Lectures" href="/" />
            </div>
            <div className="column is-half">
              <ZoomLinkButton label="for Lab Sessions" href="/" />
            </div>
          </div>
        </div>
      </div>

      <div className={cx('columns', 'section')}>
        <div className="column is-one-quarter">
          <h2>Instructor Information</h2>
        </div>

        <div className="column is-three-quarters">
          <div className="columns is-full">
            <div className="column is-half">
              <h3>Name</h3>
              Ye Joo Park
            </div>

            <div className="column is-half">
              <h3>Email</h3>
              <a href="mailto:ypark32@illinois.edu">ypark32@illinois.edu</a>
            </div>
          </div>

          <div className="columns">
            <div className="column is-full">
              <h3>Office Hours</h3>
              Thursdays 4-5 PM via Zoom and by appointment
            </div>
          </div>
        </div>
      </div>

      <div className={cx('columns', 'section')}>
        <div className="column is-one-quarter">
          <h2>Grades Breakdown</h2>
        </div>

        <div className="column is-three-quarters">
          After-class Exercises 100 10%
        </div>
      </div>

      <div className={cx('columns', 'section')}>
        <div className="column is-one-quarter">
          <h2>Attendance</h2>
        </div>

        <div className="column is-three-quarters">
          <p>
            This is a graduate-level course and I hate to grade attendance.
            However, the cost of skipping is very high in this course. If you
            skip class, you are likely to fall behind for the entire semester
            (even worse, throughout subsequent Data Analytics courses in future
            semesters). To incentivize to attend class, I will take attendance
            and grade it. Up to 2 absences are allowed without a prior approval
            (no points will be deducted for the first 2 absences). Once you have
            used up the 2 allowances, please email me in advance if you cannot
            attend the class with your explanation.
          </p>
        </div>
      </div>

      <div className={cx('columns', 'section')}>
        <div className="column is-one-quarter">
          <h2>Participation</h2>
        </div>

        <div className="column is-three-quarters">
          <p>
            I understand that speaking up in class is not easy. It wasn’t easy
            for me either. However, expressing your ideas to others is a
            critical skill in business. I encourage you to overcome your fears
            and participate in class.
          </p>
          <p>
            Your participation grades are based on two criteria – 1)
            participation in discussion and 2) participation in in-class
            exercises. Your participation grades are purely subjective. Over the
            course of the semester, I will observer who speaks up in classes,
            who helps their classmates, and who puts in efforts on in-class
            exercises. I will reward the quality, not quantity of participation.
          </p>
        </div>
      </div>

      <div className={cx('columns', 'section')}>
        <div className="column is-one-quarter">
          <h2>Grading Disputes</h2>
        </div>

        <div className="column is-three-quarters">
          <p>
            I understand that speaking up in class is not easy. It wasn’t easy
            for me either. However, expressing your ideas to others is a
            critical skill in business. I encourage you to overcome your fears
            and participate in class.
          </p>
          <p>
            Your participation grades are based on two criteria – 1)
            participation in discussion and 2) participation in in-class
            exercises. Your participation grades are purely subjective. Over the
            course of the semester, I will observer who speaks up in classes,
            who helps their classmates, and who puts in efforts on in-class
            exercises. I will reward the quality, not quantity of participation.
          </p>
        </div>
      </div>
    </Layout>
  );
}
