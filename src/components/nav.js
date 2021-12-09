import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <Link to="/">
          <h1 className="header__logo">Steph Meltzer</h1>
        </Link>
        <nav className="header__nav">
          <Link to="/about" className="header__nav-link">
            About
          </Link>
          <Link to="/projects" className="header__nav-link">
            Projects
          </Link>
          <Link to="/ideas" className="header__nav-link">
            Ideas
          </Link>
          <Link to="/contact" className="header__nav-link">
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
