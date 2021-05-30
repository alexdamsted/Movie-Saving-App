import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Row className="search-row">
        <Col sm={{ size: 3, offset: 2 }}>
          <div className="nav-brand">
            <h5>Save For Later App</h5>
          </div>
        </Col>
        <Col sm={{ size: 3, offset: 2 }}>
          <div className="nav-text">
            <a href="/saved">Saved</a>
            <a href="/about">About</a>
            <a href="/help">Help</a>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Navbar;
