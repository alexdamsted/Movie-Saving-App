import React, { Component } from "react";
import Search from "./Search";
import Compacted_Extended_Links from "./Compacted_Extended_Links";
import The_Carousel from "./The_Carousel";
import Compacted_Search_Results_List from "./Compacted_Search_Results_List";

export class Compacted extends Component {
  render() {
    return (
      <>
        <Search
          handleSearchBarOnChange={this.props.handleSearchBarOnChange}
          handleSearchBarButton={this.props.handleSearchBarButton}
        />
        <Compacted_Extended_Links />
        <The_Carousel
          loveCarousel={this.props.loveCarousel}
          data={this.props.data}
          removeLoveItem={this.props.removeLoveItem}
          loading={this.props.loading}
        />
        <Compacted_Search_Results_List
          data={this.props.data}
          removeItem={this.props.removeItem}
          addToLoveCarousel={this.props.addToLoveCarousel}
          loading={this.props.loading}
        />
      </>
    );
  }
}

export default Compacted;
