import React, { Component } from "react";
import {} from "reactstrap";
import Carousel from "react-elastic-carousel";
import Love_Carousel_Item from "./Love_Carousel_Item";

class Carousel_Component extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Carousel
          className="carousel"
          itemsToShow={6}
          enableAutoPlay
          autoPlaySpeed={4000}
        >
          {this.props.loveCarousel.map((data) => (
            <Love_Carousel_Item
              data={data}
              removeLoveItem={this.props.removeLoveItem}
              loading={this.props.loading}
            />
          ))}
        </Carousel>
      </>
    );
  }
}

export default Carousel_Component;
