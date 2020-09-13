import React from 'react';
import ComponenteHijo from './components/ComponenteHijo';
import Contexto from './context/AppContext';


function App() {
  return (
    <Contexto>
      <div>
        <h1>context-reducer</h1>
        <ComponenteHijo />
      </div>
    </Contexto>
  );
}

export default App;
