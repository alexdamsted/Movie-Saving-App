import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import Loader from "react-loader-spinner";
import Compacted_Search_Results_List_Data from "./Compacted_Search_Results_List_Data.js";

class Compacted_Search_Results_List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading) {
      return (
        <Row className="results-row">
          <Col sm={{ size: 4, offset: 4 }}>
            <div className="loader">
              <Loader
                type="ThreeDots"
                color="white"
                height={80}
                width={80}
                timeout={3000}
              />
            </div>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row className="results-row">
          <Col sm={{ size: 4, offset: 4 }}>
            {this.props.data.map((data) => (
              <div>
                <Compacted_Search_Results_List_Data
                  key={data.imdbID}
                  data={data}
                  removeItem={this.props.removeItem}
                  addToLoveCarousel={this.props.addToLoveCarousel}
                />
              </div>
            ))}
          </Col>
        </Row>
      );
    }
  }
}

export default Compacted_Search_Results_List;
