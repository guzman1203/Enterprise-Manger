import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './features/common/components/Layout';

import CustomerCreate from './features/customers/components/Customer_Create';
import CustomerList from './features/customers/components/Customer_List';


import OrderCreate from './features/orders/components/Order_Create';
import OrderList from './features/orders/components/Order_List';

import InventoryProductCreate from './features/inventory/components/InventoryProduct_Create';
import InventoryProductList from './features/inventory/components/InventoryProduct_List';

import OrderDetailCreate from './features/order-details/components/OrderDetail_Create';
import OrderDetailList from './features/order-details/components/OrderDetail_List';
//import OrderRead from './components/OrderRead';

import CustomerOrders from './features/customers/components/CustomerOrders';

import SalesOrderPage from './features/orders/Order_Page';
import OrderSearchPage from './features/orders/Order_Search_Page';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />

                    <Route path="/create-customer" element={<CustomerCreate />} />
                    <Route path="/create-inventory" element={<InventoryProductCreate />} />
                    <Route path="/create-order-detail" element={<OrderDetailCreate />} />
                    <Route path="/create-order" element={<OrderCreate />} />
                    <Route path="/customer-list" element={<CustomerList />} />
                    <Route path="/inventory-list" element={<InventoryProductList />} />
                    <Route path="/order-list" element={<OrderList />} />
                    <Route path="/order-detail-list" element={<OrderDetailList />} />
                    <Route path="/customer-orders" element={<CustomerOrders customerId={1} />} />
                    <Route path="/active-orders" element={<SalesOrderPage />} />
                    <Route path="/sales-and-services/search" element={<OrderSearchPage />} />
                    <Route path="/sales-and-services" element={<SalesOrderPage />} />

                </Routes>
            </Layout>
        </Router>
    );
}

const Home = () => (
    <div>
      <h2>Home Page</h2>
    </div>
  );

export default App;
