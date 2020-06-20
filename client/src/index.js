import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Boilerplate",
    };
  }

  render() {
    return (
      <Router>
        <Fragment>
          {/* <Navbar /> */}
          {/* <Route exact path="/" component={your component} /> */}
        </Fragment>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
