import React from 'react';
import DynamicForm from '../../common/components/DynamicForm';


const CreateInventory = () => (
    <div>
        <h1>Inventory Product Form</h1>
        <DynamicForm formType="inventory" />
    </div>
);

export default CreateInventory;