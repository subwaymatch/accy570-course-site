import Layout from 'components/layout';
import styles from './home.module.scss';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';
import _ from 'lodash';
import GradeComponent from 'components/course-info/grade-component';
import RunningAlarmClockImage from 'images/running-alarm-clock-02.svg';
import { ZoomLinkButton, ZoomPasswordMessage } from 'components/zoom-button';
import DataCampLogoImage from 'images/datacamp-logo.png';

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

export default function Home() {
  return (
    <Layout className={cx('homePage')}>
      <motion.div
        className="row"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={courseTitleVariants}
      >
        <div className="col-12">
          <div className={cx('syllabusHeader')}>
            <h1>ACCY 570: Data Analytics Foundations for Accountancy</h1>

            <div className={cx('meetingTimes')}>
              <div>
                <span className="color-primary">Section AD5</span> ⏰ MW
                3:30-4:50 PM - BIF 2063
              </div>
              <div>
                <span className="color-primary">Section OD5</span> ⏰ MW
                3:30-4:50 PM - Online
              </div>
              <div>
                Lab Sessions for both AD5 & OD5 ⏰ MW 6:00-6:50 PM - Online
              </div>
            </div>

            <p>
              * Information here only pertains to Park's sections (AD5 & OD5).
            </p>
            <p>
              All course notes/assignments/grades are uploaded to Compass.
              Please check Compass for full materials.
            </p>
          </div>
        </div>
      </motion.div>

      <div className={cx('row', 'section')}>
        <div className="col-md-3">
          <h2>🎞️ Lecture Videos</h2>
        </div>

        <div className="col-md-9">
          You can watch the lecture videos at{' '}
          <a
            href="https://mediaspace.illinois.edu/channel/Data%2BAnalytics%2BFoundations%2B%2528ACCY%2B570%2BAD5%2529%2BFall%2B2020/175748091"
            title="ACCY 570 AD5 Mediaspace Channel"
          >
            this Mediaspace Channel
          </a>
          .
        </div>
      </div>

      <div className={cx('row', 'section', 'zoomLinksSection')}>
        <div className="col-md-3">
          <h2>💻 Zoom Links</h2>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-6">
              <ZoomLinkButton
                label="Lecture"
                href="https://illinois.zoom.us/j/92043278937?pwd=TDUzdXB0ZGp4T2tiZlhWWW1Td2Z4dz09"
              />
              <ZoomPasswordMessage />
            </div>
            <div className="col-md-6">
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

      <div className={cx('row', 'section')}>
        <div className="col-md-3">
          <h2>🧟‍♂️ Instructor</h2>
        </div>

        <div className="col-md-9">
          <div className="row">
            <div className="col-md-6">
              <h3>Name</h3>
              Ye Joo Park
            </div>

            <div className="col-md-6">
              <h3>Email 📧</h3>
              <a href="mailto:ypark32@illinois.edu">ypark32@illinois.edu</a>
            </div>
          </div>

          <div className={cx('row', 'topSpacing')}>
            <div className="col-md-6">
              <h3>Office Hours ⏰</h3>
              Thursdays 4-5 PM
            </div>

            <div className="col-md-6">
              <ZoomLinkButton
                label="Park's Office Hours"
                href="https://illinois.zoom.us/j/97049694596?pwd=dkhuVVFDMVl3NmJPbWczdkY5b3pldz09"
              />
              <span className={cx('zoomPasswordMessage')}>
                <ZoomPasswordMessage customMessage="Password same as lecture" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('row', 'section')}>
        <div className="col-md-3">
          <h2>👨‍🏫 Lab Instructor</h2>
        </div>

        <div className="col-md-9">
          <div className="row">
            <div className="col-md-6">
              <h3>Name</h3>
              Linden Lu
            </div>

            <div className="col-md-6">
              <h3>Email 📧</h3>
              <a href="mailto:zllu2@illinois.edu">zllu2@illinois.edu</a>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('row', 'section')}>
        <div className="col-md-3">
          <h2>👨‍🚀 Teaching Assistant</h2>
        </div>

        <div className="col-md-9">
          <div className="row">
            <div className="col-md-6">
              <h3>Name</h3>
              Michael Yip
            </div>

            <div className="col-md-6">
              <h3>Email 📧</h3>
              <a href="mailto:myip5@illinois.edu">myip5@illinois.edu</a>
            </div>
          </div>

          <div className={cx('row', 'topSpacing')}>
            <div className="col-md-6">
              <h3>Office Hours ⏰</h3>
              Mondays 11 AM – 12 PM
            </div>

            <div className="col-md-6">
              <ZoomLinkButton
                label="Micheal's Office Hours"
                href="https://illinois.zoom.us/j/93933077792?pwd=VlBPTVZKQzZTdW5WUEZIbHFZak1ZZz09"
              />
              <ZoomPasswordMessage />
            </div>
          </div>
        </div>
      </div>

      <div className={cx('row', 'section')}>
        <div className="col-md-3">
          <h2>📚 Grades Breakdown</h2>
        </div>

        <div className="col-md-9">
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

      <div className={cx('row', 'section')}>
        <div className="col-md-3">
          <h2>👀 Attendance</h2>
        </div>

        <div className="col-md-9">
          <p>
            I will grade attendance 🦉. It's only to incentivize you to not fall
            behind. Building a solid foundation in 570 will enable you to excel
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

      <div className={cx('row', 'section')}>
        <div className="col-md-3">
          <h2>🦍 Participation</h2>
        </div>

        <div className="col-md-9">
          <p>
            Normally, your participation grades would be based on three
            criteria.
          </p>
          <ol>
            <li>🙋🏽‍♂️Participation in discussions</li>
            <li>👩🏼‍🔬 Participation in in-class exercises</li>
            <li>🤹🏻 Participation in group assignments</li>
          </ol>
          <p>
            Since our class structure (simultaneous in-person and Zoom-delivery)
            makes it diffcult to facilitate discussions, your participation
            grade will be mostly based on #2 and #3 (in-class exercises and
            groupa assignments).
          </p>
        </div>
      </div>

      <div className={cx('row', 'section')}>
        <div className="col-md-3">
          <h2>💢 Grading Disputes</h2>
        </div>

        <div className="col-md-9">
          <p>
            While the TAs and I will make every effort to grade your work
            accurately, grading errors can occur. If you believe a grading error
            exists on your assignment/project, please e-mail me{' '}
            <strong>within one week</strong> from the day the grades were
            released.
          </p>
        </div>
      </div>

      <div className={cx('row', 'section')}>
        <div className="col-md-3">
          <h2>🐲 Late Submissions</h2>
        </div>

        <div className="col-md-6">
          <p>
            Points are deducted from all late submissions. The amount of
            deduction will be <strong>10%</strong> of the total available points
            for the assignment per day. For example, if you turn in an
            assignment a day late and score 90%, your adjusted points will be
            80%.
          </p>
        </div>

        <div className="col-md-3">
          <img src={RunningAlarmClockImage} alt="Running Alarm Clock" />
        </div>
      </div>

      <div className={cx('row', 'section')}>
        <div className="col-md-3">
          <a href="https://www.datacamp.com">
            <img
              src={DataCampLogoImage}
              alt="DataCamp"
              className={cx('datacampLogoImage')}
            />
          </a>
        </div>

        <div className="col-md-6">
          <p>
            This course is accompanied by{' '}
            <strong>
              <a href="https://www.datacamp.com/">DataCamp</a>
            </strong>
            , the most intuitive learning platform for data science and
            analytics. Learn any time, anywhere and become an expert in R,
            Python, SQL, and more. DataCamp offers 325+ courses by expert
            instructors on topics such as importing data, data visualization,
            and machine learning.
          </p>
        </div>
      </div>
    </Layout>
  );
}
