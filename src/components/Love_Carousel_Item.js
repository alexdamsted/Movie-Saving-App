import React, { Component } from "react";
import { CardImgOverlay, Card, CardImg } from "reactstrap";

import Remove_Love_Item_Button from "./Remove_Love_Item_Button.js";

class Love_Carousel_Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Card className="love-card mt-3">
          <CardImg
            className="love-card-img"
            top
            width="100%"
            src={this.props.data.poster}
            alt={this.props.data.title}
          />
          <CardImgOverlay className="love-card-img-overlay">
            <div className="remove-love-button">
              <Remove_Love_Item_Button
                data={this.props.data}
                removeLoveItem={this.props.removeLoveItem}
              />
            </div>
          </CardImgOverlay>
        </Card>
      </>
    );
  }
}

export default Love_Carousel_Item;
