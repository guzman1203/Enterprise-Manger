import React, { useState, useEffect } from 'react';
import { getCustomer, getCustomers } from '../../services/api';
import ButtonScroller from '../common/components/ButtonScroller';

const SalesCustomerPage = (customer_id) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {    
        const fetchCustomers = async () => {
            try {
                const response = await getCustomers();
                setCustomers(response);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCustomers();
        
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (customers.length === 0) return <div>No orders found</div>;

    const currentCustomer = customers[currentIndex];
    
    return (
        <div>
            <div><h2>Customer {currentIndex + 1} of {customers.length}</h2></div>
            
            <div>
                <ul>
                    <li>Customer ID: {currentCustomer.id}</li>
                    <li>Company Name: {currentCustomer.company_name}</li>
                    <li>Customer Type: {currentCustomer.customer_type}</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>Salutation: {currentCustomer.salutation}</li>
                    <li>Prefered Name: {currentCustomer.attention}</li>
                    <li>First Name: {currentCustomer.first_name}</li>
                    <li>Last Name: {currentCustomer.last_name}</li>
                    <li>Other Names: {currentCustomer.other_names}</li>{/**/}
                </ul>
            </div>

            <div>
                <ul>
                    <li>Address: {currentCustomer.address1}</li>
                    <li>City: {currentCustomer.city}</li>
                    <li>State: {currentCustomer.state}</li>
                    <li>Zipcode: {currentCustomer.zip}</li>
                    <li>County: {currentCustomer.county}</li>
                    <li>Country: {currentCustomer.country}</li>
                </ul>
            </div>

            <div>
                <h3>Contact Methods</h3>
                <div>
                    <ul>
                        {/* TODO For loop w/ all the contact information from customer contact method table */}
                        <li>{currentCustomer.contact.contact_type}: {currentCustomer.contact.contact_method}</li>
                    </ul>
                </div>
            </div>

            <li>Notes: {currentCustomer.notes}</li>
            <li>Directions: {currentCustomer.directions}</li>

            <div>
                <h3>Financial Info</h3>
                <div>
                    <ul>
                        <li>Credit Limit: {currentCustomer.credit_limit}</li>
                        <li>Balance: {}</li>
                        <li>Resale Number: {}</li>
                        <li>Credit Hold: {currentCustomer.credit_hold}</li>
                        <li>Credit Card: {currentCustomer.credit_card}</li>
                        <li>Credit Card Experation Date: {currentCustomer.credit_card_exp}</li>
                        <li>Sales Tax 1: {}</li>
                        <li>Sales Tax 2: {}</li>
                    </ul>
                </div>
            </div>

            <div>
                <h3>General Info</h3>
                <div>
                    <ul>
                        <li>Ship Via: {currentCustomer.ship_via}</li>
                        <li>Terms: {currentCustomer.terms}</li>
                        <li>Sales Person: {currentCustomer.sales_person}</li>
                        <li>Pricing: {currentCustomer.pricing}</li>
                        <li>Pricing Level: {currentCustomer.pricing_level}</li>
                    </ul>
                </div>
            </div>

            <div>
                <h3>Customer History</h3>
                <ul>
                    {/* TODO : create method to count number of orders, number of logs, and number of sites */}
                    <li>Entered Date: {currentCustomer.entry_created_at}</li>
                    <li>Modified Date: {currentCustomer.entry_modified_at}</li>
                    <li>Number of Orders: {}</li>
                    <li>Ship to: {}</li>
                    <li>Number of Logs: {}</li>
                    <li>Number of Sites: {}</li>
                </ul>
            </div>

            <ButtonScroller
                currentIndex={currentIndex}
                totalItems={customers.length}
                onIndexChange={setCurrentIndex}
                item_type={"customer"}
            />
        </div>
    );
};

export default SalesCustomerPage;