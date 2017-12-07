/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* ------------------------- External Dependencies -------------------------- */
import Front from 'workshop/pages/header/Front'

export default () => (
  <div>
      <Route exact path="/" component={Front} />
  </div>);

