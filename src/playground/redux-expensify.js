import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
}); 

// EDIT_EXPENSE

/*
const editExpense = ({ id, amount }) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates: { amount }
});
*/

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER

// const setTextFilter = ({ text = '' }) => ({
//     type: 'SET_TEXT_FILTER',
//     text
// });

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});


// SET_START_DATE

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense)
            return [
                ...state,
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            // return state.filter((expense) => expense.id != action.id);
            return state.filter(({ id }) => id != action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id = action.id) {
                    return {
                        ...expense, ...action.updates
                    };
                }
                else {
                    return expense;
                }
            })
        default:
            return state
    }
};


// Filter Reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}


// Get visible expenses
// const getVisibleExpenses = (expenses, filters) => {
//     return expenses;
// }

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        // const textMatch = true;

        // figure out if expenses.description as the text variable string inside of it
        // includes
        // convert both string to lower case

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }

        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense(
    { description: 'Rent', amount: 1200, createdAt: -21000 }
));
const expenseTwo = store.dispatch(addExpense(
    { description: 'Coffee', amount: 1220, createdAt: -1000 }
));
// console.log(expenseOne);

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(-999));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 45 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter('fee'));
store.dispatch(setTextFilter('notinclude'));
store.dispatch(setTextFilter('')); //all 

store.dispatch(sortByDate());
store.dispatch(sortByAmount());

/*
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 45 }));

// another way to call editExpense reducer : it need to change definition :- commented above


store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

// another way to call setTextFilter reducer : it need to change definition :- commented above
// store.dispatch(setTextFilter({ text: 'rent' }));
// store.dispatch(setTextFilter({ text: '' }));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

*/

const demoState = {
    expenses: [{
        id: 'poindlsdf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 12550,
        createdAt: 0
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount 
        startDate: undefined,
        endDate: undefined
    }
}


