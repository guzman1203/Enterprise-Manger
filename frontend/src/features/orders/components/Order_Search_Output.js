import React from 'react';

const OrderSearchOutput = ({ orders, loading, error }) => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (orders.length === 0) return <div>No orders found</div>;

    return (
        <div>
            <h2>Order List</h2>
            {orders.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Order Number</th>
                            <th>Customer ID</th>
                            <th>Order Date</th>
                            <th>Ship Via</th>
                            <th>Completed</th>
                            <th>Customer Type</th>
                            {/* Add other columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customer.id}</td>
                                <td>{new Date(order.entry_modified_at).toLocaleDateString()}</td>
                                <td>{order.ship_via}</td>
                                <td>{order.completed ? 'Yes' : 'No'}</td>
                                <td>{order.customer.customer_type}</td>
                                {/* Add other columns as needed */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>No orders found</div>
            )}
        </div>
    );
};

export default OrderSearchOutput;