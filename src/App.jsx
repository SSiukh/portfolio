import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Decorative from "./components/Decorative/Decorative";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  return (
    <div className={styles.App}>
      <Decorative />
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
