import React from "react";
import LoaderCon from "../containers/loader/loader_cont";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../styles/style";
import "../styles/style.scss";
import {
    Grid,
} from "@material-ui/core";
// import { Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
import Header from "./subpage/header";
// import Slider from "./subpage/carousel";
// import Services from "./subpage/services";
// import About from "./subpage/about";
class Events extends React.Component {
    componentDidMount() {
        this.props.view_details();
        this.props.view_all_events();
    }
    render() {
        const { login } = this.props;
        return (
            <Grid>
                <Header />
                <Grid container justify="center">
                    {login.events.map(row => (
                        <Grid item xs={12} md={3} style={{ paddingTop: 10 }} key={row._id} spacing={1}>
                            <img src={row.image} height="30px" width="30px" alt="unable to load" />
                        </Grid>
                    ))}
                </Grid>
                <LoaderCon />

            </Grid>
        )
    }
}
export default withStyles(styles)(Events);
