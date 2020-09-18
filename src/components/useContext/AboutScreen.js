import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AboutScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>About</h1>
      <pre>
        {
          JSON.stringify(user, null, 3)
        }
      </pre>
    </div>
  );
};

export default AboutScreen;