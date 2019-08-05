import React, { Component } from 'react';
import './../App.css';
import Nav from './Nav';

class Cover extends Component {

constructor(){
    super();
    this.state = {
        description: '',
        show: false
    }
}



getDescription(){
    let description = `working as a Mern Stack Developer from past 3 years and worked on several projects with React Front end and NodeJs back end
    working as a Mern Stack Developer from past 3 years and worked on several projects with React Front end and NodeJs back end`;   
 this.setState({
      description, 
      show: !this.state.show 
    })   
}

    render() {
        return (
            <div>
                
<div className="bg">
<Nav/>
</div>

<div className="cover-text">  
    <h3> Hi! This is MERN STACK Developer Muddabir Chohan </h3>
    
        {!this.state.show && <button type="button" class="btn btn-primary" onClick={this.getDescription.bind(this)}> View More</button> }
<p class="w3-animate-fading"> {this.state.show && this.state.description} </p>
</div>

            </div>
        );
    }
}

export default Cover;