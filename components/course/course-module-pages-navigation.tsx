import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tippy';
import classNames from 'classnames/bind';
import styles from './course-module-pages-navigation.module.scss';
import { ICourseModulePageMeta } from 'typings/course';
import { clickableVariants } from 'animations/variants';

const cx = classNames.bind(styles);

type CourseModulePageNavigationProps = {
  courseId: string;
  moduleId: string;
  pagesMeta: ICourseModulePageMeta[];
  currentPageId: string;
};

export default function CourseModulePagesNavigation({
  courseId,
  moduleId,
  pagesMeta,
  currentPageId,
}: CourseModulePageNavigationProps) {
  return (
    <div className={styles.navigationWrapper}>
      <nav className={styles.navigation}>
        {pagesMeta.map((pageMeta, pageIndex) => (
          <Link
            key={pageMeta.id}
            href="/course/[courseId]/[moduleId]/[pageId]"
            as={`/course/${courseId}/${moduleId}/${pageMeta.id}`}
          >
            <div className={cx('pageLinkItemWrapper')}>
              <Tooltip
                // options
                title={pageMeta.title}
                position="top"
                trigger="mouseenter"
                duration={200}
                animation="shift"
                arrow={true}
              >
                <motion.div
                  className={cx('pageLinkItem', {
                    active: pageMeta.id === currentPageId,
                  })}
                  variants={clickableVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>{pageIndex + 1}</span>
                </motion.div>
              </Tooltip>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
