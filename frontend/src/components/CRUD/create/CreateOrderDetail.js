import React from 'react';
import DynamicForm from '../../../common/DynamicForm';

const CreateOrderDetail = () => (
    <div>
        <h1>Order Detail Form</h1>
        <DynamicForm formType="order_detail" />
    </div>
);

export default CreateOrderDetail;