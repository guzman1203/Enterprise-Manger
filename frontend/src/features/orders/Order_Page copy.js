import React, { useState, useEffect } from 'react';
import { getActiveOrders, calculateDateDifference } from '../../services/api';
import OrderBasicInfo from './components/Order_BasicInfo';
import OrderCostInfo from './components/Order_CostInfo';
import OrderShippingInfo from './components/Order_ShippingInfo';
import ProductDetailsTable from './components/Order_ProductTable';
import ButtonScroller from '../common/components/ButtonScroller';

const SalesOrderPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [jumpIndex, setJumpIndex] = useState('');
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

    const handleFirst = () => {
        setCurrentIndex(0);
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + activeOrders.length) % activeOrders.length);
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % activeOrders.length);
    };
    const handleLast = () => {
        setCurrentIndex(activeOrders.length-1);
    };

    const handleJump = () => {
        const index = parseInt(jumpIndex, 10) - 1; //Adjust for base 0 index
        if (index >= 0 && index < activeOrders.length) {
            setCurrentIndex(index)
        }
        else {
            alert('Invalid order number');
        }
        setJumpIndex('');
    }
    const handleInputChange = (e) => {
        setJumpIndex(e.target.value);
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (activeOrders.length === 0) return <div>No orders found</div>;

    const currentOrder = activeOrders[currentIndex];
    const dateTimeOrdered = new Date(currentOrder.entry_created_at);
    const dateDifference = calculateDateDifference(dateTimeOrdered, Date())

    return (
        <div>
            <div><h2>Order {currentIndex + 1} of {activeOrders.length}</h2></div>
            

            <div><OrderBasicInfo currentOrder={currentOrder} /></div>   
            
            <div>
                <h2>Shipping Info</h2>
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
                <h2>Cost</h2>
                <OrderCostInfo currentOrder={currentOrder}/>
            </div>

            <div>
                <button onClick={handleFirst} disabled={activeOrders.length <= 1}>First</button>
                <button onClick={handlePrevious} disabled={activeOrders.length <= 1}>Previous</button>
                <button onClick={handleNext} disabled={activeOrders.length <= 1}>Next</button>
                <button onClick={handleLast} disabled={activeOrders.length <= 1}>Last</button>
            </div>

            <div>
                <input 
                    type="number"
                    value={jumpIndex}
                    onChange={handleInputChange}
                    placeholder={currentIndex+1}
                />
                <button onClick={handleJump}>Jump to Order</button>
                <p>Order {currentIndex + 1} of {activeOrders.length}</p>
            </div>

        </div>
    );
};

export default SalesOrderPage;