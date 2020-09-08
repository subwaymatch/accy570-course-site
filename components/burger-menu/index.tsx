import Link from 'next/link';
import { push as Menu } from 'react-burger-menu';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { BsBook, BsCalendar } from 'react-icons/bs';
import { IoIosFiling } from 'react-icons/io';

import styles from './burger-menu.module.scss';

export default function SlideMenu() {
  return (
    <>
      <Menu
        pageWrapId="page-wrap"
        outerContainerId="layout-wrapper"
        right
        burgerButtonClassName={styles.burgerButton}
        burgerBarClassName={styles.burgerBar}
        crossButtonClassName={styles.crossButton}
        crossClassName={styles.cross}
        menuClassName={styles.menu}
        itemListClassName={styles.itemList}
        overlayClassName={styles.overlay}
        customBurgerIcon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect width="30" height="2" />
                <rect y="9" width="30" height="2" />
                <rect y="18" width="30" height="2" />
              </g>
            </g>
          </svg>
        }
        customCrossIcon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.78 19.78">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect
                  x="9.04"
                  y="-3.24"
                  width="1.71"
                  height="26.26"
                  transform="translate(-4.1 9.89) rotate(-45)"
                />
                <rect
                  x="-3.24"
                  y="9.04"
                  width="26.26"
                  height="1.71"
                  transform="translate(-4.1 9.89) rotate(-45)"
                />
              </g>
            </g>
          </svg>
        }
      >
        <div>
          <Link href="/">
            <a className={styles.menuItem}>
              <IoIosFiling className={styles.menuItemIcon} />
              <span>Syllabus</span>
              <RiArrowDropRightLine className={styles.hoverIndicatorIcon} />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/schedule">
            <a className={styles.menuItem}>
              <BsCalendar className={styles.menuItemIcon} />
              <span>Schedule</span>
              <RiArrowDropRightLine className={styles.hoverIndicatorIcon} />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/course">
            <a className={styles.menuItem}>
              <BsBook className={styles.menuItemIcon} />
              <span>Learn</span>
              <RiArrowDropRightLine className={styles.hoverIndicatorIcon} />
            </a>
          </Link>
        </div>
      </Menu>
    </>
  );
}
