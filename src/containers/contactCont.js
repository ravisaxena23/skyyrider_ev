import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Contact from "../components/pages/contact";

import {
    view_details,
} from "../actions/loginActions";

export class ContactCont extends Component {

    render() {
        return (
            <Contact {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactCont);