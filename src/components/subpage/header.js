import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../styles/style";
import "../../styles/style.scss";
import {
    Grid,
    AppBar,
    Toolbar,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Hidden,
    Typography,
    List,
    ListItem,
    Button,
} from "@material-ui/core";
import {
    Menu,
} from '@material-ui/icons';
import { Link } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <Grid container>
                <AppBar position="static" color="default" style={{ backgroundColor: 'white' }}>
                    {/* <Hidden only={["xs", "sm"]}> */}
                        <Toolbar>
                            <Typography variant="h6" color="primary" style={{ flex: 1 }}>
                                <img
                                    className="landing_logo"

                                    src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Ffavicon.png?alt=media&token=04c2ee83-9bd5-4527-b729-75ba93073964"}


                                    alt="not found"
                                />
                            </Typography>
                            <Link to="/" className="link">
                                <Button className="button" >HOME</Button>
                            </Link>
                            <Link to="/about" className="link">
                                <Button className="button" >ABOUT US</Button>
                            </Link>
                            <Link to="/services" className="link">
                                <Button className="button" >SERVICES</Button>
                            </Link>
                            <Link to="/events" className="link">
                                <Button className="button" >NEWS&EVENTS</Button>
                            </Link>
                            <Link to="/contact" className="link">
                                <Button className="button" >CONTACT US</Button>
                            </Link>
                        </Toolbar>

                    {/* </Hidden> */}
                    {/* <Hidden only={["xl", "md", "lg"]}>
                        <ExpansionPanel className="appbarmenu">
                            <ExpansionPanelSummary
                                expandIcon={<Menu />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className="button"
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
                                    <ListItem button style={{width:'100%'}}>
                                        <Link to="/" className="link">
                                            <Button className="button" >Home</Button>
                                        </Link>
                                    </ListItem >
                                    <ListItem button style={{ width: '100%' }}>
                                        <Link to="/about" className="link">
                                            <Button className="button" >ABOUT US</Button>
                                        </Link>
                                    </ListItem >
                                    <ListItem button style={{ width: '100%' }}>
                                        <Link to="/services" className="link">
                                            <Button className="button" >SERVICES</Button>
                                        </Link>
                                    </ListItem >

                                    <ListItem button style={{ width: '100%' }}>
                                        <Link to="/events" className="link">
                                            <Button className="button" >NEWS&EVENTS</Button>
                                        </Link>
                                    </ListItem >
                                    <ListItem button style={{ width: '100%' }}>
                                        <Link to="/contact" className="link">
                                            <Button className="button" >CONTACT US</Button>
                                        </Link>
                                    </ListItem >
                                </List>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Hidden> */}
                </AppBar>
            </Grid>
        );
    }
}

export default withStyles(styles)(Header);
