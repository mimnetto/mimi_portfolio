import React from 'react';
import Fade from 'react-reveal/Fade';
import {AiOutlineCaretRight} from "react-icons/ai";
import {Row, Col} from 'react-materialize';
import {FaGithub, FaAdobe} from 'react-icons/fa';

class Profile extends React.Component {
  render() {
    return (
     <div>
      <Row className="drop">
        <Col className="col-9">
          <Fade bottom="bottom">
            <h1 className="">
              <p className="Icon">
                <AiOutlineCaretRight/>
              </p>
              Profile
            </h1>
          </Fade>
          <Fade left="left">
            <p className="Profile-Info">
              Front-End Web and Software Developer with hands-on experience in developing and designing user interfaces and applications while incorporating a wide range of technologies and programming languages. Seeking the opportunity to utilize my technical skills to discover development solutions and strategies through innovative methods and technologies.
            </p>
          </Fade>
        </Col>
        <Col className="col-3">
            <Fade bottom="bottom">
              <h1>
                <p className="Icon">
                  <AiOutlineCaretRight/>
                </p>
                Links
              </h1>
            </Fade>
            <Fade left="left">
              <a className="Icons-link" href="https://github.com/mimnetto/mimi_portfolio" target="_blank" rel="noopener noreferrer">
                <FaGithub/>
              </a>
              <a className="Icons-link" href="https://miminetto.myportfolio.com/" target="_blank" rel="noopener noreferrer">
                <FaAdobe/>
              </a>
            </Fade>
        </Col>
      </Row>
    </div>
  );
  }
}

export default Profile
