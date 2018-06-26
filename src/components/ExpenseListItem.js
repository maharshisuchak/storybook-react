import React from 'react';
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>

        <p><b>Amount: </b>{amount}- <b>CreatedAt: </b>{createdAt}</p>

    </div>
);

// export default connect()(ExpenseListItem);
export default ExpenseListItem;

/*
// delete from the same page :-)

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (

    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>

        <p><b>Amount: </b>{amount}- <b>CreatedAt: </b>{createdAt}</p>

    <button onClick={() => {
        dispatch(removeExpense({ id }))
    }}> Remove</button> 
    </div>
);
    
*/
