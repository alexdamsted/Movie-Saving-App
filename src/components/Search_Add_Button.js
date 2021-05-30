import React, { Component } from "react";
import { Input } from "reactstrap";

class Search_Add_Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <i
        onClick={this.props.handleSearchBarButton}
        class="fa fa-plus-circle fa-lg add-btn"
      ></i>
    );
  }
}

export default Search_Add_Button;
