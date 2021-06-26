import React, { useState } from "react";
import "./Nav.scss";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  const handleRoute = () => {
    setClicked(false);
  }

  return (
    <nav className="nav_items">
      <h1>SJ | Portfolio</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-links" onClick={handleRoute}>About Me</li>
        <li className="nav-links" onClick={handleRoute}>Projects</li>
        <li className="nav-links" onClick={handleRoute}>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
