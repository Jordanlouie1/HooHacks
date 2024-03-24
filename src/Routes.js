import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AnotherPage from './AnotherPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/another-page" component={AnotherPage} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default Routes;