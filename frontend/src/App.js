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

                    <Route path="/create_customer" element={<CustomerCreate />} />
                    <Route path="/create_inventory" element={<InventoryProductCreate />} />
                    <Route path="/create_order-detail" element={<OrderDetailCreate />} />
                    <Route path="/create_order" element={<OrderCreate />} />

                    <Route path="/read_customers" element={<CustomerList />} />
                    <Route path="/read_inventory" element={<InventoryProductList />} />
                    <Route path="/read_orders" element={<OrderList />} />
                    <Route path="/read_order-details" element={<OrderDetailList />} />
                    <Route path="/customer_orders" element={<CustomerOrders customerId={1} />} />
                    <Route path="/active_orders" element={<SalesOrderPage />} />
                    <Route path="/sales_and_services/search" element={<OrderSearchPage />} />
                    <Route path="/sales_and_services" element={<SalesOrderPage />} />

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
