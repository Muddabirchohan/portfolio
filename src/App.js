import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cover from './Component/Cover';
import Skils from './Component/Skils';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import ContactMe from './Component/ContactMe';


function App() {
  return (
    <div className="App">
      <Cover/>
      <Projects/>
      <Skils/>
      {/* <ContactMe/> */}
      {/* <Contact/> */}
    </div>
  );
}

export default App;
