import React from 'react';
import Nav from './nav';
import '../styles/main.scss';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Nav />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
