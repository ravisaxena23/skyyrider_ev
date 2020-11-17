import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../containers/homeCont";
import About from "../../containers/aboutCont";
import Contact from "../../containers/contactCont";
import Event from "../../containers/eventCont";
import Services from "../../containers/serviceCont";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../navbar";
import Footer from "../footer";

// import Login from "../../containers/loginCon";
// import Admin from "../../containers/pages/adminCont";
// import Controller from "../../containers/router/controller_cont";

const styles = (theme) => ({
  root: {
    width: "100%",
    height: "100%",
    padding: 0,
    margin: 0,
  },
});

class Routes extends Component {
  render() {
    const { login, classes, onLogout } = this.props;
    let body;

    body = login.isHome ? (
      <div>
        <Navbar />
        <div className="main-body">
        {/*<Route exact path="/" component={Controller} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/product" component={Event} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/login" component={Login} /> */}
        </div>
        <Footer />
      </div>
    ) : (
      <div className={classes.root}>
        <Navbar />
        {/* <Route exact path="/" component={Admin} /> */}
        <Footer />
      </div>
    );
    return (
      <div>
        <Router>{body}</Router>
      </div>
    );
  }
}

export default withStyles(styles)(Routes);
