import { createStore } from "redux";
// console.log('101.js');




// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof paylo.incrementBy === 'number' ? payload.incrementBy : 1
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = (({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

// const add = ({ a, b }, c) => {
//     return a + b + c;
// }
// console.log(add({ a: 1, b: 2 }, 10));


const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            }
        case 'SET': {
            return {
                count: action.count
            };
        }
        default:
            return state;
    }
})


const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// console.log(store.getState());

// Actions : - than an object that gets sent to the store
// I'd like to increment the count

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// console.log(store.getState());

store.dispatch(decrementCount());

// unsubscribe();
store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 10 }));


store.dispatch(setCount({ count: 101 }));

// I'd like to reset the count to zero 
