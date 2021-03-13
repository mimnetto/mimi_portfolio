import React, {Component} from 'react'
import {HashRouter} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/navlinks/Profile";
import Skills from "./components/navlinks/Skills";
import Projects from "./components/navlinks/Projects";
import Footer from "./components/Footer";
import './App.css';
import GlobalStyle from './styles/Global';


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
          <Profile/>
          <Skills/>
          <Projects/>
      </main>
      <Footer/>
    </div>
  </HashRouter>);
  }
}

export default App
