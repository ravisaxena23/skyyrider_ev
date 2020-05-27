import React from "react";
import LoaderCon from "../containers/loader/loader_cont";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../styles/style";
import "../styles/style.scss";
import {
    Grid,
    Avatar,
    CardContent,
    Typography
} from "@material-ui/core";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import CardHeader from "./cards/CardHeader.js";
import CardIcon from "./cards/CardIcon.js";
import Card from "./cards/Card";
import Header from "./subpage/header";
import Slider from "./subpage/carousel";
import About from "./subpage/about";
const card = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    marginTop: 50,
    height: 250
};
class AboutUs extends React.Component {
    componentDidMount() {
        this.props.view_details();
    }
    render() {
        const { login } = this.props;
        return (
            <Grid>
                <Header />
                <Slider />
                <Grid container justify="center" style={{ backgroundColor: '#E6EDF4' }}>
                    <Grid item xs={12} md={4}>
                        <Card style={card}>
                            <CardHeader color="warning" stats icon>
                                <CardIcon color="rose">
                                    <h3>
                                        VISION
                                    </h3>
                                </CardIcon>
                            </CardHeader>
                            <Typography style={{ paddingLeft: 35, paddingTop: 35 }}>
                                • To be a trendsetter in the heavy & commercial services industry.<br />
                                • To provide advanced repairs & maintenance cost effectively.<br />
                                • To make our customers feel comfortable and pleased with their service experience.<br />
                            </Typography>
                            <CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={2} />
                    <Grid item xs={12} md={4}>
                        <Card style={card}>
                            <CardHeader color="warning" stats icon>
                                <CardIcon color="rose">
                                    <h3>
                                        MISSION
                                    </h3>
                                </CardIcon>
                            </CardHeader>
                            <Typography style={{ paddingLeft: 35, paddingTop: 35 }}>
                                • To create integrated service centres across India.<br />
                                • To establish and create industry standards in terms of infrastructure, client service & vehicle maintenance services in an efficient and cost-effective manner.<br />
                            </Typography>
                            <CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <About />
                <Grid justify="center" className="footer">
                    <div className="centers">
                        {/* <img
                            src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Ffavicon.png?alt=media&token=04c2ee83-9bd5-4527-b729-75ba93073964"}
                            alt="logo" className="footerlogo"></img> */}


                        {/* <Divider variant="middle" style={{ backgroundColor: 'blue' }} /> */}
                        <br />
                        <center >

                            <Col>
                                <Row>
                                    <Col xs="3" sm="6" md="3" className="footercont">
                                        <div >
                                            <h3 className="footer_heading">
                                                Navigation
                                            </h3>
                                            <ul className="footlist">
                                                <Link to="/" ><li> Home</li></Link>
                                                <li> <Link to="/about_us" > About Us</Link></li>
                                                <li> <Link to="/services" >Services</Link></li>
                                                <li> <Link to="/events" >News & Events</Link></li>
                                                <li><Link to="/contact">Contact Us</Link></li>

                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xs="3" sm="6" md="3" className="footercont">
                                        <div>
                                            <h3 className="footer_heading">
                                                Services
                      </h3>
                                            <ul className="footlist">
                                                <Link to="services"><li >Vehicle Cleaning Checkup</li></Link>
                                                <Link to="services"><li >FLEET Maintenance Checklist</li></Link>
                                                <Link to="services"><li >Preventive Maintaince</li></Link>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xs="3" sm="6" md="3" className="footercont">
                                        <div >
                                            <h3 className="footer_heading">
                                                Office Address
                                            </h3>
                                            <ul className="footlist">
                                                <li>{login.details.address1}</li>
                                                <li>{login.details.address2}</li>
                                                <li>{login.details.address3}</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xs="3" sm="6" md="3" className="footercont">
                                        <div >
                                            <h3 className="footer_heading">
                                                Brand Patner
                                            </h3>
                                            <ul className="footlist">
                                                <li>Skyy Rider Institutions</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <ul className="social_links">
                                <li className="footli">
                                    <a href="https://www.facebook.com/onelife6"> <Avatar alt="Remy Sharp" src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Ffacebook.png?alt=media&token=4db1c075-a8bd-4260-a2d4-e006baeaffba"} /></a>
                                </li>
                                <li className="footli">
                                    <a href="https://twitter.com/OneLife_global"><Avatar alt="Remy Sharp" src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Ftwitter.png?alt=media&token=2222a815-3609-4bbe-88b9-22e821dc833c"} /></a>
                                </li>
                                <li className="footli">
                                    <a href="https://www.instagram.com/OneLife_global/"><Avatar alt="Remy Sharp" src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Finstagram.png?alt=media&token=9f540040-14b8-442e-9973-b429429ee8f9"} /></a>
                                </li>
                            </ul>

                            <b>
                                <i>
                                    <h5 style={{ backgroundColor: '#052645', color: '#626B74', height: 40 }} align="center">&copy;Copyright 2020 Panda Machine Care</h5>
                                </i>
                            </b>
                        </center>
                    </div>
                </Grid>

                <LoaderCon />
            </Grid>
        )
    }
}
export default withStyles(styles)(AboutUs);