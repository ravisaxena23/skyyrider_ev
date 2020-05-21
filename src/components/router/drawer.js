import React from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Avatar from '@material-ui/core/Avatar';
import {
  Link
} from "react-router-dom";
import LG_Cont from "../../containers/router/Lg_Cont";
import {
  all_admin_option,
  all_super_admin_option,
  all_trainer_option,
  all_user_options,
} from "../../constants/router/router_consts";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "white"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconStyle: {
    position: "relative",
    left: 8,
    top: 3,
    fontSize: 18,
    marginRight: 5
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  grow: {
    flexGrow: 1,
  },
}));

function MiniDrawer(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);


  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function sideBar(type, open) {
    var side_top =
      <div>
        {open ?
          <div>
            <Avatar alt={localStorage.getItem("name")} src={localStorage.getItem("profile_img")} className="drawer_img" >
              {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}
            </Avatar>
            <Typography variant="subtitle1" className="profile-name">
              Hi! {localStorage.getItem("name")}
            </Typography>
          </div>
          :
          <Avatar alt={localStorage.getItem("name")} src={localStorage.getItem("profile_img")} className="drawer_img_closed" >
            {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}
          </Avatar>
        }
      </div>;

    if (type === "S") {
      return (
        <div style={{ marginTop: 10 }}>
          {side_top}
          {all_user_options.map((option) => (
            <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "black" }}>
              <ListItem button key={option.name}>
                <ListItemIcon><Icon>{option.icon}</Icon></ListItemIcon>
                <ListItemText primary={option.name} />
              </ListItem>
            </Link>
          ))}
        </div>
      );
    } else if (type === "A") {
      return (
        <div style={{ marginTop: 10 }}>
          {side_top}
          {all_admin_option.map((option) => (
            <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "black" }}>
              <ListItem button key={option.name}>
                <ListItemIcon><Icon>{option.icon}</Icon></ListItemIcon>
                <ListItemText primary={option.name} />
              </ListItem>
            </Link>
          ))}
        </div>
      );
    } else if (type === "SA") {
      return (
        <div style={{ marginTop: 10 }}>
          {side_top}
          {all_super_admin_option.map((option) => (
            <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "black" }}>
              <ListItem button key={option.name}>
                <ListItemIcon><Icon>{option.icon}</Icon></ListItemIcon>
                <ListItemText primary={option.name} />
              </ListItem>
            </Link>
          ))}
        </div>
      );
    } else if (type === "T") {
      return (
        <div style={{ marginTop: 10 }}>
          {side_top}
          {all_trainer_option.map((option) => (
            <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "black" }}>
              <ListItem button key={option.name}>
                <ListItemIcon><Icon>{option.icon}</Icon></ListItemIcon>
                <ListItemText primary={option.name} />
              </ListItem>
            </Link>
          ))}
        </div>
      );
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Link to="/">
          <img src={"https://firebasestorage.googleapis.com/v0/b/nextstacks.appspot.com/o/NextStack%20Logo.png?alt=media&token=6c4ba45d-05a9-4e1f-a7dc-9ee86006218c"} alt="no_img" height="20" />
          </Link>
          <span style={{ color: "#b30047", marginLeft: 7 }}>alpha</span>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <LG_Cont />

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MiniDrawer;

