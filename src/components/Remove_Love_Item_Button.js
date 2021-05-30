import React, { Component } from "react";
import {} from "reactstrap";

class Remove_Love_Item_Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" class="btn btn-link trash-love-append">
        <i
          class="fa fa-trash fa-2x"
          onClick={() => this.props.removeLoveItem(this.props.data)}
        ></i>
      </button>
    );
  }
}

export default Remove_Love_Item_Button;
