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

const store = configureStore();

store.subscribe(() => {
    // const state = store.getState();
    // const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    // console.log(visibleExpenses);
    // console.log(state.filters.text);
})

store.dispatch(addExpense({ description: 'Water bill', amount: 1200 }));

const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill',amount: 120 }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 45 }));

store.dispatch(setTextFilter('water'));

// store.dispatch(setTextFilter('bill'));



setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000);

// store.dispatch(setTextFilter('water'));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses);

// console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


