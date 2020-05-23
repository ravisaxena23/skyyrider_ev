import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import About from "../components/aboutUs";

import {
    view_details,
} from "../actions/loginActions";

export class AboutCont extends Component {

    render() {
        return (
            <About {...this.props} />
        );
    }
};

export const mapStateToProps = store => {
    return {
        login: store.login,
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        view_details: () => {
            dispatch(view_details());
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutCont);