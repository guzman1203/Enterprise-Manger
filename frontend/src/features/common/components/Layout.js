// components/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';

import NavBarHome from './NavBar_Home';
import NavBarOrders from '../../orders/components/NavBar_Orders';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      {location.pathname.startsWith('/sales-and-services') ? <NavBarOrders /> : <NavBarHome />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
