import React from "react";
import { Link } from 'react-router-dom';

const NavBarOrders = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/sales-and-services">Sales and Services</Link></li>
                <li><Link to="/sales-and-services/unpost">Unpost</Link></li>
                <li><Link to="/sales-and-services/customer">Customer Info</Link></li>
                <li><Link to="/sales-and-services/contact-log">Contact Log</Link></li>
                <li><Link to="/sales-and-services/notes">Notes</Link></li>
                <li><Link to="/sales-and-services/packing-slip">Packing Slip</Link></li>
                <li><Link to="/sales-and-services/duplicate">Duplicate</Link></li>
                <li><Link to="/sales-and-services/message">Message</Link></li>
                <li><Link to="/sales-and-services/add">Add</Link></li>
                <li><Link to="/sales-and-services/delete">Delete</Link></li>
                <li><Link to="/sales-and-services/search">Search</Link></li>
                <li><Link to="/sales-and-services/show-all">Show-All</Link></li>
                <li><Link to="/sales-and-services/customer-history">Customer History</Link></li>
                <li><Link to="/sales-and-services/print">Print</Link></li>
                <li><Link to="/">Home Page</Link></li>
            </ul>
        </nav>
    );
};

export default NavBarOrders;