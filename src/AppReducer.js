import React, { useReducer } from 'react';

const AppReducer = () => {

  //----state,dispatch                reducer,stateInitial
  const [state, dispatch] = useReducer(() => { }, {
    count: 0,
    title: 'Hola'
  });

  return (
    <div>
      <h1>clicks</h1>
    </div>
  );
};

export default AppReducer;