import React, { Component } from 'react'
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/navlinks/Profile";
import './App.css';
import GlobalStyle from './styles/Global';

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
        <header className="App-main">
          <p>
            Mimi Netto's 2021 Portfolio
          </p>
          <a
            className="App-link"
            href="https://mimi-resume.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Current Portfolio
          </a>
        <Profile
          />
        </header>
        <Route exact path="/" component={Home} />
      </div>
      </HashRouter>
    );
  }
}

const Home = () => <div><h2>Home</h2></div>

export default App
