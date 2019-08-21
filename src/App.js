import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Cover from './Component/Cover';
import Skils from './Component/Skils';
import Projects from './Component/Projects';
// import Contact from './Component/Contact';
import ContactMe from './Component/ContactMe';
import About from './Component/About';
import Contact from './Component/Contactus';
import top from './assets/top.png';
import ReactDOM from 'react-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'


let lastScrollY = 0;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            offset: 0,
            show: true
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleScroll);

        var rect = ReactDOM.findDOMNode(this)
            .getBoundingClientRect();
        this.setState({
            offset: rect
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    handleScroll = () => {
        lastScrollY = window.scrollY;
        console.log("scroll",lastScrollY)
        if(lastScrollY > this.state.height){
            let x= document.getElementById("btn");
            x.style.display= 'inline';
        }
        else{
            let x= document.getElementById("btn");
            x.style.display= 'none';
        }
    }

  render(){
    return (
      <div className="App">
        <Cover id="top"/>
        <Projects/>
        <About/>
        <Skils/>
        <Contact/>
  
        <div className="css3-notification">
        <AnchorLink class="nav-item nav-link" href="#projects"> 
                    <img className="topbutton" id="btn" src={top} width="50px"/>
        </AnchorLink>
                </div>
        {/* <ContactMe/> */}
        {/* <Contact/> */}
      </div>
    );
  }
  }

export default App;
