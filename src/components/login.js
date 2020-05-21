import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import Loader_Con from "../containers/loader/loader_cont";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../styles/style";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import { List } from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';
import Snackbar from "./snackbar/snackbar";
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
    const { login, setEmail, snackbar, close_snack_bar, setPwd, user_login } = this.props;
    return (
      <Grid justify="center" className="login_background">
        <Grid>
          <Grid item md={12} xs={12}>
            <AppBar position="static" color="default" style={{ backgroundColor: '#5199DC' }}>
              <Hidden only={["xs", "sm"]}>
                <Toolbar>

                  <Typography variant="h6" color="primary" style={{ flex: 1 }}>
                    <img
                      className="landing_logo"
                      // src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Ffavicon.jpg?alt=media&token=a2386a9d-889e-4029-b928-52d4fc2d8952"}
                      // style={{ height:500 }}
                      src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Ffavicon.png?alt=media&token=04c2ee83-9bd5-4527-b729-75ba93073964"}

                      // src={Pic}
                      alt="not found"
                    />
                  </Typography>
                  {/* </Hidden> */}

                  {/* <Hidden only={["xs", "sm"]}> */}
                  <a style={{ textDecoration: "none" }} href='#Home'> <Button className="button" >HOME</Button></a>
                  <a style={{ textDecoration: "none" }} href='#feature'>   <Button className="button" >ABOUT US</Button></a>
                  <a style={{ textDecoration: "none" }} href='#About_us'>   <Button className="button" >SERVICES</Button></a>
                  <a style={{ textDecoration: "none" }} href='#Blogs'>  <Button className="button" >NEWS&EVENTS</Button></a>
                  <a style={{ textDecoration: "none" }} href='#Contact'>  <Button className="button" >CONTACT US</Button></a>

                  {/* <Button variant="contained" style={button_login} onClick={()=>{this.setState({
                        login_page_redirect:true
                      })}} >
                        Login
                      </Button> */}
                </Toolbar>

              </Hidden>
              <Hidden only={["xl", "md", "lg"]}>
                <ExpansionPanel className="appbarmenu">
                  <ExpansionPanelSummary
                    expandIcon={<MenuIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <img
                      className="landing_logo"
                      // src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Ffavicon.jpg?alt=media&token=a2386a9d-889e-4029-b928-52d4fc2d8952"}
                      alt={"not found"}
                      src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Ffavicon.png?alt=media&token=04c2ee83-9bd5-4527-b729-75ba93073964"}
                    />
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ padding: 0 }}>
                    <List component="nav">
                      <ListItem button>
                        <a style={{ textDecoration: "none" }} href='#Home'> <Button className="button" >Home</Button></a>
                      </ListItem >
                      <ListItem button>
                        <a style={{ textDecoration: "none" }} href='#feature'>   <Button className="button" >Feature</Button></a>
                      </ListItem >
                      <ListItem button>
                        <a style={{ textDecoration: "none" }} href='#About_us'>   <Button className="button" >About</Button></a>
                      </ListItem >
                      <ListItem button>
                        <a style={{ textDecoration: "none" }} href='#Contact'>  <Button className="button" >Contact</Button></a>
                      </ListItem >
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Hidden>
            </AppBar>
          </Grid>
        </Grid>

        <Grid container spacing={12} justify="center" style={{ justifyContent: 'center', alignContent: 'center' }}>
          <Grid item md={4} xs={12} >
            <Card className="login_card">

              <Link to="/" style={{ textDecoration: "none" }} >
                <img
                  src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Ffavicon.png?alt=media&token=04c2ee83-9bd5-4527-b729-75ba93073964"}
                  alt="no_img" style={{ height: 100, }}
                /></Link>
              <Typography className="login_heading">
                SIGN IN
                  <br />

              </Typography>
              <Grid container justify="center">
                <Grid item xs={12} >
                  <TextField
                    className="login_input"
                    id="outlined-email-input"
                    label="Username"
                    type="email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required={true}
                    value={login.email}
                    onChange={(event) => { setEmail(event.target.value); }}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        user_login(login)
                      }
                    }}
                    InputProps={{ classes: { input: this.props.classes.textfield } }}
                    InputLabelProps={{ classes: { root: this.props.classes.textfieldLabel } }}
                  />
                </Grid>

                <Grid item xs={12} >
                  <TextField
                    className="login_input"
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required={true}
                    value={login.password}
                    onChange={(event) => { setPwd(event.target.value); }}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        user_login(login)
                      }
                    }}
                    InputProps={{ classes: { input: this.props.classes.textfield } }}
                    InputLabelProps={{ classes: { root: this.props.classes.textfieldLabel } }}
                  />
                </Grid>
                <br /><br /><br />
                <Grid item xs={12}>
                  <br />
                  <Button
                    className="login_input"
                    id="outlined-email-input"
                    variant="contained"
                    color="primary"
                    fullWidth
                    margin="normal"
                    onClick={() => { user_login(login) }}
                  >
                    Log In
                      </Button>

                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>

        <Loader_Con />
        <Snackbar
          open={snackbar.response_received}
          close_snack_bar={close_snack_bar}
          message={snackbar.message}
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(Login);
