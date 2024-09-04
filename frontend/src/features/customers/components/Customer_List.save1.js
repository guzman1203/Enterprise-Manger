import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('/api/customer-table/')
            .then(response => {
                console.log(response.data.results);  // Check the structure of the response
                setCustomers(response.data.results);
            })
            
            .catch(error => {
                console.error('There was an error fetching the customers!', error);
            });
    }, []);

    return (
        <div>
            <h1>Customers List</h1>
            <ul>
                {customers.map(customers => (
                    <li key={customers.id}>
                        {customers.id} {customers.first_name} {customers.last_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
