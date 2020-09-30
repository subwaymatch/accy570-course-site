import styles from './course-calendar.module.scss';
import classNames from 'classnames/bind';
import moment from 'moment';
import { eventsByDate } from 'lib/schedule';
import { ScheduleType } from 'typings/schedule';
import {
  BsArrowsExpand,
  BsArrowsCollapse,
  BsChevronUp,
  BsChevronDown,
} from 'react-icons/bs';
import { IoMdArrowDown } from 'react-icons/io';
import { useState } from 'react';

const cx = classNames.bind(styles);

const startWeek = moment('20200824').week();
const endWeek = moment('20201212').week();
const currentWeek = moment().week();

let calendar = [];

console.log(currentWeek);
console.log(currentWeek - startWeek);

for (let week = startWeek; week <= endWeek; week++) {
  calendar.push(
    Array(7)
      .fill(0)
      .map((n, i) =>
        moment()
          .week(week)
          .startOf('week')
          .clone()
          .add(n + i, 'day')
      )
  );
}

export default function CourseCalendar() {
  const [showPrev, setShowPrev] = useState(false);
  const todayKey = moment().format('MMDD');
  let lectureNumber = 1;

  return (
    <div
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
            <span>Hide Past Weeks</span>
          </>
        ) : (
          <>
            <BsChevronDown className={styles.reactIcon} />
            <span>Show All Weeks</span>
          </>
        )}
      </div>

      {calendar.map((week, weekIndex) => (
        <div
          key={`week-${week}`}
          className={cx('calendarRow', {
            isPrevWeek: weekIndex < currentWeek - startWeek,
          })}
        >
          {week.map((day) => {
            const dayKey = day.format('MMDD');
            const dayEvents = eventsByDate[dayKey];

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
                            Lecture {lectureNumber++}
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

                      {dayEvents.hasOwnProperty(
                        ScheduleType.AfterClassAssignment
                      ) &&
                        dayEvents[ScheduleType.AfterClassAssignment].map(
                          (text, idx) => (
                            <div
                              key={`${dayKey}_ac_${idx}`}
                              className={cx('afterClassAssignment', 'box')}
                            >
                              {text}
                            </div>
                          )
                        )}

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
          })}
        </div>
      ))}
    </div>
  );
}
