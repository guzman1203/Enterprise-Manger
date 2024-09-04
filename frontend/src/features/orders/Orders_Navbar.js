/*
    unpost
    customer
    contact log
    notes 
    packing slip
    duplicate - allows you to duplicate an Invoice. 
    message - message placed on the buttom of the printed order. Click X when done.
    
    add - bring the next blank record ready for new data
    delete - confirm delete with ok
    search
    showall - useful after completing a search
    history - showcases order history for current order's customer
        - clicking on an order will bring up the order
    print
    back to homepage

    navigation - first, prev, next, last, and input "# out of total#"

*/

import React from "react";
import { Link } from 'react-router-dom';

const OrderPageNavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/sales-and-services"></Link>Sales and Services</li>
                <li><Link to="/sales-and-services/unpost"></Link>Unpost</li>
                <li><Link to="/sales-and-services/customer"></Link>Customer Info</li>
                <li><Link to="/sales-and-services/contact-log"></Link>Contact Log</li>
                <li><Link to="/sales-and-services/notes"></Link>Notes</li>
                <li><Link to="/sales-and-services/packing-slip">Packing Slip</Link></li>
                <li><Link to="/sales-and-services/duplicate"></Link>Duplicate</li>
                <li><Link to="/sales-and-services/message"></Link>Message</li>
                <li><Link to="/sales-and-services/add"></Link>Add</li>
                <li><Link to="/sales-and-services/delete"></Link>Delete</li>
                <li><Link to="/sales-and-services/search"></Link>Search</li>
                <li><Link to="/sales-and-services/show-all"></Link>Show-All</li>
                <li><Link to="/sales-and-services/customer-history">Customer History</Link></li>
                <li><Link to="/sales-and-services/print">Print</Link></li>
                <li><Link to="/home-page"></Link>Home Page</li>
            </ul>
        </nav>
    );
};

export default OrderPageNavBar;