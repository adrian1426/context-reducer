import React, { useState } from 'react';

/*
Return:
{Provider,Consumer}
*/
export const AppContext = React.createContext();

const Contexto = (props) => {

  const [click, setClick] = useState(0)
  const { children } = props;

  const addClick = () => {
    setClick(click + 1);
  };

  const removeClick = () => {
    setClick(click - 1);
  };

  return (
    <AppContext.Provider
      value={{
        click,
        add: addClick,
        remove: removeClick
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Contexto;