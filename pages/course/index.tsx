import { ICourse } from 'typings/course';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { getAllCourses } from 'lib/courses';
import Layout from 'components/layout';
import styles from './course.module.scss';
import { motion } from 'framer-motion';
import { clickableVariants } from 'animations/variants';

const cx = classNames.bind(styles);

type CourseIndexPageProps = {
  courses: ICourse[];
};

export default function CourseIndexPage({ courses }: CourseIndexPageProps) {
  return (
    <Layout backgroundColor="#111" fluid>
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
        <div className={cx('container', 'customContainer')}>
          {courses.map((course, idx) => (
            <div key={course.id} className={cx('row', 'courseItem')}>
              <div className="col-12">
                <Link
                  href="/course/[courseId]/[moduleId]/[pageId]"
                  as={`/course/${course.id}/${course.modules[0].id}/${course.modules[0].pages[0].id}`}
                >
                  <motion.a
                    variants={clickableVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className={cx('courseLink')}
                  >
                    <span className={cx('unitNumber')}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    <h2 className={cx('courseTitle')}>{course.title}</h2>

                    <p className={cx('courseDescription')}>
                      {course.description}
                    </p>
                  </motion.a>
                </Link>

                <div className={cx('courseModules')}>
                  {course.modules &&
                    course.modules.map((cm) => {
                      return (
                        <Link
                          key={cm.id}
                          href="/course/[courseId]/[moduleId]/[pageId]"
                          as={`/course/${course.id}/${cm.id}/${cm.pages[0].id}`}
                        >
                          <motion.a
                            variants={clickableVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className={styles.moduleLink}
                          >
                            <span>{cm.title}</span>
                            <span>🡒</span>
                          </motion.a>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          ))}
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
