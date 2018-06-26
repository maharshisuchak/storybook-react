import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <p>{props.name}</p>
        <p>{props.expenses.length}</p>
        <p>{props.filters.text}</p>
    </div>
);

// const ConnectedExpenseList = connect()(ExpenseList)

// const ConnectedExpenseList = connect(() => { })(ExpenseList)

/*
const ConnectedExpenseList = connect((state) => {
    return {
        name: 'Tarang',
        expenses: state.expenses
    }
})(ExpenseList);
*/

const mapStateToProps = (state) => {
    return {
        name: 'Tarang',
        expenses: state.expenses,
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseList);

// export default ExpenseList;

// export default ConnectedExpenseList;