import React, { useState } from 'react';
import OrderList from './OrderList';

const ViewOrders = () => {
  const [currentOrder, setCurrentOrder] = useState(null);

  return (
    <div>
      <h2>View Orders</h2>
      <OrderList setCurrentOrder={setCurrentOrder} />
    </div>
  );
};

export default ViewOrders;
