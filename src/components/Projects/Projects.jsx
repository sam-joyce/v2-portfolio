import React from "react";
import styles from "./Projects.module.scss";

import project1 from '../../assets/images/ft.png';
import project2 from '../../assets/images/minesweeper.png';
import project3 from '../../assets/images/ossl.png';

import { GrGithub } from 'react-icons/gr';
import { MdLaunch } from 'react-icons/md';

const Projects = () => {
  return (
    <section className={styles.projects_container}>
      <h2>Projects</h2>
      <div className={styles.project}>
        <div className={styles.project_info}>
          <h3>Fine Tune Football</h3>
          <p>I completed this React web application for someone who wanted to start a football coaching business. Users are able to contact him as well as book sessions in his calendar.</p>
          <div className={styles.tech}>
            <span>React</span>
            <span>Firebase</span>
            <span>JavaScript</span>
            <span>Calendly</span>
          </div>
          <div className={styles.links}>
            <a href="https://github.com/sam-joyce/fine-tune" target="__blank">
              <GrGithub />
            </a>
            <a href="https://finetunefootball.com/" target="__blank">
              <MdLaunch />
            </a>
          </div>
        </div>
        <div className={styles.project_image}>
          <img src={project1} alt="Image of Fine Tune Football Project" />
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.project_image}>
          <img src={project2} alt="Image of Minesweeper Project" />
        </div>
        <div className={styles.project_info}>
          <h3>Minesweeper</h3>
          <p>I built a copy of the minesweeper game. Users can click squares and are told how many bombs they are "touching". the aim of the game is to click all the squares without a bomb in. Should you click a square with a bomb in... you lose!</p>
          <div className={styles.tech}>
            <span>JavaScript</span>
            <span>Recursive Algorithm's</span>
          </div>
          <div className={styles.links}>
            <a href="https://github.com/sam-joyce/minesweeper" target="__blank">
              <GrGithub />
            </a>
            <a href="https://sam-joyce.github.io/minesweeper/" target="__blank">
              <MdLaunch />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.project_info}>
          <h3>Offshore Stainless</h3>
          <p>I built a new website for a local manufacturing company. I completed the build to match a Figma design I creted and showed the client beforehand. The deisgn was modern and also included a CMS so the sales team could post regular updates for customers of the business.</p>
          <div className={styles.tech}>
            <span>React</span>
            <span>sanity.io</span>
            <span>Firebase</span>
            <span>Firebase</span>
          </div>
          <div className={styles.links}>
            <a href="https://github.com/sam-joyce/oss" target="__blank">
              <GrGithub />
            </a>
            <a href="https://offshore-stainless.web.app/" target="__blank">
              <MdLaunch />
            </a>
          </div>
        </div>
        <div className={styles.project_image}>
          <img src={project3} alt="Image of Offshore Stainless Project" />
        </div>
      </div>
      <a href="https://github.com/sam-joyce" target="__blank">SEE MORE ON GITHUB</a>
    </section>
  );
};

export default Projects;
