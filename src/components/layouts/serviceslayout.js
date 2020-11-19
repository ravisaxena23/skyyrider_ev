import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Services = ({ services, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {services.map((service) => (
        <div className="padding-10 margin-10">
          <Card>
            <CardMedia>
              <img
                src="https://29comwzoq712ml5vj5gf479x-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/default.svg"
                width="100%"
                height="auto"
                alt="placeholder"
              ></img>
            </CardMedia>

            <CardContent className="name-tag">
              <Grid container spacing={3}>
                <Grid item xs={8} sm={8}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className="common-text name-tag-text"
                  >
                    BY: {service.name} | In: {service.address.street}
                  </Typography>
                </Grid>

                <Grid item xs={4} sm={4} className="date-body">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className="common-text date-tag-text"
                  >
                    01 SEPT
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>

            <CardContent>
              <Typography variant="h4" component="h5" className="article-head">
                ARTICLE NAME
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="common-text"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula in libero.
              </Typography>
            </CardContent>

            <Button size="large" className="read-btn">
              Read More
            </Button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Services;
