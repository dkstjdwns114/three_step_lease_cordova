import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Switch>
            <ScrollToTop>
              <Route exact path="/" component={HomePage} />
              <Route path="/city/:code" component={CityPage} />
            </ScrollToTop>
          </Switch>
        </HashRouter>
      </>
    );
  }
}
