import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '@containers/app';
import Chat from '@containers/chat';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/chat' exact component={Chat} />
    </Switch>
  </BrowserRouter>
)
