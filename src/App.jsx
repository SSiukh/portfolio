import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Decorative from "./components/Decorative/Decorative";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className={styles.App}>
      <Decorative />
      <Header />
      <Hero />
    </div>
  );
}

export default App;
