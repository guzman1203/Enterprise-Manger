import React, { useState, useEffect } from 'react';
import { createCustomer, getCustomer, updateCustomer } from '../services/api';

const CustomerForm = ({ customerId }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  useEffect(() => {
    if (customerId) {
      loadCustomerData();
    }
  }, [customerId]);

  const loadCustomerData = async () => {
    const response = await getCustomer(customerId);
    setFormData(response.data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (customerId) {
      await updateCustomer(customerId, formData);
    } else {
      await createCustomer(formData);
    }
    // Clear the form or navigate away
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{customerId ? 'Update' : 'Create'} Customer</button>
    </form>
  );
};

export default CustomerForm;
