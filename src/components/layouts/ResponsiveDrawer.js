import React from "react";
import { Link } from "react-router-dom";

/* Material Components */
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";

/* Icons */
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <List style={{marginLeft:"-24px"}}>
        <ListItem button component={Link} to={"/"} onClick={handleDrawerToggle}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="HOME" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to={"/about"}
          onClick={handleDrawerToggle}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="ABOUT US" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to={"/product"}
          onClick={handleDrawerToggle}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="PRODUCT" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to={"/services"}
          onClick={handleDrawerToggle}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="NEWS & BLOGS" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to={"/contact"}
          onClick={handleDrawerToggle}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="CONTACT US" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {/* <CssBaseline /> */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
