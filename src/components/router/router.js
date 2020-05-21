import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from "../home";
import Controller from "../../containers/router/controller_cont";
import About from "../subpage/about";
import Login from "../../containers/loginCon";
import Admin from "../../containers/pages/adminCont";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width:'100%',
    height:'100%',
    padding:0,
    margin:0,
  }
})

class Routes extends Component {

  render() {
    const { login, classes, onLogout } = this.props;
    let body;

    body =
      login.isHome ?
        <div>
        <Route exact path="/" component={Login} />
        <Route path="/" component={Controller} />
        </div>
        :
        <div className={classes.root}>
            <Route exact path="/" component={Admin} />
        </div>
      ;
    return (
      <div>
      <Router>
        {body}
      </Router>
      </div>
    );
  }
}


export default withStyles(styles)(Routes);
