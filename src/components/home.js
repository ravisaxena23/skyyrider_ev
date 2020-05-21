// import React from "react";
// import { Grid } from '@material-ui/core';
// import CardHeader from "./cards/CardHeader.js";
// import CardIcon from "./cards/CardIcon.js";
// import Card from "./cards/Card.js";
// import CardContent from "@material-ui/core/CardContent";
// const card = {
//     borderRadius: "20px",
//     backgroundColor: "#1C2833",
//     marginTop: 50
// };
// class Home extends React.Component {
//     render() {
//         return (
//             <Grid>
//                 <header id="home">

//                     <nav id="nav-wrap">
//                         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
//                         <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
//                         <ul id="nav" className="nav">
//                             <li><a className="smoothscroll" href="#home">Home</a></li>
//                             <li><a className="smoothscroll" href="#about">About</a></li>
//                             <li><a className="smoothscroll" href="#service">Service</a></li>
//                             <li><a className="smoothscroll" href="#News">News & Events</a></li>

//                             <li><a className="smoothscroll" href="#contact">Contact</a></li>
//                         </ul>
//                     </nav>

//                     <div className="row banner">
//                         <div className="banner-text">
//                             <h1 className="responsive-headline">Panda Machine Car</h1>
//                             <h3>Your machine "Our responsibility"</h3>
//                             <hr />

//                         </div>
//                     </div>

//                     {/* <p className="scrolldown">
//                         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
//                     </p> */}
//                 </header>



//                 <section id="service">
//                     <Grid container justify="center">
//                         <Grid item xs={12} lg={4} style={{ padding: '2%' }}>
//                             <Card style={card}>
//                                 {/* <CardHeader color="warning" stats icon>
                                    
//                                 </CardHeader> */}
//                                 <CardContent style={{margin:20}}>
//                                     {/* <CardIcon> */}
//                                         <h3>
//                                             VEHICLE CLEANING CHEKUP
//                                         </h3>
//                                     {/* </CardIcon> */}
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                         <Grid item xs={12} lg={4} style={{ padding: '2%' }}>
//                             <Card style={card}>
//                                 <CardHeader stats icon>
//                                     <CardIcon color="primary">
//                                         <h3>
//                                             FLEET Maintenance Checklist
//                                         </h3>
//                                     </CardIcon>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <span style={{ color: 'white', fontSize: 14 }} >

//                                         •	To be a trendsetter in the heavy & commercial services industry.<br></br>
//                                             •	To provide advanced repairs & maintenance cost effectively.<br></br>
//                                             •	To make our customers feel comfortable and pleased with their service experience.

//                                     </span>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                         <Grid item xs={12} lg={8} style={{ padding: '2%' }}>
//                             <Card style={card}>
//                                 <CardHeader color="warning" stats icon>
//                                     <CardIcon color="primary">
//                                         <h3>
//                                             Preventative Maintenance Checklist

//                                         </h3>
//                                     </CardIcon>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <span style={{ color: 'white', fontSize: 14 }} >
//                                         •	Best in class skilled Technicians.<br></br>
//                                             •	Expert in reducing costing & Increasing Productivity.<br></br>
//                                             •	Act as a mediator between Technicians & Client for smooth operations.<br></br>
//                                             •	We uphold responsibility and thrive hard to complete it successfully.<br></br>
//                                             •	Provide security against theft of Consumables.<br></br>
//                                             •	Having a good experience in working of the machinery & the process of the company.	<br></br>
//                                             •	To Increase the productivity of the work from the current output.<br></br>
//                                             •	Provide Skilled Manpower<br></br>
//                                             •	To better the working environment which provide a healthy & dedicated work environment.<br></br>
//                                             •	To reduce burden on the company and single handed taking care of the management of the system<br></br>
//                                             •	Working for a passion towards work rather than money.<br></br>
//                                             •	Taking care of the Fuel Management is sole responsibility of our Organization<br></br>
//                                             •	We believe that our customer should be informed and we make them understand what’s wrong about their vehicle<br></br>
//                                             •	We stand behind every job we perform, and we believe in providing total customer satisfaction.<br></br>
//                                         {/* </b> */}
//                                     </span>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     </Grid>
//                 </section>

//                 <section id="testimonials">
//                     <Grid container justify="center">
//                         <Grid item xs={12} lg={4} style={{ padding: '2%' }}>
//                             <Card style={card}>
//                                 <CardHeader color="warning" stats icon>
//                                     <CardIcon color="primary">
//                                         <h3>
//                                             MOTIVE
//                                         </h3>
//                                     </CardIcon>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <span style={{ color: 'white', fontSize: 14 }} >

//                                         •	To create integrated  service centres across India.
//                                         <br />
//                                         •	To establish and create industry standards in terms of infrastructure, client service & vehicle maintenance services in an efficient and cost-effective manner
//                                     </span>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                         <Grid item xs={12} lg={4} style={{ padding: '2%' }}>
//                             <Card style={card}>
//                                 <CardHeader stats icon>
//                                     <CardIcon color="primary">
//                                         <h3>
//                                             VISION
//                                         </h3>
//                                     </CardIcon>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <span style={{ color: 'white', fontSize: 14 }} >

//                                         •	To be a trendsetter in the heavy & commercial services industry.<br></br>
//                                             •	To provide advanced repairs & maintenance cost effectively.<br></br>
//                                             •	To make our customers feel comfortable and pleased with their service experience.

//                                     </span>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                         <Grid item xs={12} lg={8} style={{ padding: '2%' }}>
//                             <Card style={card}>
//                                 <CardHeader color="warning" stats icon>
//                                     <CardIcon color="primary">
//                                         <h3>
//                                             WHY CHOOSE US
//                                         </h3>
//                                     </CardIcon>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <span style={{ color: 'white', fontSize: 14 }} >
//                                         •	Best in class skilled Technicians.<br></br>
//                                             •	Expert in reducing costing & Increasing Productivity.<br></br>
//                                             •	Act as a mediator between Technicians & Client for smooth operations.<br></br>
//                                             •	We uphold responsibility and thrive hard to complete it successfully.<br></br>
//                                             •	Provide security against theft of Consumables.<br></br>
//                                             •	Having a good experience in working of the machinery & the process of the company.	<br></br>
//                                             •	To Increase the productivity of the work from the current output.<br></br>
//                                             •	Provide Skilled Manpower<br></br>
//                                             •	To better the working environment which provide a healthy & dedicated work environment.<br></br>
//                                             •	To reduce burden on the company and single handed taking care of the management of the system<br></br>
//                                             •	Working for a passion towards work rather than money.<br></br>
//                                             •	Taking care of the Fuel Management is sole responsibility of our Organization<br></br>
//                                             •	We believe that our customer should be informed and we make them understand what’s wrong about their vehicle<br></br>
//                                             •	We stand behind every job we perform, and we believe in providing total customer satisfaction.<br></br>
//                                         {/* </b> */}
//                                     </span>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     </Grid>
//                 </section>
//             </Grid>
//         )
//     }
// }
// export default Home;