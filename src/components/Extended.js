import React, { Component } from "react";
import Search from "./Search";
import Compacted_Extended_Links from "./Compacted_Extended_Links";
import Search_Results_List from "./Search_Results_List";

class Extended extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Search
          handleSearchBarOnChange={this.props.handleSearchBarOnChange}
          handleSearchBarButton={this.props.handleSearchBarButton}
        />
        <Compacted_Extended_Links />
        <Search_Results_List
          data={this.props.data}
          removeItem={this.props.removeItem}
          addToLoveCarousel={this.props.addToLoveCarousel}
          loading={this.props.loading}
        />
      </>
    );
  }
}

export default Extended;
