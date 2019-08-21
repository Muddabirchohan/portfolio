import React, { Component } from 'react';
import skill1 from './../assets/skill1.jpg';
import skill2 from './../assets/skill2.png';
import skill3 from './../assets/skill3.png';
import img1 from './../assets/front.png';
import img2 from './../assets/backend.jpg';
import img3 from './../assets/deployement.jpg';


class Skilss extends Component {
  render() {
    return (
      <div class="container">
      <div className="skills" id="skills">
     
        <h3> SKILLS & TECHNOLOGIES </h3>

          <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12 first-container" >
              <h5> FRONT END </h5>
              <img src={img1}/>
              <p> I am comfortable in working with front-end technologies such as Html,Css,Bootstrap,ReactJs,Vuejs,Nuxtjs.</p>
              <button type="button" class="btn btn-primary" > View More</button>

            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 first-container">
              <h5> BACK END </h5>
              <img src={img2}/>
              <p> Currently I am working on Nodejs as a backend platform along with NoSql Database MongoDB for collection of data </p>
              <button type="button" class="btn btn-primary" > View More</button>

            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 first-container">
              <h5> DEPLOYEMENT </h5>
              <img src={img3}/>
      <p> I prefer Heroku as a DEPLOYEMENT platform for the MERN Stack app or even front end as it provides direct connectivity with github  </p>
      <button type="button" class="btn btn-primary" > View More</button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skilss;