import React from "react";
import img1 from "../../img/3.jpeg";

import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Hidden from "@material-ui/core/Hidden";

function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "https://ravi-portfolio.s3.us-east-2.amazonaws.com/4.jpeg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "https://ravi-portfolio.s3.us-east-2.amazonaws.com/6.jpeg",
    },
  ];

  return (
    <div>
      <Carousel interval={5000}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>

      <Hidden mdUp>
        <Typography variant="h4" className="common-text home-head-3">
          WELCOME TO SKYYRIDER EV
        </Typography>
      </Hidden>

      <Hidden smDown>
        <Typography variant="h4" className="common-text home-head-2">
          WELCOME TO SKYYRIDER EV
        </Typography>
      </Hidden>

      <Card className="home-card">
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={4}
            direction="row"
            justify="flex-end"
            className="home-grid"
          >
            <Typography
              variant="h4"
              className="common-text"
              style={{ marginLeft: "10px" }}
            >
              We are qualified & experience in this field
            </Typography>
            <Typography variant="body1" className="common-text home-body-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={8} className="home-grid">
            <img src={img1} width="100%" height="auto" alt="placeholder"></img>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

function Item(props) {
  return (
    <Paper style={{ minHeight: "650px", maxHeight: "650px" }}>
      <Hidden mdUp>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className="common-text home-head">
              SKYYRIDER
            </Typography>
            <Typography variant="h3" className="common-text home-subhead">
              EV
            </Typography>
            <Button variant="outlined" color="primary" className="home-btn">
              <Typography
                variant="h4"
                className="common-text home-mobilebtntxt"
              >
                EXPLORE
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={props.item.image}
              width="80%"
              height="auto"
              style={{ position: "absolute", top: "400px" }}
            ></img>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden smDown>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2" className="common-text home-head">
              SKYYRIDER
            </Typography>
            <Typography variant="h2" className="common-text home-subhead">
              EV
            </Typography>
            <Button variant="outlined" color="primary" className="home-btn">
              <Typography variant="h2" className="common-text home-btntxt">
                EXPLORE
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={props.item.image} width="80%" height="auto"></img>
          </Grid>
        </Grid>
      </Hidden>
    </Paper>
  );
}

export default Example;
