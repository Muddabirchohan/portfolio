import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Row,Col,Container} from 'react-bootstrap';

export default class InputWithIcon extends Component {

  constructor(){
    super();
    this.state= {
      name: '',
      email: '',
      descriprtion: '',
      city: ''
    }
    this.submitForm = this.submitForm.bind(this);
  }
  
submitForm(){
  window.open('mailto:muddabir22@gmail.com?subject=subject&body=body');

  alert('hello')
}

getname(e){
  this.setState({name: e.target.value})
}


getEmail(e){
  this.setState({email: e.target.value})
}




getCity(e){
  this.setState({city: e.target.value})
}



getDescription(e){
  this.setState({descriprtion: e.target.value})
}




render(){
  return (
    <div className="contact" id="contacts">

<Container>
<h5> Contact Me </h5>
  <Row  className="contact-me"> 
  <div class=" col-lg-6 col-md-4 col-sm-12">

  <FormControl>
        <InputLabel htmlFor="input-with-icon-adornment">Full Name</InputLabel>
        <Input
        onChange={this.getname}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>

    <div class=" col-lg-6 col-md-4 col-sm-12">
    <TextField
        onChange={this.getCity}
        id="input-with-icon-textfield"
        label="city"
     />
    </div>
  </Row>
  <Row  className="contact-me">
  <div class=" col-lg-6 col-md-4 col-sm-12">

   <FormControl >
        <InputLabel htmlFor="input-with-icon-adornment">Email </InputLabel>
        <Input
        onChange={this.getEmail}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
    <div class=" col-lg-6 col-md-4 col-sm-12">
    <TextField
        
        id="input-with-icon-textfield"
        label="Contact"
      
      />
    </div>
  </Row>
{/* <Row> 
  <div className="description"> 
  <TextField
        onChange={this.getDescription}
        id="filled-multiline-static"
        label="Description"
        multiline
        rows="3"
        width="300px"
        margin="normal"
      />
         </div>
      </Row> */}
   
      <button type="btn" class="btn btn-primary" onClick={this.submitForm}> Submit</button> 

</Container>

    </div>
  );
}

}