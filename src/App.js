import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import CoordinateMapPage from "./pages/SameCoordinatesPage";
import MainNavbar from "./components/Navigation/MainNavbar";
// import SideNavbar from "./components/Navigation/SideNavbar";
// import CityPage from "./pages/CityPage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <MainNavbar />
        {/* <div className="page-content">
          <Route path="/" component={SideNavbar} />
          <Switch>
            <div className="content-wrapper">
              <Route exact path="/" component={HomePage} />
              <Route path="/same_coordinates" component={CoordinateMapPage} />
              <Route path="/city/:code" component={CityPage} />
            </div>
          </Switch>
        </div> */}
      </Router>
    );
  }
}
