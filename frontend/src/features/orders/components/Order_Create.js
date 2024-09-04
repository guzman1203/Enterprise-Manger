import React from 'react';
import DynamicForm from '../../common/components/DynamicForm';


const OrderCreate = () => (
    <div>
        <h1>Order Form</h1>
        <DynamicForm formType="order" />
    </div>
);

export default OrderCreate;