import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Home from "../components/home";

import {
    view_details,
} from "../actions/loginActions";

export class HomeCont extends Component {

    render() {
        return (
            <Home {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeCont);