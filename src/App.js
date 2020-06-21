import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavbarBasic from "./components/Navbar/NavbarBasic";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

import SearchBar from "./components/SearchBar/SearchBar";
import CurrentDate from "./components/Elements/CurrentDate";
import Clock from "./components/Elements/Clock";

import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Login from "./components/Login";

import "./App.scss";

// App COMPONENT
class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  // TOGGLE SIDEDRAWER
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  // CLOSE SIDEDRAWER (click outside)
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <>
        <NavbarBasic drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main className="App">
          <SearchBar />
          <div className="clock">
            <h3>
              <Clock />
            </h3>
            <h3>
              <CurrentDate />
            </h3>
          </div>

          <article className="content">
            <div className="text-row">
              <Router>
                <Switch>
                  <Route exact path="/">
                    <Welcome />
                  </Route>
                  <Route path="/signup">
                    <Signup />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                </Switch>
              </Router>
            </div>
          </article>
        </main>
      </>
    );
  }
}

export default App;
