import {createStore} from 'redux';

// This is the reducer
const store = createStore((state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT': 
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET': 
            return {
                count: 0
            }
        default: 
            return state;
    }
})

console.log(store.getState());
store.subscribe(() => {
    console.log(store.getState());
})


// This is the action
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})