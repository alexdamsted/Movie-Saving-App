import React, { Component } from "react";
import { Button } from "reactstrap";

class Love_Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={() =>
          this.props.addToLoveCarousel(
            this.props.data.title,
            this.props.data.poster
          )
        }
        type="button"
        class="btn btn-link love-append"
      >
        <i class="fa fa-heart fa-lg"></i>
      </button>
    );
  }
}

export default Love_Button;
