import React, { Component } from 'react';
import {HashRouter} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/navlinks/Profile";
import Skills from "./components/navlinks/Skills";
import Projects from "./components/navlinks/Projects";
import Footer from "./components/Footer";
import './App.css';
import GlobalStyle from './styles/Global';
import ScrollableAnchor from 'react-scrollable-anchor'


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
      <section id='top'>
      </section>
        <section id='profile'>
          <Profile />
        </section>
        <section id='skills'>
          <Skills/>
        </section>
        <section id='projects'>
          <Projects/>
        </section>
      </main>
      <Footer/>
    </div>
  </HashRouter>);
  }
}

export default App
