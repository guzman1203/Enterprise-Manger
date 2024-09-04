import React, { useEffect, useState } from 'react';
import { getOrderDetailsWithProducts } from '../../../services/api';

const ProductDetailsTable = ({ orderId }) => {
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getOrderDetailsWithProducts(orderId);
        setProductDetails(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Number Ordered</th>
          <th>Number Shipped</th>
          <th>Description</th>
          <th>Disc?</th>
          <th>Tax</th>
          <th>Sales Price</th>
          <th>Notes</th>
          <th>Number in Stock</th>
          <th>Units of Measure</th>
          <th>Units</th>
          <th>Weight</th>
          <th>Volume</th>
          <th>Item Class</th>
          <th>Warehouse ID</th>
          <th>Job ID</th>
        </tr>
      </thead>
      <tbody>
        {productDetails.map((detail) => (
          <tr key={detail.product.product_id}>
            <td>{detail.product.product_id}</td>
            <td>{detail.qty_ordered}</td>
            <td>{detail.qty_shipped}</td>
            <td>{detail.product.description}</td>
            <td>{detail.discount}</td>
            <td>{detail.taxable}</td>
            <td>{detail.sales_price}</td>
            <td>{detail.notes}</td>
            <td>{detail.product.units_in_stock}</td>
            <td>{detail.units_of_measure}</td>
            <td>{detail.weight}</td>
            <td>{detail.volume}</td>
            <td>{detail.warehouse_id}</td>
            <td>{detail.job_id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductDetailsTable;
