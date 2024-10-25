
import React from 'react';
import StateSelect from '../StateSelect';

const OrderSearchInput = ({ searchParams, handleChange, handleSearch }) => {

  return (
    <div>
        <label>
            Customer ID:
            <input type="number" name="customer_id" onChange={handleChange} />
        </label>
        <label>
            Date Selected:
            <select name="date_selected" onChange={handleChange}>
                <option value="">All Dates</option>
                <option value="Today">Today</option>
                <option value="Week to Date">Week to Date</option>
                <option value="Month to Date">Month to Date</option>
                {/* Add other date range options here... */}
            </select>
        </label>
        <label>
            From Date:
            <input type="date" name="from_date" onChange={handleChange} />
        </label>
        <label>
            To Date:
            <input type="date" name="to_date" onChange={handleChange} />
        </label>
        <label>
            Order Number:
            <input type="number" name="order_number" onChange={handleChange} />
        </label>
        <label>
            Customer PO: 
            <input type="text" name="customer_po" onChange={handleChange} />
        </label>
        <label>
            Customer Type: 
            <select name="customer_type" onChange={handleChange}>
                <option value="">Select a type</option>
                <option value="individual">Individual</option>
                <option value="company">Company</option>
            </select>
        </label>
        <label>
            Ship Via: 
            <input type="text" name="ship_via" onChange={handleChange} />
        </label>
        <label>
            Sales Person:
            {/* A select from options (aka sales person table) in the database */} 
        </label>
        <label>
            Order Type:
            <select></select> 
        </label>
        <label>
            Company Name: 
            <input type="text" name="company_name" onChange={handleChange} />
        </label>
        <label>
            Last Name: 
            <input type="text" name="last_name" onChange={handleChange} />
        </label>
        <label>
            Address: 
            <input type="text" name="address" onChange={handleChange} />
        </label>
        <label>
            Address2: 
            <input type="text" name="address2" onChange={handleChange} />
        </label>
        <label>
            City: 
            <input type="text" name="city" onChange={handleChange} />
        </label>
        <label>
            <StateSelect onChange={handleChange}/>
        </label>
        <label>
            Zip Code: 
            <input type="number" name="zip_code" onChange={handleChange} />
        </label>
        <label>
            Complete Status: 
            <input type="checkbox" name="is_complete" onChange={handleChange} />
        </label>
        <label>
            Message: 
            <input type="text" name="message" onChange={handleChange} />
        </label>
        <label>
            Notes: 
            <input type="text" name="notes" onChange={handleChange} />
        </label>

        <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default OrderSearchInput;