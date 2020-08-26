import _ from 'lodash';
import { ICourse, ICourseModule, ICourseModulePageData } from 'typings/course';
import CourseSidebar from 'src/components/course/course-sidebar';
import CourseModulePageContent from 'src/components/course/course-module-page-content';
import CourseModulePageQuestions from 'src/components/course/course-module-page-questions';
import CourseModulePagesNavigation from 'src/components/course/course-module-pages-navigation';
import CourseModulePageBottomNavigation from 'src/components/course/course-module-page-bottom-navigation';
import { motion } from 'framer-motion';

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
    <>
      <div className="columns">
        <div className="column is-one-quarter">
          <CourseSidebar course={course} currentModuleId={pageData.moduleId} />
        </div>

        <div className="column is-three-quarters">
          <CourseModulePagesNavigation
            courseId={course.id}
            moduleId={currentModule.id}
            currentPageId={pageData.id}
            pagesMeta={currentModule.pages}
          />

          <motion.div
            key="course-module-page-content-wrapper"
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
            <CourseModulePageContent pageData={pageData} />

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
    </>
  );
}
