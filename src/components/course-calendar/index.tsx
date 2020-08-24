import styles from './course-calendar.module.scss';
import classNames from 'classnames/bind';
import moment from 'moment';
import _ from 'lodash';
import Layout from '../layout';

const cx = classNames.bind(styles);
const year = 2020;
const months = _.range(8, 13);

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
  console.log(calendar);
  return (
    <div className={cx('calendar')}>
      <div className={cx('columns', 'weekdayHeader')}>
        {moment.weekdaysShort().map((day) => (
          <div key={day} className={cx('column')}>
            <span className={cx('weekday')}>{day}</span>
          </div>
        ))}
      </div>

      {calendar.map((week) =>
        week.map((day) => <div key={day.format('L')}>{day.format('L')}</div>)
      )}
    </div>
  );
}
