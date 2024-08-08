import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <a className={styles.logo} href="/">
              <span className={styles.logoFirstSpan}>Port</span>
              <span className={styles.logoSecondSpan}>folio</span>
            </a>
            <ul className={styles.navList}>
              <li className={styles.navListItem}>About</li>
              <li className={styles.navListItem}>Experience</li>
              <li className={styles.navListItem}>Projects</li>
              <li className={styles.navListItem}>Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
