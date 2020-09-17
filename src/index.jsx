import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader';
import store from './redux/store';

import { Home } from './containers/home';

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) { 
  module.hot.accept();
}