import React, { Component } from "react";
import img1 from "../../img/1.jpeg";
import img2 from "../../img/7.jpeg";
import img3 from "../../img/3.jpeg";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";

class aboutus extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <div className="page-heading">
          <h1>ABOUT US</h1>
        </div>
        <section>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Typography variant="body1" className="common-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula in libero. Sed
                dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
                convallis tristique sem. Proin ut ligula vel nunc egestas
                porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
                luctu.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <img src={img1} width="100%" height="auto" alt="icon"></img>
            </Grid>
          </Grid>
        </section>

        <h2 className="about-heading">
          <span class="span_underline">WHY</span> CHOOSE US
        </h2>

        <section>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} className="margintop-20">
              <Typography variant="body1" className="common-text">
                <CheckIcon style={{ color: "#e5081f" }} /> Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer nec odio.
              </Typography>

              <Typography variant="body1" className="common-text">
                <CheckIcon style={{ color: "#e5081f" }} /> Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer nec odio.
              </Typography>

              <Typography variant="body1" className="common-text">
                <CheckIcon style={{ color: "#e5081f" }} /> Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer nec odio.
              </Typography>

              <Typography variant="body1" className="common-text">
                <CheckIcon style={{ color: "#e5081f" }} /> Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer nec odio.
              </Typography>

              <Typography variant="body1" className="common-text">
                <CheckIcon style={{ color: "#e5081f" }} /> Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer nec odio.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <img src={img2} width="100%" height="auto" alt="icon"></img>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <img src={img3} width="100%" height="auto" alt="icon"></img>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </section>
      </div>
    );
  }
}

export default aboutus;
