import React from "react";
import styles from "./Hero.module.css";
import logo from "../../assets/avat.png";

function Hero() {
  return (
    <section className={styles.sectionHero}>
      <div className="container">
        <div className={styles.heroContainer}>
          <div className={styles.heroInfoContainer}>
            <h1 className={styles.heroTitle}>Hi, I`m Sasha</h1>
            <p className={styles.heroText}>
              I'm a Computer sience student using HTML5, CSS3, JS and React for
              projects. Reach out if you’d like to learn more!
            </p>
            <button type="button" className={styles.heroButton}>
              Contact Me
            </button>
          </div>
          <div className={styles.heroImageContainer}>
            <img src={logo} alt="my logo" width="420" height="420" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
