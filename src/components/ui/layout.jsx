import React from 'react';
import NavBar from '../navigation/nav-bar';
import Footer from '../footer/footer';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
