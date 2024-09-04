import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    entry_created_at: '',
    entry_modified_at: '',
    is_active: true,
    customer_type: '',
    first_name: '',
    last_name: '',
    address: '',
    address2: '',
    country: ''
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
      const response = await axios.post('/api/customer/', formData);
      console.log('Customer created:', response.data);
      setFormData({
        entry_created_at: '',
        entry_modified_at: '',
        is_active: true,
        customer_type: '',
        first_name: '',
        last_name: '',
        address: '',
        address2: '',
        country: ''
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
        <label>Is Active:</label>
        <input
          type="checkbox"
          name="is_active"
          checked={formData.is_active}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Customer Type:</label>
        <input
          type="text"
          name="customer_type"
          value={formData.customer_type}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address 2:</label>
        <input
          type="text"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit">Create Customer</button>
    </form>
  );
};

export default CustomerForm;
