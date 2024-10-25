import axios from 'axios';
const API_URL = 'http://localhost:8000/api';


///////////////////////
///   CRUD-CREATE   ///
///////////////////////

// Create a new customer
export const createCustomer = async (customerData) => {
    return await axios.post(`${API_URL}/customer-table/`, customerData);
};

// Create a new inventory product
export const createInventory = async (inventoryData) => {
    return await axios.post(`${API_URL}/inventory-table/`, inventoryData);
};

// Create a new order detail
export const createOrderDetail = async (orderDetailData) => {
    return await axios.post(`${API_URL}/order_detail-table/`, orderDetailData);
};
// Create a new order detail
export const createOrder = async (orderData) => {
    return await axios.post(`${API_URL}/order-table/`, orderData);
};



/////////////////////
///   CRUD-READ   ///
/////////////////////

// Get all customers
export const getCustomers = async () => {
    return await axios.get(`${API_URL}/customer-table/`);
};
// Get all inventory products
export const getInventory = async () => {
    return await axios.get(`${API_URL}/inventory-table/`);
};
// Get all order details
export const getOrderDetails = async () => {
    return await axios.get(`${API_URL}/order_detail-table/`);
};
// Get all order details
export const getOrders = async () => {
    return await axios.get(`${API_URL}/order-table/`);
};

// Get a single customer by ID
export const getCustomer = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/customer-table/${id}/`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching product list of the order:', error);
        throw error
    }
};

// Get a single inventory product by ID
export const getInventoryProduct = async (id) => {
    return await axios.get(`${API_URL}/inventory-table/${id}/`);
};

// Get a single order detail by ID
export const getOrderDetail = async (id) => {
    return await axios.get(`${API_URL}/order_detail-table/${id}/`);
};

// Get a single order detail by ID
export const getOrder = async (id) => {
    return await axios.get(`${API_URL}/order-table/${id}/`);
};

// Get all orders made by a customer
export const getCustomerOrders = async (customerId) => {
    try {
      const response = await axios.get(`${API_URL}/customer-table/${customerId}/orders/`);
      console.log(response)
      return response.data;
    } catch (error) {
      console.error('Error fetching customer orders:', error);
      throw error;
    }
};

// Get all active orders
export const getActiveOrders = async () => {
    try {
        const response = await axios.get(`${API_URL}/order-table/active`);
        console.log(response)
        return response.data
    } catch (error) {
        console.error('Error fetching all active orders:', error);
        throw error
    }
};

// Get product list of an order
export const getOrderDetailsWithProducts = async (orderId) => {
    try {
        const response = await axios.get(`${API_URL}/order-table/${orderId}/details-products/`);
        console.log(response)
        return response.data.results;
    } catch (error) {
        console.error('Error fetching product list of the order:', error);
        throw error
    }
};

//////////////////////
///   CRUD-UPDATE  ///
//////////////////////

// Update a customer
export const updateCustomer = async (id, customerData) => {
    return await axios.put(`${API_URL}/customer-table/${id}/`, customerData);
};

// Update an inventory product
export const updateInventoryProduct = async (id, inventoryData) => {
    return await axios.put(`${API_URL}/inventory-table/${id}/`, inventoryData);
};

// Update an order detail
export const updateOrderDetail = async (id, orderDetailData) => {
    return await axios.put(`${API_URL}/order_detail-table/${id}/`, orderDetailData);
};

// Update an order detail
export const updateOrder = async (id, orderData) => {
    return await axios.put(`${API_URL}/order-table/${id}/`, orderData);
};


///////////////////////
///   CRUD-DELETE   ///
///////////////////////

// Delete a customer
export const deleteCustomer = async (id) => {
    return await axios.delete(`${API_URL}/customer-table/${id}/`);
};

// Delete an inventory product
export const deleteInventoryProduct = async (id) => {
    return await axios.delete(`${API_URL}/inventory-table/${id}/`);
};

// Delete an order detail
export const deleteOrderDetail = async (id) => {
    return await axios.delete(`${API_URL}/order-detail-table/${id}/`);
};

// Delete an order detail
export const deleteOrder = async (id) => {
    return await axios.delete(`${API_URL}/order-table/${id}/`);
};


//////////////////////////
///   Specific Needs   ///
//////////////////////////

export const calculateDateDifference = (date1, date2) => {
    const new_date1 = new Date(date1);
    const new_date2 = new Date(date2);

    new_date1.setHours(0,0,0,0);
    new_date2.setHours(0,0,0,0);

    const dateDifferenceInMilliseconds = Math.abs(new_date1 - new_date2);
    const dateDifferenceInDays = Math.floor(dateDifferenceInMilliseconds / (1000 * 60 * 60 * 24));

    return dateDifferenceInDays
}

export const searchOrders = async (params) => {
    const response = await axios.get('/api/search-orders/', { params });
    return response.data;
};
