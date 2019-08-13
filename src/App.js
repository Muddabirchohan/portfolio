import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cover from './Component/Cover';
import Skils from './Component/Skils';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import ContactMe from './Component/ContactMe';
import About from './Component/About';
import InputWithIcon from './Component/Contactus';


function App() {
  return (
    <div className="App">
      <Cover/>
      <Projects/>
      <Skils/>
      <InputWithIcon/>
      {/* <About/> */}
      {/* <ContactMe/> */}
      {/* <Contact/> */}
    </div>
  );
}

export default App;
