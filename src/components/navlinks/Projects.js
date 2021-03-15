import React from 'react';
import {Slide} from "react-awesome-reveal";
import {Card, Icon, CardTitle} from 'react-materialize';
import {Container, Row, Col} from 'react-bootstrap';
import {AiOutlineCaretRight} from "react-icons/ai";
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";
import p01 from './img/p01.jpg';
import p02 from './img/p02.jpg';
import p03 from './img/p03.jpg';
import p04 from './img/p04.jpg';


class Projects extends React.Component {
  render() {
    return (<div className="sectionStart">
      <Slide direction="right">
        <div>
          <p className="Icon">
            <AiOutlineCaretRight/>
          </p>
          <h1 className="headp">
            Projects &nbsp;&nbsp;&nbsp;&nbsp;
          </h1>
        </div>
      <div>
        <Container>
          <Row>
            <Col className="col-6">
              <Card actions=
                {
                  [
                    <a className="Project-Link-Text" key="1" href="https://mimnetto.github.io/" target="_blank" rel="noreferrer">Link <FaExternalLinkAlt/></a>
                  ]
                }
                closeIcon={<Icon> close</Icon>}
                header={<CardTitle image = {p01} > Animal Crossing Villager App</CardTitle>}
                revealIcon={<Icon> more_vert</Icon>}>
                <p className="Card-About">In this project I used AJAX to make a request to an external Animal Crossing data source.</p>
                  <a className="Git-link"  href="https://github.com/mimnetto/mimnetto.github.io" target="_blank" rel="noreferrer"> <FaGithub/></a>
            </Card>
            </Col>
            <Col className="col-6">
              <Card actions=
                {
                  [
                    <a className="Project-Link-Text" key="2" href="https://ifatale.herokuapp.com/" target="_blank" rel="noreferrer">Link <FaExternalLinkAlt/></a>
                  ]
                }
                closeIcon={<Icon> close</Icon>}
                header={<CardTitle image = {p02} >iFatale: Postive Posts </CardTitle>}
                revealIcon={<Icon> more_vert</Icon>}>
                <p className="Card-About">This was a full CRUD MERN Stack application I made with two other female developers.</p>
                  <a className="Git-link"  href="https://github.com/mimnetto/code-fatale" target="_blank" rel="noreferrer"> <FaGithub/></a>
            </Card>
            </Col>
            <Col className="col-6">
              <Card actions=
                {
                  [
                    <a className="Project-Link-Text" key="3" href="https://jobtrack-app.herokuapp.com/" target="_blank" rel="noreferrer">Link <FaExternalLinkAlt/></a>
                  ]
                }
                closeIcon={<Icon> close</Icon>}
                header={<CardTitle image = {p03} > jobtracker</CardTitle>}
                revealIcon={<Icon> more_vert</Icon>}>
                <p className="Card-About">An collaborative full CRUD application developed using PHP back-end and React front-end. Made for tracking jobs.</p>
                  <a className="Git-link"  href="https://github.com/caroleatierney/jobtracker" target="_blank" rel="noreferrer"> <FaGithub/></a>
          </Card>
            </Col>
            <Col className="col-6">
              <Card actions=
                {
                  [
                    <a className="Project-Link-Text" key="4" href="https://colleen-blake-wedding.herokuapp.com/" target="_blank" rel="noreferrer">Link <FaExternalLinkAlt/></a>
                  ]
                }
                closeIcon={<Icon> close</Icon>}
                header={<CardTitle image = {p04} > Colleen ♥ Blake </CardTitle>}
                revealIcon={<Icon> more_vert</Icon>}>
                <p className="Card-About">Final project for General Assembly SEIR 810 Moss. Full MERN stack CRUD application with Create React App front end.</p>
                <a className="Git-link"  href="https://github.com/mimnetto/guestbook-client" target="_blank" rel="noreferrer"> <FaGithub/></a>
            </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Slide>
    </div>);
  }
}

export default Projects
