import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();


store.dispatch(addExpense({ description: 'Water bill', amount: 1200, createdAt: 100 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 120, amount: 1200, }));
store.dispatch(addExpense({ description: 'Rent', amount: 12000, createdAt: 110 }));
store.dispatch(addExpense({ description: 'Cabel bill', amount: 1400 }));


// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 45 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


