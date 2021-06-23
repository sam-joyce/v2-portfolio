import React from "react";
import styles from "./About.module.scss";

import headshot from '../../assets/images/profile-pic-nology.jpg';

const About = () => {
  return (
    <section className={styles.about}>
      <h2>About me</h2>
      <div>
        <div>
          <h5>I am a software developer with a passion for solving problems and learning new things.</h5>
          <p>In January 2020, I completed a 3 month coding bootcamp with _nology.io, covering fullstack technologies such as ReactJS and NodeJS. After the course finished I was hired as a coach to teach on the course.</p>
          <p>Since starting in June 2020 I have taught and ran my own courses with both consumers, as well as corporate clients such as Deutsche Bank and Admiral Insurance.</p>
          <p>Why did I move into programming? I moved in order to be part of a fast paced industry, and to enjoy learning and solving problems every day.</p>
        </div>
        <div>
          <img src={headshot} alt="A picture of Sam" />
        </div>
      </div>
    </section>
  );
};

export default About;
