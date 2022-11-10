import { createContext, useContext, useReducer } from 'react';

const CounterContext = createContext();

export function useCounter() {
  return useContext(CounterContext);
}

function reducer(state = {}, action) {
  switch (action.type) {
    case '+':
      return { counter: state.counter++ };
    case '-':
      return { counter: state.counter-- };
    default:
      return state;
  }
}
export function CounterContexProvider({ children }) {
  const [value, dispatch] = useReducer(reducer, { counter: 0 }, () => ({
    counter: 1,
  }));
  const decrement = () => {
    dispatch({ type: '+' });
  };
  const increment = () => {
    dispatch({ type: '-' });
    };
    
  return (
    <CounterContext.Provider value={{ value, decrement, increment }}>
      {children}
    </CounterContext.Provider>
  );
}
