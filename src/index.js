const { createStore } = require('redux');

const initialState = {
    count: 0,
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            count: state.count + 1
        }
    } else if (action.type === 'DECREMENT') {
        return {
            ...state,
            count: state.count - 1
        }
    }
}

let store = createStore(reducer);
store.subscribe(() => console.log(store.getState()))

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'DECREMENT'
})