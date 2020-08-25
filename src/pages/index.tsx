import Layout from 'src/components/layout';
import styles from './home.module.scss';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';
import _ from 'lodash';
import RunningAlarmClockImage from 'src/images/running-alarm-clock-02.svg';
import {
  ZoomLinkButton,
  ZoomPasswordMessage,
} from 'src/components/zoom-button';

const cx = classNames.bind(styles);

const courseTitleVariants = {
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

const GradeComponent = ({
  className,
  title,
  points,
  percentage,
  subcomponents,
}: {
  className?: string;
  title: string;
  points: string | number;
  percentage: string | number;
  subcomponents?: React.ReactNode[];
}) => (
  <div className={cx('gradeComponent', className)}>
    <div className={cx('gradeComponentTitle')}>{title}</div>

    <div className={cx('gradeComponentPoints')}>{points}</div>

    <div className={cx('gradeComponentPercentage')}>
      {percentage}
      {_.isNumber(percentage) && '%'}
    </div>

    <div className={cx('gradeSubcomponents')}>
      {subcomponents &&
        subcomponents.map((sc, idx) => (
          <span key={idx} className={cx('item')}>
            {sc}
          </span>
        ))}
    </div>
  </div>
);

export default function Home() {
  return (
    <Layout className={cx('homePage')}>
      <motion.div
        className="columns"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={courseTitleVariants}
      >
        <div className="column is-full">
          <div className={cx('syllabusHeader')}>
            <h1>ACCY 570: Data Analytics Foundations for Accountancy</h1>

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
              <ZoomLinkButton
                label="Lecture"
                href="https://illinois.zoom.us/j/92043278937?pwd=TDUzdXB0ZGp4T2tiZlhWWW1Td2Z4dz09"
              />
              <ZoomPasswordMessage />
            </div>
            <div className="column is-half">
              <ZoomLinkButton
                label="Lab Session"
                href="https://illinois.zoom.us/j/98711107937?pwd=WVVOMzhyNEFjM1ZrUGNCQWhCQitEZz09"
              />
              <span className={cx('zoomPasswordMessage')}>
                <ZoomPasswordMessage />
              </span>
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
          <h2>Lab Instructor</h2>
        </div>

        <div className="column is-three-quarters">
          <div className="columns is-full">
            <div className="column is-half">
              <h3>Name</h3>
              Linden Lu
            </div>

            <div className="column is-half">
              <h3>Email</h3>
              <a href="mailto:zllu2@illinois.edu">zllu2@illinois.edu</a>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('columns', 'section')}>
        <div className="column is-one-quarter">
          <h2>Teaching Assistant</h2>
        </div>

        <div className="column is-three-quarters">
          <div className="columns is-full">
            <div className="column is-half">
              <h3>Name</h3>
              Michael Yip
            </div>

            <div className="column is-half">
              <h3>Email</h3>
              <a href="mailto:myip5@illinois.edu">myip5@illinois.edu</a>
            </div>
          </div>

          <div className="columns is-full">
            <div className="column is-half">
              <h3>Office Hours</h3>
              Mondays 11 AM – 12 PM
            </div>

            <div className="column is-half">
              <ZoomLinkButton
                label="Micheal's Office Hours"
                href="https://illinois.zoom.us/j/93933077792?pwd=VlBPTVZKQzZTdW5WUEZIbHFZak1ZZz09"
              />
              <ZoomPasswordMessage />
            </div>
          </div>
        </div>
      </div>

      <div className={cx('columns', 'section')}>
        <div className="column is-one-quarter">
          <h2>Grades Breakdown</h2>
        </div>

        <div className="column is-three-quarters">
          <GradeComponent
            className={cx('header')}
            title="Component"
            points="Pts"
            percentage="%"
            subcomponents={['Notes']}
          />
          <GradeComponent
            title="After-class Exercises"
            points={100}
            percentage={10}
          />
          <GradeComponent
            title="Problem Sets"
            subcomponents={['4 @ 80 Points']}
            points={320}
            percentage={32}
          />
          <GradeComponent
            title="Quizzes"
            subcomponents={['6 @ 20 Points']}
            points={120}
            percentage={12}
          />
          <GradeComponent
            title="Midterm"
            subcomponents={[
              'Content - 130 Points',
              'Peer Evaluation - 20 Points',
            ]}
            points={150}
            percentage={15}
          />
          <GradeComponent
            title="Final Project"
            subcomponents={[
              'Content - 130 Points',
              'Presentation - 50 Points',
              'Peer Evaluation - 20 Points',
            ]}
            points={200}
            percentage={20}
          />
          <GradeComponent title="Attendance" points={40} percentage={4} />
          <GradeComponent title="Participation" points={70} percentage={7} />
          <GradeComponent
            title="Extra Credit"
            subcomponents={['ARL Subject Pool']}
            points={10}
            percentage={1}
          />
          <GradeComponent
            className={cx('footer')}
            title="Total"
            points={1000}
            percentage={100}
          />
        </div>
      </div>

      <div className={cx('columns', 'section')}>
        <div className="column is-one-quarter">
          <h2>Attendance</h2>
        </div>

        <div className="column is-three-quarters">
          <p>
            I will grade attendance. It's only to incentivize you to not fall
            behind. Building a solid foundation in 570 will enable you to Excel
            in other data analytics courses.
          </p>
          <p>
            <strong>
              Up to 2 absences are allowed without a prior approval
            </strong>{' '}
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
            Normally, your participation grades would be based on two criteria.
          </p>
          <ol>
            <li>Participation in discussion</li>
            <li>Participation in in-class exercises</li>
          </ol>
          <p>
            Since our class structure (simultaneous in-person and Zoom-delivery)
            makes it diffcult to facilitate discussions, your participation
            grade will be mostly based on #2 (in-class exercises).
          </p>
        </div>
      </div>

      <div className={cx('columns', 'section')}>
        <div className="column is-one-quarter">
          <h2>Grading Disputes</h2>
        </div>

        <div className="column is-three-quarters">
          <p>
            While the TAs and I will make every effort to grade your work
            accurately, grading errors can occur. If you believe a grading error
            exists on your assignment/project, please e-mail me{' '}
            <strong>within one week</strong> from the day the grades were
            released.
          </p>
        </div>
      </div>

      <div className={cx('columns', 'section')}>
        <div className="column is-one-quarter">
          <h2>Late Submissions</h2>
        </div>

        <div className="column is-two-quarters">
          <p>
            Points are deducted from all late submissions. The amount of
            deduction will be <strong>10%</strong> of the total available points
            for the assignment per day. For example, if you turn in an
            assignment a day late and score 90%, your adjusted points will be
            80%.
          </p>
        </div>

        <div className="column is-one-quarter">
          <img src={RunningAlarmClockImage} alt="Running Alarm Clock" />
        </div>
      </div>
    </Layout>
  );
}
