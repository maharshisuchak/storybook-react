import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses'
import { removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <br />
                <button onClick={this.onRemove}> Remove</button>
            </div>
        );
    }
};
/*

const EditExpensePage = (props) => {
    // console.log(props);
    return (
        <div>
            { // Editing the expense with id of {props.match.params.id} 
            }
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    // props.dispatch(editExpense(props.match.params.id, expense));
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                    // console.log('update', expense);
                }}
            />
            <br />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}> Remove</button>

        </div>
    );
};

*/

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id, expense) => (
            dispatch(editExpense(id, expense))
        ),
        removeExpense: (data) => (
            dispatch(removeExpense(data))
        )
    }
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            // return true; 
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);