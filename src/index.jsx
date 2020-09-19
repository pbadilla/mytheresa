import React from "react";
import { render } from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import store from "./redux/store";

import { Home } from "./containers/home";
import Movie from "./containers/movie";
import wishList from "./containers/wishlist";

import "./index.scss";

const history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movie/:kindMovie/:id" component={Movie} />
        <Route exact path="/wishlist" component={wishList} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept();
}
