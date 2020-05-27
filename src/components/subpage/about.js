import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../styles/style";
import "../../styles/style.scss";
import CardHeader from "../cards/CardHeader.js";
import CardIcon from "../cards/CardIcon.js";
import Cards from "../cards/Card";
import {
    Grid,
    CardContent,
    Card,
    CardMedia,
    Avatar,
    Typography,
    Divider
} from '@material-ui/core';
const card = {
    borderRadius: "10px",
    // justify: "center",
    marginTop: 50,
    marginBottom: 50
};
const card1 = {
    borderRadius: "20px",
    height: "500px",
    // backgroundColor: "#f8f0ff",

    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,

};
const card3 = {
    borderRadius: "10px",
    justify: "center",
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: 'black'
};
const card4 = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    marginTop: 50,
    height: 250,
};
class About extends Component {
    render() {
        return (
            <Grid container justify="center" className="homeback">
                <Grid item xs={12} md={10}>
                    <Card style={card}>
                        <CardContent style={{ height: '100%' }}>
                            <Grid container justify='center'>
                                <Grid item xs={12}>
                                    <center> <h2> About us</h2></center>
                                </Grid>
                                <Grid item xs={12}>
                                    <p style={{ fontSize: 20 }}>
                                        PANDA MACHINE CARE (Formerly named as Panda Auto maintenance) was established in the month of SEPTEMBER 2019. The company is firmly into maintenance, service, and door step vehicle cleaning and with innovative fuel saving method to the various fields of construction and real estate. PMC has been leading maintenance service company in the field of construction and helping many company to grow there business. PMC has been setting up new milestones in quality maintenance service and changing many companies into hassle free working project environment. Best technician and supervisor who have from skill India very good industrial experience and achievements in their respective fields are PMC’s major strength.
                                    </p>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={12} md={4}>
                                            <Card className="cardteam" style={card1}>
                                                <center>
                                                    <CardMedia>
                                                        <Avatar src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Fprofile.png?alt=media&token=dce9cf28-85b6-4946-86b5-3eff1471fde1"} style={{ width: "40%", height: "40%", marginTop: 20 }} />
                                                    </CardMedia>
                                                    <Typography>
                                                        <h2>DHIREN PANDA</h2>
                                                        {/* <b> */}
                                                        <i><h3 className="position">DIRECTOR</h3></i>
                                                        <p style={{ color: 'yellow', padding: 15 }}>
                                                            Mr. Dhiren panda is Skilled in vehicle maintenance supervision with 8+years experience. Have worked in project planning, management, and ensuring work is in compliance with all relevant to state codes.
                                                            </p>
                                                        {/* </b> */}
                                                    </Typography>
                                                </center>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Card className="cardteam" style={card1}>
                                                <center>
                                                    <CardMedia>
                                                        <Avatar src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Fprofile.png?alt=media&token=dce9cf28-85b6-4946-86b5-3eff1471fde1"} style={{ width: "40%", height: "40%", marginTop: 20 }} />
                                                    </CardMedia>
                                                    <Typography>
                                                        <h2>PRATAP PANDA </h2>
                                                        {/* <b> */}
                                                        <i>
                                                            <h3 className="position">CEO</h3>
                                                        </i>
                                                        <p style={{ color: 'yellow', padding: 15 }}>
                                                            Mr.pratap panda is a young, talented professional and brings with him fresh innovation ideas. PMC is his brain child. Worked skyy Rider Institution after completing his B.tech in mechanical engineering from GIET Bhubaneswar in year 2019. He worked as a Divisional co-ordinator for recycling Techniques in the automotive sector.
                                                            </p>
                                                        {/* </b> */}
                                                    </Typography>
                                                </center>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Card className="cardteam" style={card1}>
                                                <center>
                                                    <CardMedia>
                                                        <Avatar src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Fprofile.png?alt=media&token=dce9cf28-85b6-4946-86b5-3eff1471fde1"} style={{ width: "40%", height: "40%", marginTop: 20 }} />
                                                    </CardMedia>
                                                    <Typography>
                                                        <h2>DIPTI RANJAN PANDA</h2>
                                                        {/* <b> */}
                                                        <i>
                                                            <h3 className="position">SENIOR MANAGER</h3>
                                                        </i>
                                                        <p style={{ color: 'yellow', padding: 15 }}>
                                                            Mr. Dipti ranjan panda a dedicated personable manager that understand the principles of teamwork, trust and accountability. Ability to creat an environment that fosters a sense of personal integrity .
                                                            </p>
                                                        {/* </b> */}
                                                    </Typography>
                                                </center>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={5} style={{marginRight:30}}>
                    <Cards style={card4}>
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
                    </Cards>
                </Grid>
                {/* <Grid item md={1} /> */}
                <Grid item xs={12} md={5}>
                    <Cards style={card4}>
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
                    </Cards>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card style={card3}>
                        <CardContent style={{ height: '100%' }}>
                            <Grid container justify='center'>
                                <Grid item xs={12}>
                                    <center>
                                        <h2 style={{ color: 'white' }}>WHY CHOOSE US</h2>
                                    </center>
                                    <Divider variant="middle" style={{ backgroundColor: 'white' }} />
                                </Grid>
                                <Grid item xs={12} style={{ margin: 20 }}>
                                    <span style={{ color: '#3873AE', fontSize: 22, }}>
                                        <i>
                                            • Best in class skilled Technicians.<br />
                                        • Expert in reducing costing & Increasing Productivity.<br />
                                        • Act as a mediator between Technicians & Client for smooth operations.<br />
                                        • We uphold responsibility and thrive hard to complete it successfully.<br />
                                        • Provide security against theft of Consumables.<br />
                                        • Having a good experience in working of the machinery & the process of the company.<br />
                                        • To Increase the productivity of the work from the current output.<br />
                                        • Provide Skilled Manpower.<br />
                                        • To better the working environment which provide a healthy & dedicated work environment.<br />
                                        • To reduce burden on the company and single handed taking care of the management of the system.<br />
                                        • Working for a passion towards work rather than money.<br />
                                        • Taking care of the Fuel Management is sole responsibility of our Organization.<br />
                                        • We believe that our customer should be informed and we make them understand what’s wrong about their vehicle.<br />
                                        • We stand behind every job we perform, and we believe in providing total customer satisfaction.<br />
                                        </i>
                                    </span>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}
export default withStyles(styles)(About);