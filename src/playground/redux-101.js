import { createStore } from 'redux';

// - - - - ACTION GENERATORS - - - - - 
// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});



// REDUCERS
// 1. REDUCERS ARE PURE FUNCTIONS 
// 2. NEVER CHANGE STATE OR ACTION
const countReducer = (state = {count: 0}, action) => {
// const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + action.incrementBy
        };
      case 'DECREMENT':
        return {
          count: state.count - action.decrementBy
        };
      case 'SET':
        return {
          count: action.count
        };
      case 'RESET':
        return {
          count: 0
        };
      default:
        return state;
    }
  };

const store = createStore(countReducer);

  const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
  });
  
  store.dispatch(incrementCount({ incrementBy: 5 }))
  
  store.dispatch(incrementCount());
  
  store.dispatch(resetCount());
  
  store.dispatch(decrementCount());
  
  store.dispatch(decrementCount({ decrementBy: 10 }));
  
  store.dispatch(setCount({ count: -100 }));













// - - - - INLINE ACTION OBJECTS - - - - - 
// increment the count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 10
});

// reset the count
store.dispatch({
    type: 'RESET'
});

// decrament the count
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'DECREMENT',
    decramentBy: 10
});

store.dispatch({
    type: 'SET',
    count: 500
})