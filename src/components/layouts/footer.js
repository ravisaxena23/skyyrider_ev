import React from "react";
import { Link } from "react-router-dom";

//material ui component
import { AppBar, Toolbar, Button, Hidden, Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import DomainIcon from "@material-ui/icons/Domain";
import CheckIcon from "@material-ui/icons/Check";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import StreetviewIcon from "@material-ui/icons/Streetview";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";

function Navbar(props) {
  return (
    <div style={{ color: "#fff" }}>
      <AppBar position="static" style={{ top: "auto", bottom: 0 }}>
        <Toolbar className="footer-body">
          <Grid container spacing={1} className="padding-10">
            <Grid item sm={12} md={12}>
              <Grid container spacing={1}>
                <Grid item sm={12} md={4}>
                  <Typography variant="body1">
                    <PhoneIcon /> (520) 570 2710
                  </Typography>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Typography variant="body1">
                    <DirectionsCarIcon /> 24/7 ASSISTANCE
                  </Typography>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Typography variant="body1">
                    <DomainIcon /> Nayapali, Bhubaneswar, Odisha.
                  </Typography>
                </Grid>
              </Grid>
              <hr />
              <Divider style={{ backgroundColor: "#fafafa" }} />
            </Grid>

            <Grid item sm={12} md={12}>
              <br />
              <Grid container spacing={3}>
                <Grid item sm={3} md={4}>
                  <Typography variant="body1">
                    <u>ABOUT US</u>
                    <ul>
                      <li>Nayapali, Bhubaneswar, Odisha.</li>
                      <li>Mobile: (520) 570 2710</li>
                      <li>Email ID: infoskyyriderev.com </li>
                    </ul>
                  </Typography>
                </Grid>
                <Grid item sm={3} md={4}>
                  <Typography variant="body1">
                    <u>NAVIGATION</u>
                    <ul class="underline">
                      <li>
                        <CheckIcon />
                        HOME
                      </li>
                      <li>
                        <CheckIcon />
                        ABOUT US
                      </li>
                      <li>
                        <CheckIcon />
                        PRODUCTS
                      </li>
                      <li>
                        <CheckIcon />
                        BLOGS
                      </li>
                      <li>
                        <CheckIcon />
                        CONTACT US
                      </li>
                    </ul>
                  </Typography>
                </Grid>
                <Grid item sm={3} md={4}>
                  <ul>
                    <li>
                      <Button
                        color="inherit"
                        component={Link}
                        to={"/"}
                        className="footer-btn"
                      >
                        <EmojiPeopleIcon />
                        BECOME A DEALER
                      </Button>
                    </li>
                    <li>
                      <Button
                        color="inherit"
                        component={Link}
                        to={"/"}
                        className="footer-btn"
                      >
                        <StreetviewIcon />
                        LOCATE OUR DEALERES
                      </Button>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>

            {/* Social Icon */}
            <Grid item sm={12} md={12}>
              <Grid container spacing={3} justify="center">
                <Grid item sm={3} md={1}>
                  <Button
                    color="inherit"
                    component={Link}
                    to={"/"}
                    className="footer-btn"
                  >
                    <FacebookIcon />
                  </Button>
                </Grid>
                <Grid item sm={3} md={1}>
                  <Button
                    color="inherit"
                    component={Link}
                    to={"/"}
                    className="footer-btn"
                  >
                    <WhatsAppIcon />
                  </Button>
                </Grid>
                <Grid item sm={3} md={1}>
                  <Button
                    color="inherit"
                    component={Link}
                    to={"/"}
                    className="footer-btn"
                  >
                    <InstagramIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
