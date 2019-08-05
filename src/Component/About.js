import React, { Component } from 'react';
import profile from './../assets/profile.jpg';
import Nav from './Nav';


class About extends Component {
    render() {
        return (
            <div className="about-me">

                <div>
                    <Nav />
                </div>

                <div>
                    <h2> About Me </h2>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <card>
                            <img src={profile} height="500px"/>
                            </card>
                        </div>

                        <div class="col-sm">
                        <h3> Profile </h3>
                        <p> hello this is Muddabir Chohan ,MERN Stack Developer looking forward to work as a full stack developer with React as Front end and Nodejs as a backend </p>

                         </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default About;