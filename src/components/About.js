import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Row className="about-page mt-3">
        <Col sm={{ size: 6, offset: 3 }}>
          <h5>About</h5>
          <br />
          <p>
            The <b>Movie Saving App</b> is a project made by Alex from{" "}
            <a href="www.ajda.nz">ajda.nz</a>
          </p>
          <p>
            It's built with React js, Reactstrap/Bootstrap, and the HTML Web
            Storage API. It also makes use of React Router and{" "}
            <a href="https://github.com/sag1v/react-elastic-carousel#readme">
              React Elastic Carousel
            </a>
            .
          </p>
          <p>
            {" "}
            The project integrates one RESTful API. That is, a free version of{" "}
            an API that populates itself via web scraping public IMDb data.
          </p>
          <br />
          <h5>Current Issues</h5>
          <br />
          <p>
            1. I'd like to have enabled users to dynamically get results back as
            they search for a movie/show. However, to my knowledge even paid
            movie/show API's don't provide a way to do this. And so, this app
            can only allow querying for one data element at a time.
          </p>
          <p>
            2. Users have to be 100% specific with their search due to current
            issue 1.
          </p>
        </Col>
      </Row>
    );
  }
}

export default About;
