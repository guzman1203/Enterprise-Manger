const OrderCostInfo = ({ currentOrder }) => {
    
    return (
        <div>
            <ul>
                <li>Subtotal: {currentOrder.sub_form}</li>
                <li>Freight: {currentOrder.freight}</li>
                <li>Tax 1: {currentOrder.sales_tax}</li>
                <li>Tax 2: {currentOrder.sales_tax2}</li>
                <li>Total: {currentOrder.total_order}</li>
            </ul>
        </div>
    );
};

export default OrderCostInfo;