import { createStore } from "redux";

// console.log('101.js');


const store = createStore((state = { count: 0 }, action) => {  // provide dafault state object
    // console.log('running');

    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };

        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;

            return {
                count: state.count - decrementBy
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

});


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// console.log(store.getState());

// Actions : - than an object that gets sent to the store

// I'd like to increment the count

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// unsubscribe();


// {
//     type:'INCREMENT'
// }


store.dispatch({
    type: 'INCREMENT'
});

// I'd like to reset the count to zero 

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT',
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

// console.log(store.getState());

store.dispatch({
    type: 'SET',
    count: 101
})