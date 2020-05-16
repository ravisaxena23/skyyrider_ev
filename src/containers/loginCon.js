import React, { Component } from "react";
// import Counter from "../components/Counter";
import { connect } from "react-redux";
import Login from "../components/login";

import { 
  fbSignin, 
  googleSignin, 
  closeSnackbar,
  setLogin,
  set_home,
  // getGeoInfo
} from "../actions/loginActions";

export class Controller extends Component {

  render() {
    return (
      <Login {...this.props} />
    );
  }
};

export const mapStateToProps = store => {
  return {
    login: store.login
  };
};

export const mapDispatchToProps = dispatch => {
    return {
      closeSnackbar: () => {
        dispatch(closeSnackbar());
      },
      googleSignin: (cityname,countryregion) => {
        dispatch(googleSignin(cityname,countryregion));
      },
      fbSignin: (cityname,countryregion) => {
        dispatch(fbSignin(cityname,countryregion));
      },
      setLogin: (type, email, user_token, profile_img) => {
        dispatch(setLogin(type, email, user_token, profile_img));
      },
      set_home:()=>{
        dispatch(set_home())
      },
      // getGeoInfo: () => {
      //   dispatch(getGeoInfo());
      // },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Login);