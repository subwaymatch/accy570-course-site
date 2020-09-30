import styles from './course-calendar.module.scss';
import classNames from 'classnames/bind';
import moment from 'moment';
import { eventsByDate, lectureNumberByDate } from 'lib/schedule';
import { ScheduleType } from 'typings/schedule';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { IoMdArrowDown } from 'react-icons/io';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cx = classNames.bind(styles);

const startWeekIndex = moment('20200824').week();
const endWeekIndex = moment('20201212').week();
const currentWeekIndex = moment().week();

let calendar = [];

for (let weekIndex = startWeekIndex; weekIndex <= endWeekIndex; weekIndex++) {
  calendar.push(
    Array(7)
      .fill(0)
      .map((n, i) =>
        moment()
          .week(weekIndex)
          .startOf('week')
          .clone()
          .add(n + i, 'day')
      )
  );
}

const CalendarWeek = ({ week, show, isPrevWeek }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={`week-${week}`}
          initial={isPrevWeek ? 'hidden' : false}
          animate={isPrevWeek ? 'visible' : false}
          exit="hidden"
          variants={{
            hidden: {
              opacity: 0,
              height: 0,
              y: 30,
              padding: 0,
            },
            visible: {
              opacity: 1,
              height: 'auto',
              y: 0,
            },
          }}
          transition={{ duration: 0.5 }}
          className={cx('calendarRow')}
        >
          {week.map((day) => {
            const dayKey = day.format('MMDD');
            const dayEvents = eventsByDate[dayKey];

            return (
              <CalendarCell key={dayKey} day={day} dayEvents={dayEvents} />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CalendarCell = ({ day, dayEvents }) => {
  const todayKey = moment().format('MMDD');
  const dayKey = day.format('MMDD');

  return (
    <div key={dayKey} className={cx('calendarCell')}>
      <div
        className={cx('day', {
          empty: typeof dayEvents === 'undefined',
          today: todayKey === dayKey,
        })}
      >
        <div className={cx('todayIndicator')}>
          <span>Today</span>
          <IoMdArrowDown className={cx('todayIcon')} />
        </div>
        <div className={cx('dayHeader')}>
          <span className={cx('date')}>{day.format('MM/DD')}</span>
          <span className={cx('weekday')}>{day.format('ddd')}</span>
        </div>

        {dayEvents && (
          <div className={cx('dayContent')}>
            {dayEvents.hasOwnProperty(ScheduleType.Quiz) &&
              dayEvents[ScheduleType.Quiz].map((text, idx) => (
                <div
                  key={`${dayKey}_quiz_${idx}`}
                  className={cx('quiz', 'box')}
                >
                  {text}
                </div>
              ))}

            {dayEvents.hasOwnProperty(ScheduleType.Lecture) && (
              <div className={cx('lecture', 'box')}>
                <h3 className={cx('lectureHeading')}>
                  Lecture {lectureNumberByDate[day.format('MMDD')]}
                </h3>

                {dayEvents[ScheduleType.Lecture].map((text, idx) => (
                  <div
                    key={`${dayKey}_topic_${idx}`}
                    className={cx('lectureTopic')}
                  >
                    {text}
                  </div>
                ))}
              </div>
            )}

            {dayEvents.hasOwnProperty(ScheduleType.AfterClassAssignment) &&
              dayEvents[ScheduleType.AfterClassAssignment].map((text, idx) => (
                <div
                  key={`${dayKey}_ac_${idx}`}
                  className={cx('afterClassAssignment', 'box')}
                >
                  {text}
                </div>
              ))}

            {dayEvents.hasOwnProperty(ScheduleType.NoLecture) &&
              dayEvents[ScheduleType.NoLecture].map((text, idx) => (
                <div key={idx} className={cx('noLecture', 'box')}>
                  {text}
                </div>
              ))}

            {dayEvents.hasOwnProperty(ScheduleType.ProblemSet) &&
              dayEvents[ScheduleType.ProblemSet].map((text, idx) => (
                <div key={idx} className={cx('problemSet', 'box')}>
                  {text}
                </div>
              ))}

            {dayEvents.hasOwnProperty(ScheduleType.Midterm) &&
              dayEvents[ScheduleType.Midterm].map((text, idx) => (
                <div key={idx} className={cx('midterm', 'box')}>
                  {text}
                </div>
              ))}

            {dayEvents.hasOwnProperty(ScheduleType.Final) &&
              dayEvents[ScheduleType.Final].map((text, idx) => (
                <div key={idx} className={cx('final', 'box')}>
                  {text}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function CourseCalendar() {
  const [showPrev, setShowPrev] = useState(false);

  return (
    <motion.div
      className={cx('calendar', {
        hidePrev: !showPrev,
      })}
    >
      <div
        className={cx('togglePrevButton')}
        onClick={() => {
          setShowPrev(!showPrev);
        }}
      >
        {showPrev ? (
          <>
            <BsChevronUp className={styles.reactIcon} />
            <span>Hide Previous Weeks</span>
          </>
        ) : (
          <>
            <BsChevronDown className={styles.reactIcon} />
            <span>Show Previous Weeks</span>
          </>
        )}
      </div>

      {calendar.map((week, weekIndex) => (
        <CalendarWeek
          key={`week-${week}`}
          week={week}
          show={
            showPrev ? true : weekIndex >= currentWeekIndex - startWeekIndex
          }
          isPrevWeek={weekIndex < currentWeekIndex - startWeekIndex}
        />
      ))}
    </motion.div>
  );
}
