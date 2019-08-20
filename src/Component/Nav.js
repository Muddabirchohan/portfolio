import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'



class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Muddabir Chohan</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">

 
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <AnchorLink class="nav-item nav-link" href="#projects"> Projects </AnchorLink>
      <AnchorLink class="nav-item nav-link" href="#about">About </AnchorLink>
      <AnchorLink class="nav-item nav-link" href="#skills">Skills </AnchorLink>
      <AnchorLink  class="nav-item nav-link" href="#contacts">Contact</AnchorLink >
    


    </div>
  </div>
</nav>
            </div>
        );
    }
}

export default Nav;