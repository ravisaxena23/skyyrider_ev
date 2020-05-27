import React from "react";
import LoaderCon from "../containers/loader/loader_cont";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../styles/style";
import "../styles/style.scss";
import {
    Grid,
    Avatar,
} from "@material-ui/core";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Header from "./subpage/header";
// import Slider from "./subpage/carousel";
// import Services from "./subpage/services";
// import About from "./subpage/about";
class Contact extends React.Component {
    componentDidMount() {
        this.props.view_details();
    }
    render() {
        const { login } = this.props;
        return (
            <Grid>
                <Header />
                <Grid container justify="center" style={{ backgroundColor: '#C5D5E5', paddingTop: 10 }}>
                    <div class="row">
                        <div class="col-12">
                            <h2 class="contact-title">Get in Touch</h2>
                        </div>
                        <div class="col-lg-8">
                            <form class="form-contact contact_form" method="POST" id="contactForm" novalidate="novalidate">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder="Enter your Message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control valid" name="phone" id="phone" type="number" maxlength="10" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Phone Number'" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <button type="submit" class="button button-contactForm boxed-btn">Send</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-3 offset-lg-1">
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-home"></i></span>
                                <div class="media-body">
                                    <h2>Office Address</h2>
                                </div>
                            </div>
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                                <div class="media-body">

                                    <h3>{login.details.address1}</h3>
                                    <h3>{login.details.address2}</h3>
                                    <h3>{login.details.address3}</h3>

                                    <p >India</p>
                                    <br /><br />

                                    <p className="para">Call us at your own convenience!</p>
                                </div>
                            </div>

                        </div>
                    </div>
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
export default withStyles(styles)(Contact);
