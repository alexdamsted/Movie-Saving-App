import React, { Component } from "react";
import { Row, Col } from "reactstrap";

export class Compacted_Extended_Links extends Component {
  render() {
    return (
      <Row className="text-center mt-2 mb-5">
        <Col className="view-text" sm={{ size: 12 }}>
          <a className="compacted-link" href="/compacted">
            Compacted
          </a>
          <span> or </span>
          <a className="extended-link" href="/extended">
            Extended
          </a>
        </Col>
      </Row>
    );
  }
}

export default Compacted_Extended_Links;
