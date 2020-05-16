import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import View_admin_vendors from "../../components/vendors/admin_vendor";

import {
    get_all_units,
} from "../../actions/units/units_action";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_building_vendors,
    view_single_vendor_info,
    delete_single_vendor,
    set_vendor_name,
    set_vendor_service,
    set_license_no,
    payment_type,
    set_fixed_amount,
    set_account_no,
    set_bank_name,
    set_bank_ifsc,
    set_vendor_contact,
    set_bank_branch,
    set_is_fixed,
    validate_single_vendor,
    next_btn,
    prev_btn,
    toggleCheckbox
}
    from "../../actions/vendors/vendors_action";

export class View_admin_vendors_cont extends Component {

    render() {
        return (
            <View_admin_vendors {...this.props} />
        );
    }
};

export const mapStateToProps = store => {
    return {
        units: store.units,
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
        vendors: store.vendors,
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        view_single_vendor_info: (token, building_id, vendor_id) => {
            dispatch(view_single_vendor_info(token, building_id, vendor_id))
        },
        get_all_units: (token) => {
            dispatch(get_all_units(token))
        },
        get_building_vendors: (token, building_id, limit, starting_after) => {
            dispatch(get_building_vendors(token, building_id, limit, starting_after))
        },
        set_vendor_name: (payload) => {
            dispatch(set_vendor_name(payload))
        },
        set_vendor_service: (payload) => {
            dispatch(set_vendor_service(payload))
        },
        set_license_no: (payload) => {
            dispatch(set_license_no(payload))
        },
        payment_type: (payload) => {
            dispatch(payment_type(payload))
        },
        set_fixed_amount: (payload) => {
            dispatch(set_fixed_amount(payload))
        },
        set_account_no: (payload) => {
            dispatch(set_account_no(payload))
        },
        set_bank_name: (payload) => {
            dispatch(set_bank_name(payload))
        },
        set_bank_ifsc: (payload) => {
            dispatch(set_bank_ifsc(payload))
        },
        set_bank_branch: (payload) => {
            dispatch(set_bank_branch(payload))
        },
        set_vendor_contact: (payload) => {
            dispatch(set_vendor_contact(payload))
        },
        prev_btn: (token, building_id, limit, starting_after) => {
            dispatch(prev_btn(token, building_id, limit, starting_after))
        },
        next_btn: (token, building_id, limit, starting_after) => {
            dispatch(next_btn(token, building_id, limit, starting_after))
        },
        set_is_fixed: (payload) => {
            dispatch(set_is_fixed(payload))
        },
        validate_single_vendor: (token, building_id, vendor_id, vendors) => {
            dispatch(validate_single_vendor(token, building_id, vendor_id, vendors))
        },
        delete_single_vendor: (token, vendor_id, building_id, vendors) => {
            dispatch(delete_single_vendor(token, vendor_id, building_id, vendors))
        },
        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        toggleCheckbox: (obj, array) => {
            dispatch(toggleCheckbox(obj, array));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View_admin_vendors_cont);