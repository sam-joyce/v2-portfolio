import React from "react";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <header>
      <div>SJ | Dev Portfolio</div>
      <nav>
        <a href="">About Me</a>
        <a href="">Projects</a>
        <a href="">Education</a>
        <a href="tel:07800645405" className={styles.contact_btn}>Contact</a>
      </nav>
    </header>
  );
};

export default Nav;
