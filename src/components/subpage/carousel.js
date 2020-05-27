import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../styles/style";
import "../../styles/style.scss";
import {
     Grid
} from "@material-ui/core";
import { Slide } from 'react-slideshow-image';
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}
class Slider extends React.Component {
    render() {
        return (
            <Grid container justify='center'>
                <Slide {...properties} style={{width:'100%'}}>
                    <img src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2FIMG-3767%20(1).JPG?alt=media&token=9e9a9701-293f-4b2d-bc95-bd97b4c9e1f2https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2FIMG-3767%20(1).JPG?alt=media&token=9e9a9701-293f-4b2d-bc95-bd97b4c9e1f2"} alt="no_image" width='100%' />
                    <img src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2FAF92B920-C8A9-45DD-A33C-31B01A17B4D0.jpg?alt=media&token=41a046c7-1c76-4bf6-8b49-b54d701f6642"} alt="no_image" width='100%'  />
                    <img src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2FC8AEAC76-78B4-4A25-AB51-8E6D733E4EA5.jpg?alt=media&token=32dc9fce-892c-4583-b261-1b56ca9589ea"} alt="no_image" width='100%' />
                </Slide>
            </Grid>
        )
    }
}

export default withStyles(styles)(Slider);
