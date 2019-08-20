import React, { Component } from 'react';
import skill1 from './../assets/skill1.jpg';
import skill2 from './../assets/skill2.png';
import skill3 from './../assets/skill3.png';
import img1 from './../assets/img1.png';
import img2 from './../assets/img2.jpg';
import img3 from './../assets/img3.jpg';


class Skilss extends Component {
  render() {
    return (
      <div className="skills" id="skills">
        <div class="container">
        <h3> SKILLS & TECHNOLOGIES </h3>

          <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12 first-container" >
              <h5> FRONT END </h5>
              {/* <img src={img1} height="60px" /> */}
              <p> The front end of a website (or web or mobile application) is the part a user sees and directly interacts with. The front end is built with languages like: HTML. CSS. JavaScript.</p>
              <button type="button" class="btn btn-primary" > View More</button>

            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 first-container">
              <h5> BACK END </h5>
              {/* <img src={img2} height="60px" /> */}
              <p> Back-End. The back-end, or the "server-side", is basically how the site works, updates and changes. This refers to everything the user can't see in the browser, like databases and servers. </p>
              <button type="button" class="btn btn-primary" > View More</button>

            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 first-container">
              <h5> DEPLOYEMENT </h5>
              {/* <img src={img3} height="60px" /> */}
      <p> Software deployment is all of the activities that make a software system available for use. The general deployment process consists of several interrelated </p>
      <button type="button" class="btn btn-primary" > View More</button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skilss;