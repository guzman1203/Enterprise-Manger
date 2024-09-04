import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    entry_created_at: '',
    entry_modified_at: '',
    customer_id: '',
    type: '',
    is_cancled: false,
    is_completed: false,
    order_total: 0
  });

  const handleChange = (event) => {
    // the event target is formatted to have a name, a type and a value or checked boolean
    const { name, value, type, checked } = event.target;
    setFormData({
      // setFormData changes one object variable of formData at a time
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/order-table/', formData);
      console.log('Order created:', response.data);
      setFormData({
        entry_created_at: '',
        entry_modified_at: '',
        customer_id: '',
        type: '',
        is_cancled: false,
        is_completed: false,
        order_total: 0
      });
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Entry Created At:</label>
        <input
          type="datetime-local"
          name="entry_created_at"
          value={formData.entry_created_at}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Entry Modified At:</label>
        <input
          type="datetime-local"
          name="entry_modified_at"
          value={formData.entry_modified_at}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Customer ID:</label>
        <input
          type="text"
          name="customer_id"
          value={formData.customer_id}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Type:</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Is Cancelled:</label>
        <input
          type="checkbox"
          name="is_cancled"
          checked={formData.is_cancled}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Is Completed:</label>
        <input
          type="checkbox"
          name="is_completed"
          checked={formData.is_completed}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Total:</label>
        <input
          type="number"
          name="order_total"
          value={formData.order_total}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit">Create Order</button>
    </form>
  );
};

export default OrderForm;
