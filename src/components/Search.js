import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Search_Add_Button from "./Search_Add_Button.js";

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="mt-4">
        <Col sm={{ size: 6, offset: 3 }}>
          <form>
            <div class="input-group mb-2 rounded-pill p-1 search-input-group">
              <input
                onChange={this.props.handleSearchBarOnChange}
                type="search"
                placeholder="Search for a movie or show you'd like to
          watch"
                class="form-control border-0 transparent"
              />
              <div class="input-group-append border-0">
                <button type="button" class="btn btn-link btn-append">
                  <Search_Add_Button
                    handleSearchBarButton={this.props.handleSearchBarButton}
                  />
                </button>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    );
  }
}

export default Search;
