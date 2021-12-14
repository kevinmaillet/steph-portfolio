import React, { useContext } from 'react';
import { siteContext } from '../context/siteContext';

const Hamburger = () => {
  const { setNavOpen, isNavOpen } = useContext(siteContext);
  return (
    <div
      className={`hamburger ${isNavOpen ? 'animate-hamburger' : ''}`}
      onClick={() => setNavOpen(!isNavOpen)}
      onKeyDown={() => setNavOpen(!isNavOpen)}
      role="button"
      tabIndex={0}
    >
      <span className="bar1"></span>
      <span className="bar2"></span>
      <span className="bar3"></span>
    </div>
  );
};

export default Hamburger;
