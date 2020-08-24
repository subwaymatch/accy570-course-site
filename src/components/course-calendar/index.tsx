import styles from './course-calendar.module.scss';
import classNames from 'classnames/bind';
import moment from 'moment';
import _ from 'lodash';

const cx = classNames.bind(styles);
const year = 2020;
const months = _.range(8, 13);

export default function CourseCalendar() {
  return (
    <div className={cx('calendar')}>
      <h2>Course Calendar</h2>

      <div className="columns">
        {moment.weekdaysShort().map((day) => (
          <div key={day} className={cx('weekdayHeaders', 'column')}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
