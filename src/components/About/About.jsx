import React from "react";
import styles from "./About.module.css";
import img from "../../assets/about-img.png";

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <h2 className={styles.aboutTitle}>About</h2>
        <div className={styles.aboutContainer}>
          <img
            src={img}
            alt="my about image"
            className={styles.aboutImg}
            height={375}
          />
          <ul className={styles.aboutList}>
            <li className={styles.aboutItems}>
              <svg className={styles.aboutIcon}>
                <use></use>
              </svg>
              <div className={styles.aboutItemsConatiner}>
                <h3 className={styles.aboutItemsTitle}></h3>
                <p className={styles.aboutItemsText}></p>
              </div>
            </li>
            <li className={styles.aboutItems}>
              <svg className={styles.aboutIcon}>
                <use></use>
              </svg>
              <div className={styles.aboutItemsConatiner}>
                <h3 className={styles.aboutItemsTitle}></h3>
                <p className={styles.aboutItemsText}></p>
              </div>
            </li>
            <li className={styles.aboutItems}>
              <svg className={styles.aboutIcon}>
                <use></use>
              </svg>
              <div className={styles.aboutItemsConatiner}>
                <h3 className={styles.aboutItemsTitle}></h3>
                <p className={styles.aboutItemsText}></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
