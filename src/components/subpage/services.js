import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../styles/style";
import "../../styles/style.scss";
import {
    Grid,
    CardContent,
    Card
} from "@material-ui/core";
import { Link } from "react-router-dom";
const card = {
    borderRadius: "10px",
    // backgroundColor: "#1C2833",
    // margin: 5,
    justify: "center",
    height: '95%',
    width:'95%'
};
class Services extends React.Component {
    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={12} lg={12} style={{ color: 'black', textAlign: 'center', paddingTop: '2%' }}>
                    <h1>Services</h1>
                </Grid>
                <Grid item xs={4} lg={4} style={{ padding: '1%' }}>
                    <Card className="homecard1" style={card}>
                        <CardContent style={{ height: '100%' }}>
                            <h2 style={{ color: 'black', paddingTop: '15%', paddingLeft: '10%', textAlign: 'center',fontSize:'small' }}> Vehicle Cleaning Checkup</h2>
                            <Link to="services"><b><p style={{ color: 'Blue', textAlign: 'center', paddingTop: '7%', fontSize: 'small' }}>View Details</p></b></Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} lg={4} style={{ padding: '1%' }}>
                    <Card className="homecard2" style={card}>
                        <CardContent style={{ height: '100%' }}>
                            <h2 style={{ color: 'black', paddingTop: '15%', paddingLeft: '10%', textAlign: 'center', fontSize: 'small' }}> FLEET Maintenance Checklist</h2>
                            <Link to="services"><b><p style={{ color: 'Blue', textAlign: 'center', paddingTop: '7%', fontSize: 'small' }}>View Details</p></b></Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} lg={4} style={{ padding: '1%' }}>
                    <Card className="homecard3" style={card}>
                        <CardContent style={{ height: '100%' }}>
                            {/* <h2 style={{ color: 'white', paddingTop: '20%', paddingLeft: '10%' }}> Preventative Maintenance Checklist</h2> */}
                            <Link to="services">
                                <b><p style={{ color: 'Blue', textAlign: 'center', paddingTop: '30%', fontSize: 'small' }}>View Details</p></b>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(Services);
