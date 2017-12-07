/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* ------------------------- External Dependencies -------------------------- */
import Front from 'workshop/pages/main/Front'
export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={Front} />
    </Switch>
  </div>);
