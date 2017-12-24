import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import KeepDetails from './Components/keep-details';
import App from './app';
import KeepList from './Components/keep-list';

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/keeps/archive" component={KeepList} />
      <Route exact path="/keeps/:id" component={KeepDetails} />
    </Switch>
  </BrowserRouter>
);
