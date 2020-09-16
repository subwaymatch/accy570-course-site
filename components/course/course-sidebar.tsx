import Link from 'next/link';
import classNames from 'classnames/bind';
import _ from 'lodash';
import { ICourse } from 'typings/course';
import styles from './course-sidebar.module.scss';
import { GoCheck } from 'react-icons/go';
import { MdPlayArrow } from 'react-icons/md';
import { motion } from 'framer-motion';
import { clickableVariants } from 'animations/variants';
import Sticky from 'react-stickynode';
import { useMedia } from 'react-media';

const cx = classNames.bind(styles);

type CourseSidebarProps = {
  course: ICourse;
  currentModuleId: string;
};

export default function CourseSidebar({
  course,
  currentModuleId,
}: CourseSidebarProps) {
  const currentModuleIndex = _.findIndex(
    course.modules,
    (module) => module.id === currentModuleId
  );

  const isColumnFullWidth = useMedia({ query: '(max-width: 991.98px)' });

  return (
    <div className={cx('sidebarWrapper')}>
      <span className={cx('sidebarTitle')}>{course.title}</span>

      <Sticky enabled={!isColumnFullWidth} top={20}>
        <nav className={cx('sideNav')}>
          {course.modules.map((module, index) => {
            const isComplete = index < currentModuleIndex;
            const isInProgress = module.id === currentModuleId;
            const isIncomplete = index > currentModuleIndex;

            return (
              <Link
                key={module.id}
                href="/course/[courseId]/[moduleId]/[pageId]"
                as={`/course/${course.id}/${module.id}/${module.pages[0].id}`}
              >
                <motion.div
                  className={cx('moduleLinkItem', {
                    isComplete,
                    isInProgress,
                    isIncomplete,
                  })}
                  variants={clickableVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <div className={cx('verticalLine')} />
                  <div className={cx('indicator')}>
                    {isComplete ? (
                      <div className={cx('iconWrapper', 'isComplete')}>
                        <GoCheck className={cx('icon')} />
                      </div>
                    ) : isInProgress ? (
                      <div className={cx('iconWrapper', 'inProgress')}>
                        <MdPlayArrow className={cx('icon')} />
                      </div>
                    ) : (
                      <div className={cx('incompleteCircle')} />
                    )}
                  </div>
                  <span className={cx('label')}>{module.title}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </Sticky>
    </div>
  );
}
