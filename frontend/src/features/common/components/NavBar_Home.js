import React from 'react';
import { Link } from 'react-router-dom';

const NavBarHome = () => {
  return (
    <nav>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="sales-and-services">Sales, Services</Link></li>
          <ul>
              <li><Link to="invoices">Invoices</Link></li>
              <li><Link to="orders">Orders</Link></li>
              <li><Link to="packing_slips">Packing Slips</Link></li>
              <li><Link to="back_orders">Back Orders</Link></li>
              <li><Link to="quotes">Quotes</Link></li>
              <li><Link to="credit_memos">Credit Memos</Link></li>
          </ul>
          <li>CRUD Operations</li>
          <ul>
            <li>CREATE</li>
            <ul>
              <li><Link to="/create_customer">Create Customer</Link></li>
              <li><Link to="/create_inventory">Create Product</Link></li>
              <li><Link to="/create_order-detail">Create Order Detail</Link></li>
              <li><Link to="/create_order">Create Order</Link></li>

            </ul>
            <li>READ/DELETE Lists</li>
            <ul>
              <li><Link to="/customer_list">Customer List</Link></li>
              <li><Link to="/inventory_list">Inventory List</Link></li>
              <li><Link to="/order-detail_list">Order Detail List</Link></li>
              <li><Link to="/order_list">Order List</Link></li>
            </ul>
            <li>UPDATE</li>
            <ul>
              
            </ul>
          </ul>
          <li>Specific Needs</li>
          <ul>
            <li><Link to="/customer-orders">Customer's Orders</Link></li>
          </ul>
          
      </ul>
    </nav>
  );
};

export default NavBarHome;
