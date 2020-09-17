import React from 'react';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/login" component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;