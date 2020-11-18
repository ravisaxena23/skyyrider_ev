import React from "react";
import { Link } from "react-router-dom";
import logo from "../../styles/images/logo.png";

//material ui component
import ResponsiveDrawer from "./ResponsiveDrawer";
import { AppBar, Toolbar, Button, Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import EmailIcon from "@material-ui/icons/Email";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneIcon from "@material-ui/icons/Phone";

function Navbar(props) {
  return (
    <div style={{ color: "#fff" }}>
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: "#fafafa" }}>
          <Grid container spacing={3}>
            <Grid item sm={2} md={1}>
              <Hidden mdUp>
                <Avatar alt="Remy Sharp" src={logo} />
              </Hidden>
              <Hidden smDown>
                {" "}
                <img src={logo} height={80} width={80} />
              </Hidden>
            </Grid>

            <Grid item sm={2} md={3}>
              <Typography variant="body1" class="sub-head">
                <AccessTimeIcon style={{ fontSize: "2vw", color:"#e5081f" }} />
                12:00 22:00
              </Typography>
            </Grid>

            <Grid item sm={2} md={5}>
              <Typography variant="body1" class="sub-head">
                {" "}
                <EmailIcon style={{ fontSize: "2vw", color:"#e5081f" }} /> skyyriderev@gmail.com
              </Typography>
            </Grid>

            <Grid item sm={2} md={3} class="nav-pad">
              <Typography variant="body1" class="sub-head">
                <PhoneIcon style={{ fontSize: "2vw", color:"#e5081f" }} /> +91 9999999999
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>

        <Toolbar style={{ backgroundColor: "#0080ff" }}>
          <Hidden mdUp>
            <ResponsiveDrawer />
          </Hidden>

          <Hidden smDown>
            <Grid container spacing={3}>
              <Grid item md={2}>
                <Button
                  color="inherit"
                  component={Link}
                  to={"/"}
                  className="Nav-btn"
                >
                  HOME
                </Button>
              </Grid>
              <Grid item md={2}>
                <Button
                  color="inherit"
                  component={Link}
                  to={"/about"}
                  className="Nav-btn"
                >
                  ABOUT US
                </Button>
              </Grid>
              <Grid item md={2}>
                <Button
                  color="inherit"
                  component={Link}
                  to={"/product"}
                  className="Nav-btn"
                >
                  PRODUCTS
                </Button>
              </Grid>
              <Grid item md={2}>
                <Button
                  color="inherit"
                  component={Link}
                  to={"/services"}
                  className="Nav-btn"
                >
                  NEWS & EVENTS
                </Button>
              </Grid>
              <Grid item md={2}>
                <Button
                  color="inherit"
                  component={Link}
                  to={"/contact"}
                  className="Nav-btn"
                >
                  CONTACT US
                </Button>
              </Grid>
            </Grid>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
