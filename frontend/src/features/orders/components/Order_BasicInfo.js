const OrderBasicInfo = ({ currentOrder }) => {
    
    return (
        <div>
            <ul>
                <li>Customer ID: {currentOrder.customer_id}</li>
                <li>Ship ID: {currentOrder.ship_id}</li>
                <li>Date Ordered: {currentOrder.entry_created_at}</li>
                <li>Date Shipped: {currentOrder.date_shipped}</li>
                <li>Order Number: {currentOrder.id}</li>
            </ul>
        </div>
    );
};

export default OrderBasicInfo;