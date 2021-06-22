import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import Loader from "react-loader-spinner";
import Search_Results_List_Data from "./Search_Results_List_Data.js";

class Search_Results_List extends Component {
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
                <Search_Results_List_Data
                  data={data}
                  removeItem={this.props.removeItem}
                  key={data.imdbID}
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

export default Search_Results_List;
