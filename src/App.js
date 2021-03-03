import React, {Component} from 'react'
import {HashRouter} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/navlinks/Profile";
import './App.css';
import GlobalStyle from './styles/Global';
import Fade from 'react-reveal/Fade';
import Shake from 'react-reveal/Shake';
import {FaGithub, FaAdobe} from 'react-icons/fa';

class App extends Component {
  state = {
    navbarOpen: false
  }
  handleNavbar = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    });
  }
  render() {
    return (<HashRouter basename='/'>
      <div className="App">
        <> <Navbar navbarState={this.state.navbarOpen} handleNavbar={this.handleNavbar}/>
        <GlobalStyle/>
      </>
      <main className="App-main">
        <Fade left="left">
          <p>
            Coming Soon!
          </p>
        </Fade>
        <Fade right="right">
          <p>
            Mimi Netto's 2021 Portfolio
          </p>
        </Fade>
        <br/>
        <Fade bottom="bottom">
          <a className="App-link" href="https://mimi-resume.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            View 2020 Portfolio
          </a>
        </Fade>
          <div className="Icons">
            <Shake>
            <a className="Icons-link" href="https://github.com/mimnetto/mimi_portfolio" target="_blank" rel="noopener noreferrer">
              <FaGithub/>
            </a>
            <a className="Icons-link" href="https://miminetto.myportfolio.com/" target="_blank" rel="noopener noreferrer">
              <FaAdobe/>
            </a>
          </Shake>
        </div>
      </main>
    </div>
  </HashRouter>);
  }
}

export default App
