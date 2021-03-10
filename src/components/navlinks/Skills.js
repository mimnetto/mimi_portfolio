import React from 'react';
import Fade from 'react-reveal/Fade';
import {Tooltip, IconButton} from '@material-ui/core';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaAtom,
  FaNpm,
  FaPhp,
  FaPython,
  FaGit,
  FaSass
} from 'react-icons/fa';
import {DiPhotoshop} from 'react-icons/di';
import {SiAdobeindesign, SiAdobepremiere, SiAdobecreativecloud, SiJavascript} from 'react-icons/si';
import {AiOutlineCaretRight} from "react-icons/ai";
import {Container, Row, Col} from 'react-bootstrap';

class Skills extends React.Component {
  render() {
    return (<div className="left">
      <Fade right="right">
        <div className="skillL">
          <p className="Icon">
            <AiOutlineCaretRight/>
          </p>
          <h1 className="head">
            Skills & Tools!
          </h1>
        </div>
      </Fade>
      <Container>
        <Fade left="left">
          <div className="Skill-Icons">
            <Row>
              <Col>
                <Tooltip title="React">
                  <IconButton aria-label="React">
                    <FaReact size={38}/>
                  </IconButton>
                </Tooltip>
              </Col>
              <Col>
                <Tooltip title="React">
                  <IconButton aria-label="React">
                <FaHtml5 size={38}/>
                </IconButton>
              </Tooltip>
            </Col>
              <Col>
                <Tooltip title="React">
                  <IconButton aria-label="React">
                <FaCss3Alt size={38}/>
                </IconButton>
              </Tooltip>
              </Col>
              <Col>
                <Tooltip title="React">
                  <IconButton aria-label="React">
                <FaNodeJs size={38}/>
              </IconButton>
            </Tooltip></Col>
              <Col>
                <Tooltip title="React">
                  <IconButton aria-label="React">
                <FaAtom size={38}/>
              </IconButton>
            </Tooltip></Col>
            </Row>
            <Row>
              <Col><DiPhotoshop size={38}/></Col>
              <Col><SiAdobeindesign size={31}/></Col>
              <Col><FaNpm size={38}/></Col>
              <Col><FaPhp size={38}/></Col>
              <Col><FaPython size={38}/></Col>
            </Row>
            <Row>
              <Col><FaGit size={38}/></Col>
              <Col><FaSass size={38}/></Col>
              <Col><SiAdobepremiere size={31}/></Col>
              <Col><SiAdobecreativecloud size={31}/></Col>
              <Col><SiJavascript size={31}/></Col>
            </Row>
          </div>
        </Fade>
      </Container>
    </div>);
  }
}

export default Skills
