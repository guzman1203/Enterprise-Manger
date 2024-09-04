import React, { useEffect, useState } from 'react';
import { getOrders, deleteOrder } from '../../../services/api';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const response = await getOrders();
    console.log(response.data.results);  // Check the structure of the response
    setOrders(response.data.results);
  };

  const handleDelete = async (id) => {
    await deleteOrder(id);
    loadOrders();
  };

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <li>Id: {order.id}</li>
            <ul>   
              <li>Cancelled Status: {order.is_cancled ? "Cancelled" : "In Progress"}</li> 
              <li>Complete Status: {order.is_completed ? "Completed" : "In Progress"}</li>
              <li>Total: {order.order_total}</li>
              <li>Type: {order.type}</li>
              <li>
                <button onClick={() => handleDelete(order.id)}>Delete</button>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
