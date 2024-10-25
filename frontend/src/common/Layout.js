// components/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from './NavBar';
import NavBarOrders from '../components/navbars/NavBar_Orders';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      {location.pathname.startsWith('/sales-and-services') ? <NavBarOrders /> : <NavBar />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
