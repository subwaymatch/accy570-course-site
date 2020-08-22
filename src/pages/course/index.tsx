import { ICourse } from 'typings/course';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { getAllCourses } from 'lib/courses';
import Layout from 'src/components/layout';
import styles from './course.module.scss';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

type CourseIndexPageProps = {
  courses: ICourse[];
};

export default function CourseIndexPage({ courses }: CourseIndexPageProps) {
  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: {
            y: 30,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
        }}
        className={cx('courseIndexWrapper')}
      >
        <div className="columns">
          <div className="column">
            <h1 className={cx('pageTitle')}>All Courses</h1>

            {courses.map((course) => (
              <div key={course.id} className={cx('courseItem')}>
                <div className="frame">
                  <div className={cx('courseInfo')}>
                    <h2 className={cx('courseTitle')}>{course.title}</h2>
                    <p>{course.description}</p>
                  </div>

                  {course.modules && (
                    <div>
                      {course.modules.map((cm) => {
                        return (
                          <Link
                            key={cm.id}
                            href="/course/[courseId]/[moduleId]/[pageId]"
                            as={`/course/${course.id}/${cm.id}/${cm.pages[0].id}`}
                          >
                            <motion.a className={styles.moduleItem}>
                              {cm.title}
                            </motion.a>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const courses: ICourse[] = await getAllCourses();

  return {
    props: {
      courses,
    },
  };
};
