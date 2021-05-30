import React, { Component } from "react";
import { Button } from "reactstrap";

class Remove_Item_Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" class="btn btn-link trash-append">
        <i
          class="fa fa-trash fa-lg"
          onClick={() => this.props.removeItem(this.props.data)}
        ></i>
      </button>
    );
  }
}

export default Remove_Item_Button;
