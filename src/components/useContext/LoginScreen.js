import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => setUser({ id: 1, name: 'Adrian', apellido: 'hdz' })}>
        agregar usario
        </button>
    </div>
  );
};

export default LoginScreen;