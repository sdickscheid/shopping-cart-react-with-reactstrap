import React from 'react';
import '../App.css';
import {
  Navbar,
  NavbarBrand,
  Container,
  Row,
  Col } from 'reactstrap';


export default class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <Navbar color="info" light>
          <Container fluid>
            <Row>
              <Col>
                <h3>You Shop, We Ship...</h3>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <Navbar color="info" light>
          <Container fluid>
            <Row>
              <Col>
                <h5>&copy; {this.props.copyright}</h5>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}
