import React from "react";
import store from "../store";
import DetailsPage from "./DetailsPage.js";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainTemplate from "templates/mainTemplate";
import StartPage from "./StartPage";
import { Provider } from "react-redux";

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/list/details/:id" component={DetailsPage} />
          </Switch>
        </MainTemplate>
      </Router>
    </Provider>
  );
}

export default Root;
