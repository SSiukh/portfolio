import React from "react";
import styles from "./About.module.css";
import img from "../../assets/about-img.png";
import icons from "../../assets/icons.svg";

function About() {
  return (
    <section id="about-section" className={styles.aboutSection}>
      <div className="container">
        <h2 className={styles.aboutTitle}>About</h2>
        <div className={styles.aboutContainer}>
          <img
            src={img}
            alt="my about image"
            className={styles.aboutImg}
            height={360}
          />
          <ul className={styles.aboutList}>
            <li className={styles.aboutItems}>
              <svg className={styles.aboutIcon}>
                <use href={`${icons}#icon-pointer`}></use>
              </svg>
              <div className={styles.aboutItemsConatiner}>
                <h3 className={styles.aboutItemsTitle}>Frontend Developer</h3>
                <p className={styles.aboutItemsText}>
                  I`m actively improving my skills through revent courses,
                  including the GoIT "Fullstack Developer" course.
                </p>
              </div>
            </li>
            <li className={styles.aboutItems}>
              <svg className={styles.aboutIcon}>
                <use href={`${icons}#icon-database`}></use>
              </svg>
              <div className={styles.aboutItemsConatiner}>
                <h3 className={styles.aboutItemsTitle}>
                  Computer Science bachelor
                </h3>
                <p className={styles.aboutItemsText}>
                  I`m studying full-time on a budget basis. I completed
                  coursework on "Web Application for Time Management" focusing
                  on the user interface.
                </p>
              </div>
            </li>
            <li className={styles.aboutItems}>
              <svg className={styles.aboutIcon}>
                <use href={`${icons}#icon-embed2`}></use>
              </svg>
              <div className={styles.aboutItemsConatiner}>
                <h3 className={styles.aboutItemsTitle}>Freelancer</h3>
                <p className={styles.aboutItemsText}>
                  I completed several projects on freelance platforms,
                  particulary related to object-oriented programming and
                  typesetting.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
