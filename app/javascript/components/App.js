import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from "./Search";
import configureStore from "../configureStore";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => "Home!"} />
            <Route
              exact
              path="/search"
              render={() => (
                <Search latitude="2" longitude="4" address="ABCD" />
              )}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
