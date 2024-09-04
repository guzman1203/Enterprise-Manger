import React, { useEffect, useState } from 'react';
import { getCustomerOrders } from '../../../services/api';

const CustomerOrders = ({ customerId }) => {
    const [orderDetails, setOrderDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const customerId = match.params.customer_id;
  
    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const data = await getCustomerOrders(customerId);
                setOrderDetails(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [customerId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (!Array.isArray(orderDetails) || orderDetails.length === 0) {
        return <p>No orders found for this customer.</p>;
    }

    return (
        <div>
        <h1>Orders for Customer {customerId}</h1>
        <ul>
            {orderDetails.map((orderDetail) => (
                <div key={orderDetail.id}>
                    <li>Order Details ID: {orderDetail.id}</li>
                    <li>Order Number: {orderDetail.order_number}</li>
                    <ul>
                        <li></li>
                    </ul>
                    <ul>
                        <li>Product Id: {orderDetail.product_id.product_id}</li>
                        <ul>
                            <li>Product Desc: {orderDetail.product_id.description}</li>
                            <li>Product Cost: {orderDetail.product_id.cost}</li>
                            <li>Product Number of Units in Stock: {orderDetail.product_id.units_in_stock}</li>
                        </ul>
                        <li>Customer Id: {customerId}</li>
                        <li>Quanty Ordered: {orderDetail.qty_ordered}</li>
                        <li>Ordered Date: {new Date(orderDetail.entry_modified_at).toLocaleDateString()}</li>
                    </ul>
                </div>
            ))}
        </ul>
        </div>
    );
};

export default CustomerOrders;
