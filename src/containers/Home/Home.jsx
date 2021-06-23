import React from "react";
import styles from "./Home.module.scss";

import Intro from '../../components/Intro';
import About from '../../components/About';

const Home = () => {
  return (
    <main>
      <Intro />
      <About />
    </main>
  );
};

export default Home;
