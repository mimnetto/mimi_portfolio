import React from 'react';
import {Slide} from "react-awesome-reveal";
import {Container, Row, Col} from 'react-bootstrap';
import {AiOutlineCaretRight} from "react-icons/ai";

class ContactForm extends React.Component {
  render() {
    return (
    <div className="sectionStart">
      <Slide direction="left">
        <Container fluid="fluid">
          <Row className="drop">
            <Col className="col-12 contact">
              <div>
                <p className="Icon">
                  <AiOutlineCaretRight/>
                </p>
                <h1 className="headp">
                  Contact! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </h1>
              </div>
          </Col>
        </Row>
        <Row>
            <Col className="col-12 contact">
              <p className="Profile-Info">Contact form coming soon!</p>
              <p className="Profile-Info">In the mean time, please reach out to me on <a className="Project-Link-Text" href="https://www.linkedin.com/in/mimi-netto/" target="_blank" rel="noreferrer"> linkedIn</a>!</p>
            </Col>
          </Row>
        </Container>
      </Slide>
    </div>);
  }
}

export default ContactForm;
