import React, { Component } from 'react';
import profile from './../assets/profile.jpg';
import internship from './../assets/internship.jpg';

import Nav from './Nav';
import { Card, Button } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <div className="about-me" id="about">

                <div>
                    <h2> About Me </h2>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <Card >
                                <Card.Img variant="top" src={profile} />
                                {/* <Button style={{ backgroundColor: "#007bff" }}>Go somewhere</Button> */}

                            </Card>
                        </div>

                        <div class="col-lg-6">
                            <div className="second-para"> 
                            <p >
                                hello this is Muddabir Chohan ,MERN Stack Developer looking forward to work as a full stack developer with React as Front end and Nodejs as a backend
                                                There’s no need to be overly formal on your online portfolio page. This is your own space for representing yourself on the web. Let yourself feel at home, and write your About page the same way you would normally speak.
                                                hello this is Muddabir Chohan ,MERN Stack Developer looking forward to work as a full stack developer with React as Front end and Nodejs as a backend
                                                There’s no need to be overly formal on your online portfolio page. This is your own space for representing yourself on the web. Let yourself feel at home, and write your About page the same way you would normally speak.
                            </p>
                            <h3> Achievements </h3>
                            </div>
                            <div class="row">
                                <div class="col-sm-12col-lg-12">

                                    <Card style={{width: '100%'}}>
                                    <Card.Title> <h3> BSOM </h3></Card.Title>
                                    <Card.Text>
                                        <p>
                                    won first prize in BSOM(Become a Successfull owner Manager) an event by Shell Tameer by pitching the idea of INSTANT BLOOD LOCATOR (LAAL)         
                                    which won first prize in health category <br/>
                                    provided link:
                                    <Card.Link style={{color: '#ca7c00',fontSize: '20px',fontWeight:'bolder'}} href="https://www.facebook.com/neduet.academy/photos/pcb.2521337927886280/2521337584552981/?type=3&theater"> BSOM  </Card.Link>
                                    </p>
                                    </Card.Text>
                                    </Card>
                                </div>


                                {/* <div class="col-sm-6 col-lg-6">

                                <Card style={{width: '250px'}}>
                                    <Card.Title> <h3> INTERNSHIP </h3></Card.Title>
                                    <Card.Text>
                                        <p> worked as a javascript internee paid 4 months ,working on react as front end and nodejs as a backend also worked on several projects of react native ,vuejs,nuxtjs 
                                    internship certificate linked here:  
                                        </p>
                                    </Card.Text>
                                        
</Card>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>




                {/* <div class="container">
                    <div class="row">
                        <div class="col-sm">


</div>
</div>
</div> */}









            </div>
        );
    }
}

export default About;