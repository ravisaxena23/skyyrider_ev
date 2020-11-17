import React, { Component } from "react";
import Routes from "./containers/router/router_cont";
import "./App.scss";
import Container from "@material-ui/core/Container";

class App extends Component {
  render() {
    return (
      <Container maxWidth="xl">
        <Routes />
      </Container>
    );
  }
}

export default App;
