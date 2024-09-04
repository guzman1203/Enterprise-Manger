import React, { useState } from 'react';
import axios from 'axios';

const InventoryForm = () => {
  const [formData, setFormData] = useState({
    entry_created_at: '',
    entry_modified_at: '',
    description: '',
    cost: 0.0,
    units_in_stock: '',
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
        description: '',
        cost: 0.0,
        units_in_stock: ''
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
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Cost:</label>
        <input
          type="number"
          name="cost"
          value={formData.cost}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Units in stock:</label>
        <input
          type="number"
          name="units_in_stock"
          value={formData.units_in_stock}
          step="1"
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit">Create Inventory Product</button>
    </form>
  );
};

export default InventoryForm;
