import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { siteContext } from '../context/siteContext';

const Nav = () => {
  const { isActivePage, setActivePage, isNavOpen, setNavOpen } =
    useContext(siteContext);

  const handleClick = (e) => {
    setActivePage(e.target.innerText);

    if (isNavOpen) {
      setNavOpen(false);
    }
  };

  return (
    <div className="nav-container">
      <nav className={`nav ${isNavOpen ? 'nav--active' : ''}`}>
        <div className="nav__items">
          <Link
            to="/about"
            className={`nav__link ${isActivePage === 'About' ? 'nav__link--active' : ''
              }`}
            onClick={handleClick}
          >
            About
          </Link>
          <Link
            to="/work"
            className={`nav__link ${isActivePage === 'Projects' ? 'nav__link--active' : ''
              }`}
            onClick={handleClick}
          >
            Work
          </Link>
          <Link
            to="/ideas"
            className={`nav__link ${isActivePage === 'Ideas' ? 'nav__link--active' : ''
              }`}
            onClick={handleClick}
          >
            Ideas
          </Link>
          <Link
            to="/contact"
            className={`nav__link ${isActivePage === 'Contact' ? 'nav__link--active' : ''
              }`}
            onClick={handleClick}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
