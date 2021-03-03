import React, { Component } from 'react'
import { HashRouter} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/navlinks/Profile";
import './App.css';
import GlobalStyle from './styles/Global';
import Fade from 'react-reveal/Fade';
import { FaGithub } from 'react-icons/fa';


class App extends Component {
    state = {
      navbarOpen: false
    }
    handleNavbar = () => {
      this.setState({ navbarOpen: !this.state.navbarOpen });
    }
    render() {
      return (
      <HashRouter basename='/'>
      <div className="App">
      <>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
      </>
    <main className="App-main">
      <Fade left>
          <p>
            Coming Soon!
          </p>
      </Fade>
      <Fade right>
          <p>
            Mimi Netto's 2021 Portfolio
          </p>
      </Fade>
          <br/>
          <Fade bottom>
          <a
            className="App-link"
            href="https://mimi-resume.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View 2020 Portfolio
          </a>
          <a
            className="App-link"
            href="https://github.com/mimnetto/mimi_portfolio"
            target="_blank"
            rel="noopener noreferrer"
            >
           <FaGithub />
            </a>

        </Fade>
      </main>
      </div>
      </HashRouter>
    );
  }
}


export default App
