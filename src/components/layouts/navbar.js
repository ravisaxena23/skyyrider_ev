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
import Divider from "@material-ui/core/Divider";

function Navbar(props) {
  return (
    <div style={{ color: "#fff" }}>
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: "#fafafa" }}>
          <Hidden smDown>
            <Grid container spacing={3}>
              <Grid item sm={2} md={1}>
                <img src={logo} height={80} width={80} alt="logo" />
              </Grid>

              <Divider orientation="vertical" flexItem />

              <Grid item sm={2} md={3}>
                <Typography variant="body1" class="sub-head">
                  <AccessTimeIcon
                    style={{ fontSize: "32px", color: "#e5081f" }}
                  />
                  12:00 22:00
                </Typography>
              </Grid>

              <Divider orientation="vertical" flexItem />

              <Grid item sm={2} md={5}>
                <Typography variant="body1" class="sub-head">
                  <EmailIcon style={{ fontSize: "32px", color: "#e5081f" }} />{" "}
                  skyyriderev@gmail.com
                </Typography>
              </Grid>

              <Divider orientation="vertical" flexItem />

              <Grid item sm={2} md={3} class="nav-pad">
                <Typography variant="body1" class="sub-head">
                  <PhoneIcon style={{ fontSize: "32px", color: "#e5081f" }} />{" "}
                  +91 9999999999
                </Typography>
              </Grid>
            </Grid>
          </Hidden>

          <Hidden mdUp>
            <Grid container spacing={3}>
              <Grid item sm={12} md={1} xs={12}>
                <img
                  src={logo}
                  height={60}
                  width={60}
                  alt="logo"
                  class="center-logo"
                />
              </Grid>

              <Grid item sm={12} md={3} xs={12} className="px-0">
                <Typography variant="body1" class="sub-head-mb">
                  <AccessTimeIcon
                    style={{ fontSize: "12px", color: "#e5081f" }}
                  />
                  12:00 22:00
                </Typography>
              </Grid>

              <Divider />

              <Grid item sm={12} md={5} xs={12} className="px-0">
                <Typography variant="body1" class="sub-head-mb">
                  <EmailIcon style={{ fontSize: "12px", color: "#e5081f" }} />{" "}
                  skyyriderev@gmail.com
                </Typography>
              </Grid>

              <Divider />

              <Grid item sm={12} md={3} xs={12} className="px-0">
                <Typography variant="body1" class="sub-head-mb">
                  <PhoneIcon style={{ fontSize: "12px", color: "#e5081f" }} />{" "}
                  +91 9999999999
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
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
                  NEWS & BLOGS
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
