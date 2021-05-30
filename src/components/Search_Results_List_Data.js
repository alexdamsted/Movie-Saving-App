import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import Switch_Toggle_Data from "./Switch_Toggle_Data.js";
import Search_Results_List_Collapse_Data from "./Search_Results_List_Collapse_Data.js";
import Remove_Item_Button from "./Remove_Item_Button.js";
import Love_Button from "./Love_Button.js";

const Search_Results_List_Data = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [labelText, setLabelText] = useState(
    `More info about ${props.data.title}`
  );

  const toggle = () => {
    setIsOpen(!isOpen);
    isOpen
      ? setLabelText(`More info about ${props.data.title}`)
      : setLabelText(`Less info about ${props.data.title}`);
  };

  return (
    <div>
      <Card className="extended-results-card">
        <CardImg
          top
          width="100%"
          src={props.data.poster}
          alt={props.data.title}
        />
        <CardBody>
          <CardTitle tag="h5">
            {props.data.title}{" "}
            <Love_Button
              data={props.data}
              addToLoveCarousel={props.addToLoveCarousel}
            />
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.data.year}
          </CardSubtitle>
          <CardText>{props.data.plot}</CardText>

          <Switch_Toggle_Data toggle={toggle} labelText={labelText} />
        </CardBody>

        <Search_Results_List_Collapse_Data data={props.data} isOpen={isOpen} />
      </Card>

      <br />
    </div>
  );
};

export default Search_Results_List_Data;
