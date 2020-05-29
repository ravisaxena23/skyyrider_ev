import React from "react";
import LoaderCon from "../containers/loader/loader_cont";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../styles/style";
import "../styles/style.scss";
import {
    Grid,
    Avatar,
    Typography,
    CardContent
} from "@material-ui/core";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Header from "./subpage/header";
import CardHeader from "./cards/CardHeader.js";
import CardIcon from "./cards/CardIcon.js";
import Card from "./cards/Card";
import Slider from "./subpage/carousel";
import Service from "./subpage/services";
import About from "./subpage/about";
const card = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    marginTop: 50,
    // height: 250
};
const card1 = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    marginTop: 50,
    height: 600
};
class Services extends React.Component {
    render() {
        const { login } = this.props;
        return (
            <Grid>
                <Header />
                <br /><br /><br />
                <Grid container justify="center" style={{ backgroundColor: '#BDD1E5' }}>
                    <Grid item xs={11} md={5}>
                        <Card style={card1}>
                            <CardHeader color="warning" stats icon>
                                <CardIcon color="rose">
                                    <h3>
                                        Vehicle Cleaning Checkup
                                    </h3>
                                </CardIcon>
                            </CardHeader>
                            <Typography style={{ paddingLeft: 35, paddingTop: 35 }}>
                                1 Wash vehicle interior, including windows.<br />
                                2 clean vehicle interior, including windows.<br />
                                3 Inspect interior for damages to seats, floor coverings, etc.<br />
                                4. Wash vehicle exterior, including windows.<br />
                                5. Wash vehicle tires.<br />
                            </Typography>
                            <CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={11} md={1} />
                    <Grid item xs={11} md={5}>
                        <Card style={card1}>
                            <CardHeader color="warning" stats icon>
                                <CardIcon color="rose">
                                    <h3>
                                        FLEET Maintenance Checklist
                                </h3>
                                </CardIcon>
                            </CardHeader>
                            <Typography style={{ paddingLeft: 35, paddingTop: 35 }}>
                                1 Lights and signals.<br />
                                2 Horns.<br />
                                3 Parking Brake.<br />
                                4 Transmission fluid level.<br />
                                5 Wiper operation and blades.<br />
                                6 Steering.<br />
                                7 Coolant system.Battery, water level, cables, terminals.<br />
                                9 Engine mounts.<br />
                                10 Belts condition and tension.<br />
                                11 Air Filter.<br />
                                12 Fuel system.<br />
                                13 Brake system, operation, fluid level, linings, etc.<br />
                                14 Tire pressures and condition.<br />
                                15 Differentials.<br />
                                16 Driveline.<br />
                                17 Exhaust system.<br />
                                18 Suspension system.<br />
                                19 Frames.<br />
                                20. Oil level check and greasing.<br />
                            </Typography>
                            <CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={11} md={8}>
                        <Card style={card}>
                            <CardHeader color="warning" stats icon>
                                <CardIcon color="rose">
                                    <h3>
                                        Preventative Maintenance Checklist
                                </h3>
                                </CardIcon>
                            </CardHeader>
                            <Typography style={{ paddingLeft: 35, paddingTop: 35 }}>
                                1 Inspect cotter pins on platform fold axles (2) replace if needed.<br />
                                2 Inspect gas spring mounting hardware Tighten or replace if needed.<br />
                                3 Inspect roll stop for proper operation. Roll Replace defective parts Stop must snap to vertical (UP) position. And/or relubricate.<br />
                                4 Inspect platform locking channels Rescure or replace mounting hardware for securement 8 carriage bolts).<br />
                                5 Inspect handrail(s) for proper operation Replace defective parts and/or relubricate.<br />
                                6 Hydraulic Fluid (Pump) – check level Use Type A transmission Fluid (* See Systems Description for specifications Check fluid level with platform lowered fully. Fill the reservoir to within ½” from the top of the reservoir (breather cap hole).<br />
                                7 Manual Back-up Pump (option) Release valve must be tight. Check for proper operation. Tighten or replace leaky or Faulty hydraulic fittings. Check hydraulic fluid level. (*See Systems Descriptions for Priming and Flushing Procedures).<br />
                                8 Chain Adjustment: Must have equal Adjust if needed.<br />
                                9 iRemove header cover and inspect.<br />
                                10 Cylinder clevis lock nut and cylinder needed.Tighten or replace if mounting.<br />
                                if loosened or removed.<br />
                                11 * Hydraulic hoses, fitting and connections.Rescuer, replace or correct for wear, leaks or other damage as needed.<br />
                                12 * Chains, chain blots, UHMW rollers, axles.Rescure, realign, replace or And mounting hardware for wear,correct as needed.Misalignment or other damage.<br />
                                13 Inspect power cable.Rescuer, repair or replace.<br />
                                14 Make sure lift operates smoothly.Realign horseshoe tubes,Apply *Light Grease or Otherwise correct as needed.<br />
                                15 Mounting Check to see that the lift is Securely anchored to the Vehicle and there are no Loose bolts, broken welds Or stress fractures.<br />
                            </Typography>
                            <CardContent>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
                <Grid justify="center" className="footer">
                    <div className="centers">
                        <center >

                            {/* <Divider variant="middle" style={{ backgroundColor: 'blue' }} /> */}
                            <br />

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
                                    <h5 style={{ backgroundColor: '#052645', color: '#626B74', height: 40 }} align="center">&copy;Copyright 2020 Panda Machine Car</h5>
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
export default withStyles(styles)(Services);
