import { createStore } from "redux";

// Action generators - functions that return action objects

// const incrementCount = () => {
//     return {
//         type: 'INCREMENT',
//     };
// }

const add = ({ a, b }, c) => {
    return a + b + c;
}

console.log(add({ a: 1, b: 2 }, 5));

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

/*
store.dispatch({
    type: 'INCREMENT'
});

if we mispelld the type :'INCREMENTT' // it will not give any error
so we used action generator function : benifit : 1.reduce typo error and 2.intelisense 
*/

/*  Custom Data : incrementBy , decrementBy ,count 
    store.dispatch(incrementCount({ incrementBy: 5 }));
*/

// Reducers

/* 1. Reducers are pure functions :-
 what is pure function : 1.output only determine by the input 
it does not use anything else from outside the function scope or it does not
change outside the function scope 

let a = 20; 
const add = (b) =>{
    return a+b
}

let result ;
const add = (a,b) =>{   
    result= a+b
}

these are not a pure function 
*/

/* 2.
    Never change state or action
*/


const countReducer = (state = { count: 0 }, action) => {  // provide dafault state object
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET': {
            return {
                count: action.count
            };
        }
        default: {
            return state;
        }
    }
}

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ count: 50 }))

