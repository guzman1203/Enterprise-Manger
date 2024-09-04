import React, { useEffect, useState } from 'react';
import { getCustomer } from '../../../services/api';

const OrderShippingInfo = ({ customerId, order }) => {
  const [customer, setCustomer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomerOfOrder = async () => {
      try {
        const data = await getCustomer(customerId);
        setCustomer(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCustomerOfOrder();
  }, [customerId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
      <div>
          <div>
              <ul>
                  <li>{customer.customer_type === "individual" ? (customer.first_name + " " + customer.last_name) : customer.company}</li>
                  <li>Bill To: {customer.address}</li>
              </ul>
          </div>
          <div>
              <ul>
                  <li></li>
                  <li>Ship To: {order.address} {order.city}, {order.state} {order.zipcode}</li>
              </ul>
          </div>
          <div>
              <ul>
                  <li>PO Number: {order.customer_po}</li>
                  <li>Order Type: {order.type}</li>
                  <li>Sales Tax 1: {order.sales_tax_code}</li>
                  <li>Sales Tax 2: {order.sales_tax2_code}</li>
              </ul>
          </div>
          <div>
              <ul>
                  <li>Ship Via: {order.ship_via}</li>
                  <li>Terms: {order.terms}</li>
                  <li>Sales Person: {order.sales_person}</li>
                  <li>Cancel Date: {order.date_cancelled}</li>
                  <li>Notes: {order.notes}</li>
              </ul>
          </div>
      </div>
  );
};

export default OrderShippingInfo;
