import React, { useContext } from 'react';
import { siteContext } from '../context/siteContext';
import { Link } from 'gatsby';
import Nav from './nav';
import Hamburger from './hamburger';
import '../styles/main.scss';

const Layout = ({ children }) => {
  const { setActivePage } = useContext(siteContext);

  return (
    <>
      <header className="header">
        <Link to="/" onClick={() => setActivePage(null)}>
          <div className="header__logo-container">
            <h1 className="header__logo">Steph Meltzer</h1>
          </div>
        </Link>
        <Hamburger />
      </header>
      <div className="content-wrapper">
        <Nav />
        <main className="main">{children}</main>
      </div>
    </>
  );
};

export default Layout;
