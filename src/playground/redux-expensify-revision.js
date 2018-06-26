import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
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
// EDIT_EXPENSE
const editExpense = (id, updates) => {
    return {
        'type': 'EDIT_EXPENSE',
        id, updates
    }
}
// SET_TEXT_FILTER

const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

// SORT_BY_DATE

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}

// SORT_BY_AMOUNT

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

// SET_START_DATE

const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

// SET_END_DATE

const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // state.push(action.expense);
            // return state.concat(action.expense);
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state;
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else {
                    return expense
                }
            })
        // return state;
        default:
            return state;
    };
}


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

// Get Visible Expenses


const getVisibleExpenese = (expenses, { text, sortBy, startDate, endDate }) => {

    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number'
            || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number'
            || expense.createdAt <= endDate;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? 1 : -1;
        }
    });
}
// Store creation

// const store = createStore(expensesReducer);

const store = createStore(
    combineReducers({
        'expenses': expensesReducer,
        'filters': filtersReducer
    })
);



const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -12000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 50, createdAt: -1000 }));
const q = store.dispatch(addExpense({ description: 'Coffee', amount: 1550, createdAt: 25000 }));
const f = store.dispatch(addExpense({ description: 'Coffee', amount: 5000, createdAt: -21000 }));
const y = store.dispatch(addExpense({ description: 'Coffee', amount: 2350, createdAt: 11000 }));
const t = store.dispatch(addExpense({ description: 'Coffee', amount: 850, createdAt: 2000 }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 200 }));

// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());   
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenese(state.expenses, state.filters)
    console.log(visibleExpenses);
});

store.dispatch(setStartDate(-1000));
store.dispatch(setEndDate(1000));

// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1000));


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