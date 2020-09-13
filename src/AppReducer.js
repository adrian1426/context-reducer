import React, { useReducer } from 'react';
import appReducer from './reducer/appReducer';

const AppReducer = () => {

  //----state,dispatch                reducer,stateInitial
  const [state, dispatch] = useReducer(appReducer, {
    count: 0,
    title: 'Hola'
  });

  const incrementar = () => {
    dispatch({ type: 'INCREMENTAR', payload: { title: 'incrementar' } })
  };

  const decrementar = () => {
    dispatch({ type: 'DECREMENTAR', payload: { title: 'decrementar' } })
  };

  return (
    <div>
      <h1>{state.title} : {state.count}</h1>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </div>
  );
};

export default AppReducer;