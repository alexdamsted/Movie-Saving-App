import React, { Component } from "react";
import { ListGroup, ListGroupItem, Collapse } from "reactstrap";

class Search_Results_List_Collapse_Data extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Collapse isOpen={this.props.isOpen}>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <u>Starring:</u> {this.props.data.cast}
          </ListGroupItem>
          <ListGroupItem>
            <u>Directed by:</u> {this.props.data.director}
          </ListGroupItem>
          <ListGroupItem>
            <u>Runtime:</u> {this.props.data.runtime}
          </ListGroupItem>
          <ListGroupItem>
            <u>IMDB Rating:</u> {this.props.data.rating}
          </ListGroupItem>
        </ListGroup>
      </Collapse>
    );
  }
}

export default Search_Results_List_Collapse_Data;
