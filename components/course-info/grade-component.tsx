import classNames from 'classnames/bind';
import styles from './grade-component.module.scss';
import _ from 'lodash';

const cx = classNames.bind(styles);

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

export default GradeComponent;
