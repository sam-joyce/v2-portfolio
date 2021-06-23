import React from "react";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <h1>Hello</h1>
      <h1>My name is Sam</h1>
      <h3>I build web applications.</h3>
      <p>Software Developer - working in London, with experience in financial services and education.</p>

      <div className={styles.links}>
        <a href="https://www.linkedin.com/in/sam-joyce-att/" target="__blank">LinkedIn</a>
        <a href="https://github.com/sam-joyce" target="__blank">Github</a>
      </div>
    </section>
  );
};

export default Intro;
