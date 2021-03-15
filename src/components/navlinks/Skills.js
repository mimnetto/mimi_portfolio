import React from 'react';
import {Slide} from "react-awesome-reveal";
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
    return (<div className="sectionStart">
      <Slide direction="left">
        <div className="skillL">
          <p className="Icon">
            <AiOutlineCaretRight/>
          </p>
          <h1 className="head">
            Skills & Tools! &nbsp;&nbsp;&nbsp;&nbsp;
          </h1>
        </div>
        <Container fluid="fluid">
          <div className="Skill-Icons">
            <Row >
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
              <Col xs={2}><FaNpm size={38}/>
                <p className="Skill-Name">&nbsp;</p>
              </Col>
              <Col xs={2}><FaPhp size={38}/>
                <p className="Skill-Name">&nbsp;</p>
              </Col>
              <Col xs={2}><FaPython size={38}/>
                <p className="Skill-Name">python</p>
              </Col>
              <Col xs={2}><FaGit size={38}/>
                <p className="Skill-Name">&nbsp;</p>
              </Col>
              <Col xs={2}><FaSass size={38}/>
                <p className="Skill-Name">&nbsp;</p>
              </Col>
              <Col xs={2}><SiJavascript/>
                <p className="Skill-Name">JavaScript</p>
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <SiAdobecreativecloud/>
                <p className="Skill-Name">Adobe CC</p>
              </Col>
              <Col xs={2}>
                <DiPhotoshop size={38}/>
                <p className="Skill-Name">Photoshop</p>
              </Col>
              <Col xs={2}>
                <SiAdobeindesign/>
                <p className="Skill-Name">indesign</p>
              </Col>
              <Col xs={2}>
                <SiAdobepremiere/>
                <p className="Skill-Name">Premiere</p>
              </Col>
            </Row>
          </div>
        </Container>
      </Slide>
    </div>);
  }
}

export default Skills
