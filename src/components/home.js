import React from "react";
import LoaderCon from "../containers/loader/loader_cont";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../styles/style";
import "../styles/style.scss";
import {
    Grid,
    Avatar,
    // Divider
} from "@material-ui/core";
// import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Header from "./subpage/header";
import Slider from "./subpage/carousel";
import Services from "./subpage/services";
import About from "./subpage/about";
class Home extends React.Component {
    componentDidMount() {
        this.props.view_details();
    }
    render() {
        const { login } = this.props;
        return (
            <div style={{width:'100%',height:'100%'}}>
                <Header />
                <br /><br /><br />
                <Slider />
                <Services />
                <About />
                <Grid container justify="center" className="footer">
                    {/* <Divider variant="middle" style={{ backgroundColor: 'blue' }} /> */}
                    <br />
                    <center className="centers">

                        <Grid item>
                            <Grid container>
                                <Grid item xs={6} sm={6} md={3} className="footercont">
                                    <div >
                                        <h3 className="footer_heading" style={{ textAlign: 'left' }}>
                                            Navigation
                                            </h3>
                                        <ul className="footlist">
                                            <Link to="/" ><li style={{textAlign:'left'}}> Home</li></Link>
                                            <li style={{ textAlign: 'left' }}> <Link to="/about_us" > About Us</Link></li>
                                            <li style={{ textAlign: 'left' }}> <Link to="/services" >Services</Link></li>
                                            <li style={{ textAlign: 'left' }}> <Link to="/events" >News & Events</Link></li>
                                            <li style={{ textAlign: 'left' }}><Link to="/contact">Contact Us</Link></li>

                                        </ul>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6} md={3} className="footercont">
                                    <div>
                                        <h3 className="footer_heading" style={{ textAlign: 'left' }}>
                                            Services
                      </h3>
                                        <ul className="footlist">
                                            <Link to="/services"><li style={{textAlign:'left'}}>Vehicle Cleaning Checkup</li></Link>
                                            <Link to="/services"><li style={{ textAlign: 'left' }}>FLEET Maintenance Checklist</li></Link>
                                            <Link to="/services"><li style={{ textAlign: 'left' }}>Preventive Maintaince</li></Link>
                                        </ul>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6} md={3} className="footercont">
                                    <div >
                                        <h3 className="footer_heading" style={{ textAlign: 'left' }}>
                                            Office Address
                                            </h3>
                                        <ul className="footlist">
                                            <li style={{ textAlign: 'left' }}>{login.details.address1}</li>
                                            <li style={{ textAlign: 'left' }}>{login.details.address2}</li>
                                            <li style={{ textAlign: 'left' }}>{login.details.address3}</li>
                                        </ul>
                                    </div>
                                </Grid>
                                <Grid xs={6} sm={6} md={3} className="footercont">
                                    <div >
                                        <h3 className="footer_heading" style={{ textAlign: 'left' }}>
                                            Brand Patner
                                            </h3>
                                        <ul className="footlist">
                                            <li style={{ textAlign: 'left' }}>Skyy Rider Institutions</li>
                                        </ul>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <ul className="social_links">
                            <li className="footli">
                                <a href="https://www.facebook.com/pandamachinecare"> <Avatar alt="Remy Sharp" src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Ffacebook.png?alt=media&token=4db1c075-a8bd-4260-a2d4-e006baeaffba"} /></a>
                            </li>
                            <li className="footli">
                                <a href="https://twitter.com/pandamachinecare"><Avatar alt="Remy Sharp" src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Ftwitter.png?alt=media&token=2222a815-3609-4bbe-88b9-22e821dc833c"} /></a>
                            </li>
                            <li className="footli">
                                <a href="https://www.instagram.com/pandamachinecare/"><Avatar alt="Remy Sharp" src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Finstagram.png?alt=media&token=9f540040-14b8-442e-9973-b429429ee8f9"} /></a>
                            </li>
                        </ul>


                        <b>
                            <i>
                                <h5 style={{ backgroundColor: '#052645', color: '#626B74', height: 40 }} align="center">&copy;Copyright 2020 Panda Machine Care</h5>
                            </i>
                        </b>
                    </center>

                </Grid>
                <LoaderCon />
            </div>
        )
    }
}
export default withStyles(styles)(Home);