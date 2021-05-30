import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Help extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Row className="help-page mt-3">
        <Col sm={{ size: 6, offset: 3 }}>
          <h5>Help</h5>
          <br />
          <h3>How to use this app</h3>
          <br />

          <p>
            1. Search for a show or movie that you want to watch sometime in the
            future (only full valid titles will be displayed, so be 100%
            accurate in your serach).
          </p>
          <p>2. Click the (+) button to add your search to your list below.</p>
          <p>
            3. Select either the compacted or extended view to see varying
            amounts of information about your saved shows/movies.
          </p>
        </Col>
      </Row>
    );
  }
}

export default Help;
