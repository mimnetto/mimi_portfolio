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
  FaSass,
  FaWordpress,
  FaUniversalAccess
} from 'react-icons/fa';
import { DiBootstrap} from 'react-icons/di';
import {SiAdobephotoshop, SiPostgresql, SiMongodb, SiAdobeindesign, SiAdobepremiere, SiAdobecreativecloud, SiJavascript} from 'react-icons/si';
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
            Skills, Tools & Platforms! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h1>
        </div>
        <Container fluid="fluid">
          <div className="Skill-Icons">
            <Row >
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}>
                <FaReact size={38}/>
                <p className="Skill-Name">react</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}>
                <FaHtml5 size={38}/>
                <p className="Skill-Name">HTML</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}>
                <FaCss3Alt size={38}/>
                <p className="Skill-Name">css</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}>
                <FaNodeJs size={38}/>
                <p className="Skill-Name">Javascript</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}>
                <FaAtom size={38}/>
                <p className="Skill-Name">Atom</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}><FaNpm size={38}/>
                <p className="Skill-Name">&nbsp;</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}><SiJavascript/>
                <p className="Skill-Name">JavaScript</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}><FaPhp size={38}/>
                <p className="Skill-Name">&nbsp;</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}><FaPython size={38}/>
                <p className="Skill-Name">python</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}><SiMongodb/>
                <p className="Skill-Name">MongoDB</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}><SiPostgresql/>
                <p className="Skill-Name">PostgreSQL</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}><FaGit size={38}/>
                <p className="Skill-Name">&nbsp;</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}><FaSass size={38}/>
                <p className="Skill-Name">&nbsp;</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}><DiBootstrap size={38}/>
                <p className="Skill-Name">Bootstrap</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}><FaWordpress size={38}/>
                <p className="Skill-Name">Wordpress</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}><FaUniversalAccess size={38}/>
                <p className="Skill-Name">Accessibility</p>
              </Col>
            </Row>
            <Row>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}>
                <SiAdobecreativecloud size={38}/>
                <p className="Skill-Name">Adobe CC</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}>
                <SiAdobephotoshop size={30}/>
                <p className="Skill-Name">Photoshop</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}>
                <SiAdobeindesign size={30}/>
                <p className="Skill-Name">indesign</p>
              </Col>
              <Col className="Pad-Icons" xs={3} sm={3} md={3} lg={2} xl={2}>
                <SiAdobepremiere size={30}/>
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
