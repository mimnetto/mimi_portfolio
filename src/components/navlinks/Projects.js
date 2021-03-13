import React from 'react';
import { Slide } from "react-awesome-reveal";
import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import {Container} from 'react-bootstrap';
import {AiOutlineCaretRight} from "react-icons/ai";


class Projects extends React.Component {
  render() {
    return (
      <div className="sectionStart">
          <Slide direction="right">
            <div>
              <p className="Icon">
                <AiOutlineCaretRight/>
              </p>
              <h1 className="headp">
              Projects &nbsp;&nbsp;&nbsp;&nbsp;
            </h1>
            </div>
            </Slide>
            <div>
              <Container fluid>
              <Row>
                <Col
                  m={6}
                  s={2}
                  xl={12}
                >
                  <Card
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                    revealIcon={<Icon>more_vert</Icon>}
                    title="Card Title"
                  >
                    <p>
                      <a href="#">
                        This is a link
                      </a>
                    </p>
                  </Card>
                </Col>
                <Col xs={12}></Col>
                <Col xs={12}></Col>
                <Col xs={12}></Col>
              </Row>
              </Container>
            </div>

    </div>);
  }
}

export default Projects
