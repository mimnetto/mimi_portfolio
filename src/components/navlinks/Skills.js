import React from 'react';
import Fade from 'react-reveal/Fade';
import {FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaAtom, FaNpm, FaPhp, FaPython, FaGit, FaSass} from 'react-icons/fa';
import {DiPhotoshop} from 'react-icons/di';
import {SiAdobeindesign, SiAdobepremiere, SiAdobecreativecloud,SiJavascript} from 'react-icons/si';
import {AiOutlineCaretRight} from "react-icons/ai";
import {Container, Row, Col} from 'react-bootstrap';

class Skills extends React.Component {
  render() {
    return (
      <div className="left">
          <Fade right="right">
            <div className="skillL">
              <p className="Icon">
                <AiOutlineCaretRight/>
              </p>
              <h1 className="head">
              Skills & Tools! &nbsp;&nbsp;&nbsp;&nbsp;
            </h1>
            </div>
          </Fade>
          <Container fluid>
          <Fade left="left">
            <div className="Skill-Icons">
              <Row className="justify-content-left">
                <Col xs={2}>
                  <FaReact size={38}/>
                  <p className="Skill-Name">react</p>
                </Col>
                <Col xs={2}>
                  <FaHtml5 size={38}/>
                  <p className="Skill-Name">HTML</p>
                </Col>
                <Col xs={2}>
                  <FaCss3Alt size={38}/>
                  <p className="Skill-Name">css</p>
                </Col>
                <Col xs={2}>
                  <FaNodeJs size={38}/>
                  <p className="Skill-Name">Javascript</p>
                </Col>
                <Col xs={2}>
                  <FaAtom size={38}/>
                  <p className="Skill-Name">Atom</p>
                </Col>
                <Col xs={2}><FaNpm size={38}/><p className="Skill-Name">&nbsp;</p></Col>
                <Col xs={2}><FaPhp size={38}/><p className="Skill-Name">&nbsp;</p></Col>
                <Col xs={2}><FaPython size={38}/><p className="Skill-Name">python</p></Col>
                <Col xs={2}><FaGit size={38}/><p className="Skill-Name">&nbsp;</p></Col>
                <Col xs={2}><FaSass size={38}/>
                <p className="Skill-Name">&nbsp;</p>
              </Col>
                <Col xs={2}><SiJavascript size={31}/><p className="Skill-Name">JavaScript</p>
              </Col>
            </Row>
              <Row>
                <Col xs={2}>
                  <SiAdobecreativecloud size={31}/><
                    p className="Skill-Name">Adobe CC</p>
                </Col>
                  <Col xs={2}>
                    <DiPhotoshop size={38}/>
                    <p className="Skill-Name">Photoshop</p>
                  </Col>
                  <Col xs={2}>
                    <SiAdobeindesign size={31}/>
                    <p className="Skill-Name">indesign</p>
                  </Col>
                  <Col xs={2}>
                    <SiAdobepremiere size={31}/>
                    <p className="Skill-Name">Premiere</p>
                  </Col>
              </Row>
            </div>
              </Fade>
            </Container>
    </div>);
  }
}

export default Skills
