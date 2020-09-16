import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>
              © University of Illinois at Urbana-Champaign 2020 | Course
              materials developed by Anand Vic and Kimberly Mendoza
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
