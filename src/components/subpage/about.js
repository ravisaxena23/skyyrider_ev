import React, { Component } from 'react';
// import Header from './Header';
// import myImage from '../profilepic.jpg';
class About extends Component {
    render() {
        return (
            <div>
                <div id="about-container"
                    className="content-containers container text-center mt-5">
                    <h1 id="about" >
                        About
				</h1>
                    <div className="row">
                        <div className="col-12 col-lg-6 hidden">
                            {/* <img
                            className={"img-fluid "}
                            src={myImage}
                            alt=""
                            style={{
                                borderRadius: 50 + "%",
                                height: 250 + "px",
                                width: 250 + "px"
                            }}
                        /> */}
                            <p className={"mytext pt-3 "}>
                                Mr. Dhiren panda is Skilled in vehicle maintenance supervision with 8+years experience. Have worked in project planning, management, and ensuring work is in compliance with all relevant to state codes.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;