import { ICourseModulePageData } from 'typings/course';
import classNames from 'classnames/bind';
import styles from './course-module-page-content.module.scss';

const cx = classNames.bind(styles);

type CourseModulePageContentProps = {
  moduleName: string;
  pageData: ICourseModulePageData;
};

export default function CourseModulePageContent({
  moduleName,
  pageData,
}: CourseModulePageContentProps) {
  return (
    <div className={cx('courseModulePageWrapper')}>
      <span className={cx('moduleName')}>{moduleName}</span>
      <h1 className={cx('pageTitle')}>{pageData.title}</h1>
      <div
        className={cx('courseModulePageContent')}
        dangerouslySetInnerHTML={{ __html: pageData.content }}
      />
    </div>
  );
}
