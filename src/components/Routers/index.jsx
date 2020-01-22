import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PageGame, PageSimulator } from '../../pages';

const Routers = () => (
  <Switch>
    <Route path="/game">
      <PageGame />
    </Route>
    <Route path="/simulator">
      <PageSimulator />
    </Route>
  </Switch>
);

export default Routers;
