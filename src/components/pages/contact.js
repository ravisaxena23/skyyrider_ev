import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class contact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fullname: "",
      mobileNo: "",
      question: "",
      nameerror: "",
      emailerror: "",
      questionerror: "",
      mobileerror: "",
    };
  }
  validate = () => {
    let nameerror = "";
    let emailerror = "";
    let questionerror = "";
    let mobileerror = "";
    if (!this.state.fullname) {
      nameerror = "Blank Name";
    }

    if (!this.state.email.includes("@")) {
      emailerror = "Invalid Email";
    }

    if (!this.state.mobileNo) {
      mobileerror = "Invalid Mobile No";
    }

    if (!this.state.question) {
      questionerror = "Oops You Forget To Write";
    }

    if (emailerror || nameerror || mobileerror || questionerror) {
      this.setState({ emailerror, nameerror, mobileerror, questionerror });
      return false;
    }

    return true;
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.validate() === true) {
      console.log(this.state.fullname);
      //   const db = firebase.firestore(); uncomment when add firebase
      const form = {
        name: this.state.fullname,
        email: this.state.email,
        mobileNo: this.state.mobileNo,
        question: this.state.question,
      };
      //   const userRef = db.collection("users").add(form);  uncomment when u add db change users to table name
      this.setState({
        fullname: "",
        email: "",
        mobileNo: "",
        question: "",
      });
    } else {
      console.log("error");
    }
  };
  render() {
    return (
      <div>
        <div className="page-heading">
          <h1>CONTACT US</h1>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.267655218693!2d85.8112021507354!3d20.289185486336937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a71648ca9d8d%3A0x936ba93a9b71e46b!2sSkyy%20Rider%20Institution-%20Nayapalli%20(Sky%20Rider%20Automotive)!5e0!3m2!1sen!2sin!4v1605695017208!5m2!1sen!2sin"
            width="100%"
            height="300"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            title="skyydriveev location"
          ></iframe>
        </div>

        <Paper className="paper">
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={4}>
              <h4 style={{ marginTop: "20px" }}>CALL US NOW AT</h4>

              <Grid container>
                <Grid item xs={6} sm={4}>
                  <img
                    src="https://w7.pngwing.com/pngs/716/54/png-transparent-computer-icons-telephone-call-iphone-symbol-iphone-electronics-telephone-call-logo.png"
                    width="100"
                    height="50"
                     alt="icon"
                  ></img>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Typography variant="body1"  className="common-text">
                    Mobile: (520) 577 2710
                  </Typography>
                  <Typography variant="body1"  className="common-text">
                    Assisatnce: (520) 577 27250
                  </Typography>
                  <Typography variant="body1"  className="common-text">Weekdays: (520) 577</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={4}>
              <h4 className="contact-heading">SKYYRIDER EV OFFC</h4>

              <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCODf5XdCF1sqEgEMPWiQqF-_SNBniks_Pw&usqp=CAU"
                    width="100"
                    height="50"
                    alt="icon"
                  ></img>
                </Grid>
                <Grid item xs={6} sm={8}>
                  <Typography variant="body1"  className="common-text">
                    Nayapali, Bhubaneswar, Odisha.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={4}>
              <h4 className="contact-heading">24/7 ASSISTANCE</h4>

              <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>
                  <img
                    src="https://www.pngkey.com/png/full/114-1146133_delivery-png-photos-light-commercial-vehicles-icon.png"
                    width="100"
                    height="50"
                    alt="icon"
                  ></img>
                </Grid>
                <Grid item xs={6} sm={8}>
                  <Typography variant="body1"  className="common-text">
                    services consequatluctus at justo auctor
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Card>
          <h5 class="heading">We are happy to answer you!</h5>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} style={{ display: "grid" }}>
                <input
                  class="contact-input"
                  type="text"
                  name="fullname"
                  placeholder=" YOUR NAME"
                  value={this.state.fullname}
                  onChange={(e) => this.handleChange(e)}
                  required
                />
                {this.state.nameerror ? (
                  <div class="form-show">{this.state.nameerror}</div>
                ) : (
                  <div class="form-hide">{this.state.nameerror}</div>
                )}
              </Grid>
              <Grid item xs={12} sm={4} style={{ display: "grid" }}>
                <input
                  class="contact-input"
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e)}
                />
                {this.state.emailerror ? (
                  <div class="form-show">{this.state.emailerror}</div>
                ) : (
                  <div class="form-hide">{this.state.emailerror}</div>
                )}
              </Grid>
              <Grid item xs={12} sm={4} style={{ display: "grid" }}>
                <input
                  class="contact-input"
                  type="text"
                  name="mobileNo"
                  placeholder=" YOUR PHONE NO."
                  value={this.state.mobileNo}
                  onChange={(e) => this.handleChange(e)}
                />
                {this.state.mobileerror ? (
                  <div class="form-show">{this.state.mobileerror}</div>
                ) : (
                  <div class="form-hide">{this.state.mobileerror}</div>
                )}
              </Grid>
              <Grid item xs={12} sm={12} style={{ display: "grid" }}>
                <textarea
                  class="contact-input"
                  type="text"
                  name="question"
                  placeholder="MESSAGE..."
                  value={this.state.question}
                  onChange={(e) => this.handleChange(e)}
                />
                {this.state.questionerror ? (
                  <div class="form-show">{this.state.questionerror}</div>
                ) : (
                  <div class="form-hide">{this.state.questionerror}</div>
                )}
              </Grid>
            </Grid>
            <div class="contact-btn">
              <a type="submit" onClick={(e) => this.onSubmit(e)}>
                Submit
              </a>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}

export default contact;
