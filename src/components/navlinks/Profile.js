import React from 'react';
import Fade from 'react-reveal/Fade';
import contact from './contact.svg';
import {AiOutlineCaretRight} from "react-icons/ai";
import {Row, Col} from 'react-materialize';
import {FaGithub, FaLinkedin, FaAdobe} from 'react-icons/fa';

class Profile extends React.Component {
  render() {
    return (<div>
      <Row className="drop">
        <Col className="col-10">
          <Fade bottom="bottom">
            <p className="Icon">
              <AiOutlineCaretRight/>
            </p>
            <h1 className="headp">
              Profile &nbsp;&nbsp;&nbsp;&nbsp;
            </h1>
          </Fade>
          <Fade left="left">
            <p className="Profile-Info">
              Front-End Web and Software Developer with hands-on experience in developing and designing user interfaces and applications while incorporating a wide range of technologies and programming languages. Seeking the opportunity to utilize my technical skills to discover development solutions and strategies through innovative methods and technologies.
            </p>
          </Fade>
          <Fade left="left">
            <a className="Icons-link" href="https://github.com/mimnetto/mimi_portfolio" target="_blank" rel="noopener noreferrer">
              <FaGithub/>
            </a>
            <a className="Icons-link" href="https://www.linkedin.com/in/michelle-netto/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin/>
            </a>
            <a className="Icons-link" href="https://miminetto.myportfolio.com/" target="_blank" rel="noopener noreferrer">
              <FaAdobe/>
            </a>
          </Fade>
        </Col>
        <Col className="col-2">
          <div className="svg-con">
            <Fade top="top">
              <img src={contact} className="App-logo" alt="contact"/>
              <p className="bub">Contact!</p>
            </Fade>
          </div>
        </Col>
      </Row>
    </div>);
  }
}

export default Profile
