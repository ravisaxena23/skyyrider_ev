import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Blog from "../layouts/serviceslayout";
import Pagination from "../layouts/pagination";

import Grid from "@material-ui/core/Grid";
import { Divider, Hidden } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Services = () => {
  var items = [
    {
      name: "Article Name",
      date: "1 sept, 2020",
      image: "https://ravi-portfolio.s3.us-east-2.amazonaws.com/4.jpeg",
      postLink:"#"
    },
    {
      name: "Article Name",
      date: "1 sept, 2020",
      image: "https://ravi-portfolio.s3.us-east-2.amazonaws.com/6.jpeg",
      postLink:"#"
    },
  ];
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setBlogs(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="page-heading">
        <h1>NEWS AND BLOGS</h1>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Blog services={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={blogs.length}
            paginate={paginate}
          />
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} sm={4}>
            <Typography
              color="textSecondary"
              component="p"
              className="common-text service-post-text"
            >
              <span class="span_underline">LATE</span>ST POSTS
            </Typography>

            <br />
            <Grid container spacing={3} className="padding-10">
              {items.map((item, i) => (
                <Fragment>
                  <Grid
                    item
                    sm={4}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Typography component="p" className="common-text ">
                     <a href={item.postLink} className="service-a">{item.name}</a>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sm={4}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Typography component="p" className="common-text ">
                      {item.date}
                    </Typography>
                  </Grid>
                  <Grid item sm={4}>
                    <img
                      src={item.image}
                      width="100%"
                      height="auto"
                      alt="placeholder"
                    ></img>
                  </Grid>
                  <Divider className="tag-hr" />
                </Fragment>
              ))}
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Services;
