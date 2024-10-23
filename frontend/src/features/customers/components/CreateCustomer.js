import React from 'react';
import DynamicForm from '../../common/components/DynamicForm';


const CustomerCreate = () => (
    <div>
        <h1>Customer Form</h1>
        <DynamicForm formType="customer" />
    </div>
);

export default CustomerCreate;