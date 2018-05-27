import React from 'react';
import ExpenseList from './ExpenseList';
import EspenseListFilters from './EspenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <EspenseListFilters/>
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;