import React, { Component } from 'react';
import sbay from './../assets/sbay.PNG';
import carapp from './../assets/carapp.PNG';
import itemlist from './../assets/itemlist.PNG';
import geocode from './../assets/geocode.PNG';
import sbay2 from './../assets/sbay1.PNG';
import sbay3 from './../assets/sbay3.PNG';


class Projects extends Component {
    render() {
        return (
            <div className="projects-parent" id="projects">




                <div class="container">
                <h5> PROJECTS </h5>
  
    <a href="https://sbay-mrz.herokuapp.com/"> 

    <div class="card div_hover">

  <div class="card-body ">

  <img src={sbay2} width="300px" height="130px"/>
  <img src={sbay} width="300px"/>
  {/* <img src={sbay3} width="90px"/> */}
  
    <h5 class="card-title">S-Bay</h5>
  
    {/* <p class="card-text">A software buying and selling site along with customization of software products as well as new productrequest from customers .</p> */}
   </div>
</div>
</a>


  <div class="row">
    <div class=" col-lg-4 col-md-4 col-sm-12">
    <a href="https://muddabirchohan.github.io/htmlcss/"> 
    <div class="card div_hover">

  <div class="card-body">
  <img src={carapp} width="300px"/>
    <h5 class="card-title">Car WebApp</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
   </div>
</div>
</a>
</div>


    <div class="col-lg-4 col-md-4 col-sm-12">
    <a href="https://muddabirchohan.github.io/vanillajsItemlist/itemlist.html"> 
    <div class="card div_hover">
  <div class="card-body">
  <img src={itemlist} width="300px" height="200px" />

    <h5 class="card-title"> Item List</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
   
  </div>
</div>    
</a>



</div>
    <div class="col col-lg-4 col-md-4 col-sm-12">
    <a href="https://muddabirchohan.github.io/vanillajsGeoCode/geocode.html"> 
    <div class="card div_hover">

  <div class="card-body">
  <img src={geocode} width="300px" height="200px" />

    <h5 class="card-title">Geo Code </h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>   
  </a>



 </div>
  </div>




  {/* <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-12">
    <a href="https://muddabirchohan.github.io/htmlcss/"> 

    <div class="card div_hover">

  <div class="card-body">
    <h5 class="card-title"> Web Scrapper </h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</a>
    </div>
    
    
    <div class=" col-lg-4 col-md-4 col-sm-12">
    <a href="https://muddabirchohan.github.io/vanillajsItemlist/itemlist.html"> 
    <div class="card div_hover">
  <div class="card-body">
    <h5 class="card-title">Node app</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>  
</a>
  </div>



    <div class=" col-lg-4 col-md-4 col-sm-12">
    <a href="https://muddabirchohan.github.io/vanillajsGeoCode/geocode.html"> 
    <div class="card div_hover">
  <div class="card-body">
    <h5 class="card-title">Chat app</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>   
</a>
 </div>
 
  </div>
 */}


</div>
            </div>
        );
    }
}

export default Projects;