import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ComponenteHijo = () => {
  const valueContextGlobal = useContext(AppContext);

  return (
    <div>
      <h1>click: ,{valueContextGlobal.click}</h1>
      <button onClick={valueContextGlobal.add}>+</button>
      <button onClick={valueContextGlobal.remove}>-</button>
    </div>
  );
};

export default ComponenteHijo;