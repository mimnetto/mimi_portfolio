import React from 'react';
import {Slide} from "react-awesome-reveal";
import contact from './contact.svg';
import {AiOutlineCaretRight} from "react-icons/ai";
import {Container, Row, Col} from 'react-bootstrap';
import {FaGithub, FaLinkedin, FaAdobe, FaRegFilePdf} from 'react-icons/fa';
import Pdf from './Resume2021.pdf';


class Profile extends React.Component {
  render() {
    return (
    <div className="Top-Start">
      <Slide direction="right">
        <Container fluid="fluid">
          <Row className="drop">
            <Col className="col-10">
              <div>
                <p className="Icon">
                  <AiOutlineCaretRight/>
                </p>
                <h1 className="headp">
                  Profile! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </h1>
              </div>
              <div>
                <p className="Profile-Info">
                  Front-End Web and Software Developer with hands-on experience in developing and designing user interfaces and applications while incorporating a wide range of technologies and programming languages. Seeking the opportunity to utilize my technical skills to discover development solutions and strategies through innovative methods and technologies.
                </p>
              </div>
            </Col>
            <Col className="col-2 bubble">
              <div className="svg-con">
                <img src={contact} className="App-logo" alt="contact"/>
                <p className="bub">Hello World!</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div>
          <Container fluid className="profile-li">
            <Row className="Icons-Pr">
              <Col className="Pad-Icons" xs={6} sm={6} md={2} lg={1} xl={1}>
                <a className="Icons-link" href="https://github.com/mimnetto/mimi_portfolio" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={38}/>
                </a>
              </Col>
              <Col  className="Pad-Icons" xs={6} sm={6} md={2} lg={1} xl={1}>
                <a className="Icons-link" href="https://www.linkedin.com/in/michelle-netto/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={38}/>
                </a>
              </Col>
              <Col className="Pad-Icons" xs={6} sm={6} md={2} lg={1} xl={1}>
                <a className="Icons-link" href="https://miminetto.myportfolio.com/" target="_blank" rel="noopener noreferrer">
                  <FaAdobe size={38}/>
                </a>
              </Col>
              <Col className="Pad-Icons" xs={6} sm={6} md={2} lg={1} xl={1}>
                <a className="Icons-link" href={Pdf} target="_blank" rel="noopener noreferrer">
                  <FaRegFilePdf size={38}/>
                </a>
                <a className="Icons-Link-Text" href={Pdf} target="_blank" rel="noopener noreferrer">
                  <p className="resume">Resume</p>
                </a>
              </Col>
              <Col className="col-6">
                &nbsp;
              </Col>
            </Row>
          </Container>
        </div>
      </Slide>
    </div>);
  }
}

export default Profile
