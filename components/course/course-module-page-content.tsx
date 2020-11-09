import { useEffect } from 'react';
import Head from 'next/head';
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
  useEffect(() => {
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.id = 'MathJax-script';
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    head.appendChild(script);

    (window as any).MathJax = {
      tex: {
        inlineMath: [['\\(', '\\)']],
      },
    };
  }, [pageData]);

  return (
    <>
      <Head>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
      </Head>
      <div className={cx('courseModulePageWrapper')}>
        <span className={cx('moduleName')}>{moduleName}</span>
        <h1 className={cx('pageTitle')}>{pageData.title}</h1>
        <div
          className={cx('courseModulePageContent')}
          dangerouslySetInnerHTML={{ __html: pageData.content }}
        />
      </div>
    </>
  );
}
