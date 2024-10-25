import React, { useState } from 'react';
import axios from 'axios';

const formConfig = {
  customer: [
    { label: 'Entry Created At', name: 'entry_created_at', type: 'datetime-local', required: true },
    { label: 'Entry Modified At', name: 'entry_modified_at', type: 'datetime-local', required: true },
    { label: 'Is Active', name: 'is_active', type: 'checkbox' },
    { label: 'Type', name: 'customer_type', type: 'text', required: true },
    { label: 'First Name', name: 'first_name', type: 'text', required: true },
    { label: 'Last Name', name: 'last_name', type: 'text', required: true },
    { label: 'Address', name: 'address', type: 'text', required: true },
    { label: 'Address 2', name: 'address2', type: 'text', required: true },
    { label: 'Country', name: 'country', type: 'text', required: true }
  ],
  inventory: [
    { label: 'Entry Created At', name: 'entry_created_at', type: 'datetime-local', required: true },
    { label: 'Entry Modified At', name: 'entry_modified_at', type: 'datetime-local', required: true },
    { label: 'Description', name: 'description', type: 'text', required: true},
    { label: 'Total Cost', name: 'cost', type: 'number', step: 0.01, required: true},
    { label: 'Units in Stock', name: 'units_in_stock', type: 'number', step: 1, required: true}
  ],
  order_detail: [
    { label: 'Entry Created At', name: 'entry_created_at', type: 'datetime-local', required: true },
    { label: 'Entry Modified At', name: 'entry_modified_at', type: 'datetime-local', required: true },
    { label: 'Order Number', name: 'order_number', type: 'text', required: true},
    { label: 'Product ID', name: 'product_id', type: 'text', required: true},
    { label: 'Quantity', name: 'qty_ordered', type: 'number', step: 1, required: true}
  ],
  order: [
    { label: 'Entry Created At', name: 'entry_created_at', type: 'datetime-local', required: true },
    { label: 'Entry Modified At', name: 'entry_modified_at', type: 'datetime-local', required: true },
    { label: 'Customer Id', name: 'customer_id', type: 'text', required: true },
    { label: 'type', name: 'type', type: 'text', required: true },
    { label: 'Is Cancelled', name: 'is_cancelled', type: 'checkbox' },
    { label: 'Is Completed', name: 'is_completed', type: 'checkbox' },
    { label: 'Total', name: 'order_total', type: 'number', step:0.01, required: true }
  ],
  // Add more configurations for other types of entries as needed
};

const DynamicForm = ({ formType }) => {
  const initialFormData = formConfig[formType].reduce((acc, field) => {
    acc[field.name] = field.type === 'checkbox' ? false : '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);

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
      const response = await axios.post(`/api/${formType}-table/`, formData);
      console.log(`${formType} created:`, response.data);
      setFormData(initialFormData);
    } catch (error) {
      console.error(`Error creating ${formType}:`, error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig[formType].map((field) => (
        <div key={field.name}>
          <label>{field.label}:</label>
          <input
            type={field.type}
            name={field.name}
            value={field.type === 'checkbox' ? undefined : formData[field.name]}
            checked={field.type === 'checkbox' ? formData[field.name] : undefined}
            onChange={handleChange}
            required={field.required}
            step={field.type === 'number' ? field.step : undefined}
          />
        </div>
      ))}
      <button type="submit">Create {formType}</button>
    </form>
  );
};

export default DynamicForm;
