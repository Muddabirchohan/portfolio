import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Row,Col,Container} from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div className="contact">

<Container>
<h5> Contact Me </h5>
  <Row  className="contact-me"> 
  
    <Col>  <FormControl >
        <InputLabel htmlFor="input-with-icon-adornment">Full Name</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    </Col>
    <Col> 
    <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="city"
     />
    </Col>
  </Row>
  <Row  className="contact-me">
  <Col>  <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Email </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    </Col>
    <Col> 
    <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Contact"
      
      />
    </Col>
  </Row>
<Row> 
  <div className="description"> 
  <TextField
        id="filled-multiline-static"
        label="Description"
        multiline
        rows="3"
        width="300px"
        className={classes.textField}
        margin="normal"
      />
         </div>
      </Row>
   
      <button type="button" class="btn btn-primary"> Submit</button> 

</Container>



     

    </div>
  );
}