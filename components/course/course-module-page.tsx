import _ from 'lodash';
import { ICourse, ICourseModule, ICourseModulePageData } from 'typings/course';
import CourseSidebar from 'components/course/course-sidebar';
import CourseModulePageContent from 'components/course/course-module-page-content';
import CourseModulePageQuestions from 'components/course/course-module-page-questions';
import CourseModulePagesNavigation from 'components/course/course-module-pages-navigation';
import CourseModulePageBottomNavigation from 'components/course/course-module-page-bottom-navigation';
import { motion } from 'framer-motion';
import styles from './course-module-page.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type PropTypes = {
  course: ICourse;
  pageData: ICourseModulePageData;
};

export default function CoursePageComponent({ course, pageData }: PropTypes) {
  const currentModule: ICourseModule = _.find(
    course.modules,
    (module) => module.id === pageData.moduleId
  );

  const currentModuleIndex = _.findIndex(
    course.modules,
    (module) => module.id === pageData.moduleId
  );

  const currentPageIndex = _.findIndex(
    currentModule.pages,
    (page) => page.id === pageData.id
  );

  const prevPage =
    currentPageIndex === 0
      ? currentModuleIndex === 0
        ? null
        : _.last(course.modules[currentModuleIndex - 1].pages)
      : currentModule.pages[currentPageIndex - 1];

  const prevModule = prevPage
    ? currentPageIndex === 0
      ? course.modules[currentModuleIndex - 1]
      : currentModule
    : null;

  const nextPage =
    currentPageIndex === currentModule.pages.length - 1
      ? currentModuleIndex === course.modules.length - 1
        ? null
        : _.first(course.modules[currentModuleIndex + 1].pages)
      : currentModule.pages[currentPageIndex + 1];

  const nextModule = nextPage
    ? currentPageIndex === currentModule.pages.length - 1
      ? course.modules[currentModuleIndex + 1]
      : currentModule
    : null;

  const prevModuleLabel = prevModule ? prevModule.title : null;
  const prevPageLabel = prevPage ? prevPage.title : null;
  const prevHref = prevPage
    ? `/course/${course.id}/${prevModule.id}/${prevPage.id}`
    : null;

  const nextModuleLabel = nextModule ? nextModule.title : null;
  const nextPageLabel = nextModule ? nextPage.title : null;
  const nextHref = nextPage
    ? `/course/${course.id}/${nextModule.id}/${nextPage.id}`
    : null;

  return (
    <div className={cx('pageWrapper')}>
      <div className={cx('container')}>
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <CourseSidebar
              course={course}
              currentModuleId={pageData.moduleId}
            />
          </div>

          <div className="col-lg-9 col-md-12">
            <CourseModulePagesNavigation
              courseId={course.id}
              moduleId={currentModule.id}
              currentPageId={pageData.id}
              pagesMeta={currentModule.pages}
            />

            <motion.div
              key="course-module-page-content-wrapper"
              className={styles.pageContentWrapper}
              variants={{
                hidden: {
                  x: 50,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <CourseModulePageContent
                moduleName={currentModule.title}
                pageData={pageData}
              />

              <CourseModulePageQuestions questions={pageData.questions} />

              <CourseModulePageBottomNavigation
                prevHref={prevHref}
                prevModuleLabel={prevModuleLabel}
                prevPageLabel={prevPageLabel}
                nextHref={nextHref}
                nextModuleLabel={nextModuleLabel}
                nextPageLabel={nextPageLabel}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
