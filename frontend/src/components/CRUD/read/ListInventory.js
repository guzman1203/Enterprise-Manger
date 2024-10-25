import React, { useEffect, useState } from 'react';
import { getInventory, deleteInventoryProduct } from '../../../common/api';

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    const response = await getInventory();
    console.log(response.data.results);  // Check the structure of the response
    setInventory(response.data.results);
  };

  const handleDelete = async (id) => {
    await deleteInventoryProduct(id);
    loadInventory();
  };

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventory.map((product) => (
            <li key={product.id}>
            <li>{product.product_id}</li> 
            <ul>
                <li>Desc: {product.description}</li>
                <li>Units in Stock: {product.units_in_stock}</li>
                <li>Cost: {product.cost}</li>
                <li>Created At: {product.entry_created_at}</li>
                <li>Modified At: {product.entry_modified_at}</li>
            </ul>  
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
