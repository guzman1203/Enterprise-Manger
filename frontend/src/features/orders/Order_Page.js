import React, { useState, useEffect } from 'react';
import { getActiveOrders, calculateDateDifference } from '../../services/api';
import OrderBasicInfo from './components/Order_BasicInfo';
import OrderCostInfo from './components/Order_CostInfo';
import OrderShippingInfo from './components/Order_ShippingInfo';
import ProductDetailsTable from './components/Order_ProductTable';
import ButtonScroller from '../common/components/ButtonScroller';
//import ButtonScroller from '../common/components/ButtonScroller';

const SalesOrderPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeOrders, setActiveOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {    
        const fetchActiveOrders = async () => {
            try {
                const response = await getActiveOrders();
                setActiveOrders(response);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchActiveOrders();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (activeOrders.length === 0) return <div>No orders found</div>;

    const currentOrder = activeOrders[currentIndex];
    const dateTimeOrdered = new Date(currentOrder.entry_created_at);
    const dateDifference = calculateDateDifference(dateTimeOrdered, Date())

    return (
        <div>
            <div><h2>Order {currentIndex + 1} of {activeOrders.length}</h2></div>
            <OrderBasicInfo currentOrder={currentOrder} />   
            <div>
                <h3>Shipping Info</h3>
                <OrderShippingInfo customerId={currentOrder.customer_id} order={currentOrder} />
            </div>
            <div>
                {/* TODO  Make the table load with a button */}
                <h2>Products</h2>
                <ProductDetailsTable orderId={currentOrder.id} />
            </div>
            <div>
                <p>Date Ordered: {dateTimeOrdered.toLocaleDateString()}</p>
                <p>How many days ago: {dateDifference}</p>
            </div>
            <div>
                <h3>Cost</h3>
                <OrderCostInfo currentOrder={currentOrder}/>
            </div>

            <ButtonScroller
                currentIndex={currentIndex}
                totalItems={activeOrders.length}
                onIndexChange={setCurrentIndex}
                item_type={"order"}
            />
        </div>
    );
};

export default SalesOrderPage;