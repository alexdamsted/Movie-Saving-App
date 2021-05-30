import React from "react";
import { Row, Col } from "reactstrap";
import Love_Button from "./Love_Button.js";
import Remove_Item_Button from "./Remove_Item_Button.js";

const Compacted_Search_Results_List_Data = (props) => {
  return (
    <div className="compacted-search-results">
      <Row>
        <Col>
          <h5>
            {props.data.title}
            <Love_Button
              data={props.data}
              addToLoveCarousel={props.addToLoveCarousel}
            />
          </h5>
          <b>Year:</b> {props.data.year}
          <br />
          <b>Runtime:</b> {props.data.runtime}
          <br />
          <b>IMDB Rating:</b> {props.data.rating}
          <br />
          <hr />
          <Remove_Item_Button data={props.data} removeItem={props.removeItem} />
        </Col>
      </Row>
    </div>
  );
};

export default Compacted_Search_Results_List_Data;
