import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Loved_Title from "./Loved_Title";
import Carousel_Component from "./Carousel_Component";

export class The_Carousel extends Component {
  render() {
    return (
      <Row className="carousel-cards">
        <Col sm={{ size: 12 }}>
          <Loved_Title />
          <Carousel_Component
            loveCarousel={this.props.loveCarousel}
            data={this.props.data}
            removeLoveItem={this.props.removeLoveItem}
            loading={this.props.loading}
          />
        </Col>
      </Row>
    );
  }
}

export default The_Carousel;
