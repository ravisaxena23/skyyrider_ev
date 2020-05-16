import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import firebase from "firebase";
import { firebase_config } from "../constants/ActionTypes";
import "../styles/style.scss";
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Grid>

        </Grid>
      </div>
    );
  }
}

export default Login;
