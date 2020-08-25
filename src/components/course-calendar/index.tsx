import styles from './course-calendar.module.scss';
import classNames from 'classnames/bind';
import moment from 'moment';
import _ from 'lodash';
import { eventsByDate } from 'lib/schedule';
import { ScheduleType } from 'typings/schedule';
import { IoMdArrowDown } from 'react-icons/io';

const cx = classNames.bind(styles);

const startWeek = moment('20200824').week();
const endWeek = moment('20201212').week();

let calendar = [];

for (var week = startWeek; week <= endWeek; week++) {
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
  const todayKey = moment().format('MMDD');
  let lectureNumber = 1;

  return (
    <div className={cx('calendar')}>
      {calendar.map((week) => (
        <div key={week} className={cx('calendarRow')}>
          {week.map((day) => {
            const dayKey = day.format('MMDD');
            const dayEvents = eventsByDate[dayKey];

            return (
              <div key={dayKey} className={cx('calendarCell')}>
                <div
                  className={cx('day', {
                    empty: !Boolean(dayEvents),
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
