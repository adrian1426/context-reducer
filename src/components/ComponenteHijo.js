import React from 'react';
import { AppContext } from '../context/AppContext';

const ComponenteHijo = () => {
  return (
    <AppContext.Consumer>
      {(valueContextGlobal) => (
        <div>
          <h1>click: ,{valueContextGlobal.click}</h1>
          <button onClick={valueContextGlobal.add}>+</button>
          <button onClick={valueContextGlobal.remove}>-</button>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default ComponenteHijo;