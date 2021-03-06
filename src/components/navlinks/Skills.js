import React from 'react';
import Fade from 'react-reveal/Fade';
import {FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaAtom, FaNpm, FaPhp, FaPython, FaGit, FaSass} from 'react-icons/fa';
import {DiPhotoshop} from 'react-icons/di';
import {SiAdobeindesign, SiAdobepremiere, SiAdobecreativecloud,SiJavascript} from 'react-icons/si';
import {AiOutlineCaretRight} from "react-icons/ai";
import {Row, Col} from 'react-materialize';

class Skills extends React.Component {
  render() {
    return (
      <div className="drop">
      <Fade right="right">
        <h1>
          <p className="Icon">
            <AiOutlineCaretRight/>
          </p>
          Skills & Tools!
        </h1>
      </Fade>
      <Fade left="left">
        <div className="Skill-Icons">
          <Row>
            <Col>
              <FaReact size={38}/>
            </Col>
            <Col><FaHtml5 size={38}/></Col>
            <Col><FaCss3Alt size={38}/></Col>
            <Col><FaNodeJs size={38}/></Col>
            <Col><FaAtom size={38}/></Col>
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

    </div>);
  }
}

export default Skills
