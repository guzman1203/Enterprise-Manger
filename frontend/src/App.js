import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './common/Layout.js';

import CustomerCreate from './components/CRUD/create/CreateCustomer.js';
import ListCustomers from './components/CRUD/read/ListCustomers.js';


import OrderCreate from './components/CRUD/create/Order_Create.js';
import OrderList from './components/CRUD/read/Order_List.js';

import CreateInventory from './components/CRUD/create/CreateInventory.js';
import InventoryProductList from './components/CRUD/read/ListInventory.js';

import CreateOrderDetail from './components/CRUD/create/CreateOrderDetail.js';
import OrderDetailList from './components/CRUD/read/ListOrderDetails.js';
//import OrderRead from './components/OrderRead';

import CustomerOrders from './components/CRUD/read/CustomerOrders.js';

import SalesOrderPage from './pages/Order_Page.js';
import OrderSearchPage from './pages/Order_Search_Page.js';

import SalesPackingSlips from './pages/Sales_Packing_Slips.js';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />

                    <Route path="/create_customer" element={<CustomerCreate />} />
                    <Route path="/create_inventory" element={<CreateInventory />} />
                    <Route path="/create_order-detail" element={<CreateOrderDetail />} />
                    <Route path="/create_order" element={<OrderCreate />} />

                    <Route path="/read_customers" element={<ListCustomers />} />
                    <Route path="/read_inventory" element={<InventoryProductList />} />
                    <Route path="/read_orders" element={<OrderList />} />
                    <Route path="/read_order-details" element={<OrderDetailList />} />
                    
                    <Route path="/customer_orders" element={<CustomerOrders customerId={1} />} />
                    
                    <Route path="/active_orders" element={<SalesOrderPage />} />
                    
                    <Route path="/sales_and_services" element={<SalesOrderPage />} />
                    <Route path="/sales_and_services/search" element={<OrderSearchPage />} />
                    
                    <Route path="/sales_packing_slips" element={<SalesPackingSlips />} />

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
