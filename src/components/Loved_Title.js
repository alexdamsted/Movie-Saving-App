import React, { Component } from "react";
import { Row, Col } from "reactstrap";

export class Loved_Title extends Component {
  render() {
    return (
      <Row className="text-center mt-2">
        <Col>
          <h5 class="loved-title">Shows you loved</h5>
        </Col>
      </Row>
    );
  }
}

export default Loved_Title;
