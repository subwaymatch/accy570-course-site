import styles from './course-calendar.module.scss';
import classNames from 'classnames/bind';
import moment from 'moment';
import _ from 'lodash';
import { eventsByDate } from 'lib/schedule';
import { ScheduleType } from 'typings/schedule';

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
  // console.log(calendar);
  let lectureNumber = 1;

  return (
    <div className={cx('calendar')}>
      {calendar.map((week) => (
        <div key={week} className="columns">
          {week.map((day) => {
            const dayKey = day.format('MMDD');
            const dayEvents = eventsByDate[dayKey];

            return (
              <div key={dayKey} className="column">
                <div
                  className={cx('day', {
                    empty: !Boolean(dayEvents),
                  })}
                >
                  <div className={cx('dayHeader')}>
                    <span className={cx('date')}>{day.format('MM/DD')}</span>
                    <span className={cx('weekday')}>{day.format('ddd')}</span>
                  </div>

                  {dayEvents && (
                    <div className={cx('dayContent')}>
                      {dayEvents.hasOwnProperty(ScheduleType.Quiz) &&
                        dayEvents[ScheduleType.Quiz].map((text) => (
                          <div className={cx('quiz', 'box')}>{text}</div>
                        ))}

                      {dayEvents.hasOwnProperty(ScheduleType.Lecture) && (
                        <div className={cx('lecture', 'box')}>
                          <h3 className={cx('lectureHeading')}>
                            Lecture {lectureNumber++}
                          </h3>

                          {dayEvents[ScheduleType.Lecture].map((text) => (
                            <div className={cx('lectureTopic')}>{text}</div>
                          ))}
                        </div>
                      )}

                      {dayEvents.hasOwnProperty(
                        ScheduleType.AfterClassAssignment
                      ) &&
                        dayEvents[
                          ScheduleType.AfterClassAssignment
                        ].map((text) => (
                          <div className={cx('afterClassAssignment', 'box')}>
                            {text}
                          </div>
                        ))}

                      {dayEvents.hasOwnProperty(ScheduleType.NoLecture) &&
                        dayEvents[ScheduleType.NoLecture].map((text) => (
                          <div className={cx('noLecture', 'box')}>{text}</div>
                        ))}

                      {dayEvents.hasOwnProperty(ScheduleType.ProblemSet) &&
                        dayEvents[ScheduleType.ProblemSet].map((text) => (
                          <div className={cx('problemSet', 'box')}>{text}</div>
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
