import React from "react";
import styles from "./Decorative.module.css";

function Decorative() {
  return (
    <>
      <div className="container">
        <div className={styles.decorativeFirst}></div>
        <div className={styles.decorativeSecond}></div>
      </div>
    </>
  );
}

export default Decorative;
