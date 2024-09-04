import React, { useEffect, useState } from 'react';
import { getCustomers, deleteCustomer } from '../../../services/api';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const response = await getCustomers();
    console.log(response.data.results);  // Check the structure of the response
    setCustomers(response.data.results);
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    loadCustomers();
  };

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <li>Id: {customer.id}</li>
            <ul>   
              <li>FN: {customer.first_name}</li> 
              <li>LN: {customer.last_name}</li>
              <li>Address1: {customer.address}</li>
              <li>Address2: {customer.address2}</li>
              <li>Country: {customer.country}</li>
              <li>Type: {customer.customer_type}</li>
              <li>Status: {customer.is_active ? "Active" : "Inactive"}</li>
              <li>Created At: {customer.entry_created_at}</li>
              <li>Modified At: {customer.entry_modified_at}</li>
              <li>
                <button onClick={() => handleDelete(customer.id)}>Delete</button>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
