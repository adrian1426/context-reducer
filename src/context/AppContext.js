import React from 'react';

/*
Return:
{Provider,Consumer}
*/
export const AppContext = React.createContext();

const Contexto = (props) => {

  const { children } = props;

  return (
    <AppContext.Provider value='soy el valor del contexto'>
      {children}
    </AppContext.Provider>
  );
};

export default Contexto;