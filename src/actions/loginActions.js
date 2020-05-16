import {
  
  LOGIN,
  SET_SNACKBAR,
  CLOSE_SNACKBAR,
  LOGOUT,
  HANDLEDRAWER,
  SET_HOME,
  firebase_config,
} from "../constants/ActionTypes";
import UNIVERSAL from "../config/config.js";
import firebase from "firebase";

// const uuidv1 = require('uuid/v1');

// export function setEmail(payload) {
//   return {
//     type: SET_EMAIL,
//     payload: payload
//   };
// }

// export function setPwd(payload) {
//   return {
//     type: SET_PASSWORD,
//     payload: payload
//   };
// }

// export function setName(payload) {
//   return {
//     type: SET_NAME,
//     payload: payload
//   };
// }


// export function setConPwd(payload) {
//   return {
//     type: SET_CONFIRM_PASSWORD,
//     payload: payload
//   };
// }


// export function resetLogin(payload) {
//   return {
//     type: RESET_LOGIN,
//     payload: payload
//   };
// }
export function set_home() {
  return {
    type: SET_HOME
  }
}
export function setLogin(type, email, user_token, profile_img, name) {
  return {
    type: LOGIN,
    payload: {
      name: name,
      type: type,
      email: email,
      token: user_token,
      profile_img: profile_img
    }
  };
}

// export function setnewPassword(payload) {
//   return {
//     type: NEW_PASSWORD,
//     payload: payload
//   };
// }

// export function confirmPassword(payload) {
//   return {
//     type: CONFIRM_PASSWORD,
//     payload: payload
//   };
// }

export function setSnackbar(payload, message) {
  var data = [];
  data.status = payload;
  data.message = message;
  return {
    type: SET_SNACKBAR,
    payload: data
  };
}

export function closeSnackbar() {
  return {
    type: CLOSE_SNACKBAR,
    payload: false
  };
}

// export function user_logout() {
//   return {
//     type: LOGOUT
//   };
// }

export function handleDrawerToggle(mobileOpen) {
  mobileOpen = !mobileOpen;

  return {
    type: HANDLEDRAWER,
    payload: mobileOpen
  };
}
// export function getGeoInfo() {
//   return (dispatch) =>{
//  return axios.get("https://ipapi.co/")
//   .then(response =>response.json())
//   .then((responseJson) => {
//       console.log(responseJson)
//      // dispatch(showVar(responseJson.data))

 // })

//}
// }

// handleDrawerToggle = () => {
//   this.setState(state => ({ mobileOpen: !state.mobileOpen }));
// };

export function onLogout(user_token, uuid) {
  return (dispatch) => {

    return fetch(UNIVERSAL.BASEURL + "v1/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "user-token": user_token,
      },
      body: JSON.stringify({
        
        device_uuid: uuid,
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        firebase.auth().signOut().then(function () {
          dispatch(logout_redirect());
        }).catch(function (error) {
          dispatch(setSnackbar(true, "Could Not Logout. Try Again."));
        });
        localStorage.clear();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export function logout_redirect() {
  return {
    type: LOGOUT
  };
}

export function user_login(countryCode,countryName,email, user_token, uuid, device_type, profile_img, name) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + "v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "user-token": user_token,
      },
      body: JSON.stringify({
        city:countryCode,
        location:countryName,
        email: email,
        name: name,
        
        device: { uuid: uuid, device: "web" },
        device_type: device_type,
        profile_img_url: profile_img
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("profile_img", profile_img);
          localStorage.setItem("user_token", user_token);
          localStorage.setItem("type", responseJson.result);
          localStorage.setItem("uuid", uuid);
          dispatch(setLogin(responseJson.result, email, user_token, profile_img, name));
        } else {
          
          dispatch(setSnackbar(responseJson.status, "Login Failed"));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
}


export function ChangepasswordFunc(newpassword, confirmpassword, token) {
  return (dispatch) => {
    if (newpassword === confirmpassword && newpassword !== "" && confirmpassword !== "") {

      return fetch(UNIVERSAL.BASEURL + "v1/resetpassword", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: newpassword,
          token: token
        }),
      }).then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status) {
            dispatch(setSnackbar(responseJson.status, "Password Changed Successfully"));
          } else {
            dispatch(setSnackbar(responseJson.status, "Password could not be changed"));
          }

        })
        .catch((error) => {
          console.error(error);
        });

    } else {
      dispatch(setSnackbar(true, "password miss match"));
    }
  };
}


export function fbSignin(cityname,countryregion) {
  return (dispatch) => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebase_config);
    }
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;

      dispatch(user_login(cityname,countryregion,result.user.email, token, "1234", "web", result.user.photoURL, result.user.displayName));

    }).catch(function (error) {
      console.log(error);
    });
  }
}


export function googleSignin(cityname,countryregion) {
  return (dispatch) => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebase_config);
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      
      dispatch(user_login(cityname,countryregion,result.user.email, token, "1234", "web", result.user.photoURL, result.user.displayName));

    }).catch(function (error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
  }
}

export function check_login_params() {
  if (localStorage.getItem("user_token") !== null) {
    return (dispatch) => {
      dispatch(setLogin(localStorage.getItem("type"), localStorage.getItem("email"), localStorage.getItem("user_token"), localStorage.getItem("profile_img"), localStorage.getItem("name")))
      if (!firebase.apps.length) {
        firebase.initializeApp(firebase_config);
      }
    }
  }
}