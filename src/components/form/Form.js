import React, { Component } from 'react';
import { TextInput, Textarea, Button, Icon } from 'react-materialize';
import {Container, Row, Col} from 'react-bootstrap';
import {AiOutlineCaretRight} from "react-icons/ai";
import {Slide} from "react-awesome-reveal";


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
            <div className="sectionStart">
              <Slide direction="bottom">
                <div className="form-bg">
                  <Container>
                    <Row className="drop">
                      <Col className="col-10">
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
                      <Col className="col-6">
                        <TextInput
                        id="TextInput-4"
                        label="Name"
                        />
                      </Col>
                      <Col className="col-6">
                        <TextInput
                        email
                        id="TextInput-4"
                        label="Email"
                        validate
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Textarea
                        id="Textarea-12"
                        placeholder="Message"
                        />
                      </Col>
                      </Row>
                      <Row>
                      <Col>
                      <Button
                      node="button"
                      type="submit"
                      waves="purple"
                      className="color"
                      >
                      Submit
                      <Icon right>
                      send
                      </Icon>
                      </Button>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Slide>
            </div>
            );
            }
}

export default Contact;
