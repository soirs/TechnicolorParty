import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../organisms/Header/Header';
import HelmetProps from '../utils/helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet {...HelmetProps} />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
