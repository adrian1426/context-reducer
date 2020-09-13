import React from 'react';
import { AppContext } from '../context/AppContext';

const ComponenteHijo = () => {
  return (
    <AppContext.Consumer>
      {(valueContextGlobal) => (
        <div>
          <h1>hijo ,{valueContextGlobal}</h1>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default ComponenteHijo;