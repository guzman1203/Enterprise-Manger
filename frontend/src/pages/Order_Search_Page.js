/*
Search Queries
    CustomerID
    Date Range
        Date Selected
            All Dates
            Today
            Week to Date
            Month to Date
            Last 30 Days
            Quarter to Date
            Year to Date
            Yesterday
            Last Week
            Last Month
            Last Quarter
            Last Year
        From Date
        To Date
    Order Number
    Customer PO
    Customer Type
    Ship Via
    Salesperson
    Order Type
    Company Name
    Last Name
    Address
    Address2
    City
    State
    Zip Code
    Completed
        All Records
        Yes
        No
    Message
    Notes

Exact Search

Cancel

Go Search
*/


import React, { useState } from 'react';
import { searchOrders } from '../common/api';
import OrderSearchInput from '../components/search/Order_Search_Input';
import OrderSearchOutput from '../components/search/Order_Search_Output';

const OrderSearchPage = () => {
    const [searchParams, setSearchParams] = useState({});
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams((prevParams) => ({ ...prevParams, [name]: value }));
    };

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await searchOrders(searchParams);
            setOrders(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Sale Order Search</h2>
            <OrderSearchInput searchParams={searchParams} handleChange={handleChange} handleSearch={handleSearch} />
            <OrderSearchOutput orders={orders} loading={loading} error={error} />
        </div>
    );
};

export default OrderSearchPage;
