import React from "react";
import styles from "./Home.module.scss";

import Intro from '../../components/Intro';
import About from '../../components/About';
import Projects from "../../components/Projects";

const Home = () => {
  return (
    <main>
      <Intro />
      <About />
      <Projects />
    </main>
  );
};

export default Home;
