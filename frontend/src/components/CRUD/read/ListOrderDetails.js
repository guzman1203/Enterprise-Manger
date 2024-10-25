import React, { useEffect, useState } from 'react';
import { getOrderDetails, deleteOrderDetail } from '../../../common/api';

const OrderDetailList = () => {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    loadOrderDetails();
  }, []);

  const loadOrderDetails = async () => {
    const response = await getOrderDetails();
    console.log(response.data.results);  // Check the structure of the response
    setOrderDetails(response.data.results);
  };

  const handleDelete = async (id) => {
    await deleteOrderDetail(id);
    loadOrderDetails();
  };

  return (
    <div>
      <h2>OrderDetail List</h2>
      <ul>
        {orderDetails.map((orderDetail) => (
          <div key={orderDetail.id}>
            <li>Id: {orderDetail.id}</li>
            <li>
               <button onClick={() => handleDelete(orderDetail.id)}>Delete</button>
            </li>
            <ul>
                <li>Customer Id: {orderDetail.customer_id}</li>
                <li>Order Number: {orderDetail.order_number}</li>
                <li>Product Id: {orderDetail.product_id}</li>
                <li>Quantity Ordered {orderDetail.qty_ordered}</li>
                <li>Created At: {orderDetail.entry_created_at}</li>
                <li>Modified At: {orderDetail.entry_modified_at}</li>
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetailList;
