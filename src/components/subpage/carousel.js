import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../styles/style";
import "../../styles/style.scss";
import {
    Carousel
} from 'react-bootstrap';
import {
    Hidden, Grid
} from "@material-ui/core";
class Slider extends React.Component {
    render() {
        return (
            <Grid container>
                <Hidden only={["xl", "lg", "md"]}>
                    <Carousel>
                        <Carousel.Item>
                            
                            <img
                                className="d-block w-100"
                                styles={{height:10}}
                                src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Fheader-background.jpg?alt=media&token=dc17d776-8722-483b-806d-bb999bf648b9"}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h2>Panda Machine Care</h2>
                                <p>Your machine "Our responsibility"</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Fheader-background.jpg?alt=media&token=dc17d776-8722-483b-806d-bb999bf648b9"}

                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Fheader-background.jpg?alt=media&token=dc17d776-8722-483b-806d-bb999bf648b9"}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Hidden>
                <Hidden only={["xs", "sm"]}>
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h2>Panda Machine Care</h2>
                                <p>Your machine "Our responsibility"</p>
                            </Carousel.Caption>
                            <img
                                className="carousel"
                                src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Fheader-background.jpg?alt=media&token=dc17d776-8722-483b-806d-bb999bf648b9"}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel"
                                src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Fheader-background.jpg?alt=media&token=dc17d776-8722-483b-806d-bb999bf648b9"}

                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel"
                                src={"https://firebasestorage.googleapis.com/v0/b/panda-machine-care.appspot.com/o/images%2Fheader-background.jpg?alt=media&token=dc17d776-8722-483b-806d-bb999bf648b9"}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Hidden>
            </Grid>
        )
    }
}

export default withStyles(styles)(Slider);
