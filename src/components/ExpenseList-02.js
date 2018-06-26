import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)

    }
};

export default connect(mapStateToProps)(ExpenseList);


// we can do like this in ExpenseList 
/*
{props.expenses.map((expense) => {
    return <ExpenseListItem expense={expense} />
})}
*/

/* but in ExpenseListItem we have all three property like this:
we need to do code like this 'props.expenses.description' 

const ExpenseListItem = ({ description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount}-{createdAt}</p>
    </div>
);

- so we passed the object using
spread operator in ExpenseList 

return <ExpenseListItem key={expense.id} {...expense} />

*/

