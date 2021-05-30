import React, { Component } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Compacted from "./components/Compacted";
import Extended from "./components/Extended";
import About from "./components/About";
import Help from "./components/Help";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchbar: [],
      data: [],
      loveCarousel: [],
      loading: false,
    };
  }

  addToLoveCarousel = (title, poster) => {
    if (!this.checkForDuplicates(title, this.state.loveCarousel)) {
      const loveCarousel = this.state.loveCarousel.concat({
        title: title,
        poster: poster,
      });
      this.setState({ loveCarousel: loveCarousel }, () =>
        localStorage.setItem("loveCarousel", JSON.stringify(loveCarousel))
      );
    } else {
      alert(`You already love this!`);
    }
  };

  removeLoveItem = (item) => {
    const loveCarousel = this.state.loveCarousel.filter(
      (el) => el.title !== item.title
    );

    this.setState({ loveCarousel: loveCarousel }, () => {
      localStorage.setItem("loveCarousel", JSON.stringify(loveCarousel));
    });
  };

  removeItem = (item) => {
    // Create new array out of data state (not directly modified)
    const data = this.state.data.filter((el) => el.title !== item.title);
    // Callback function grants the ability to use the updated data state as soon as it's been updated completely.
    this.setState({ data: data }, () => {
      localStorage.setItem("data", JSON.stringify(data));
    });
  };

  getTitleData = async (id) => {
    // Loading spinner start
    this.setState({ loading: true });
    const resp = await fetch(
      `https://movie-database-imdb-alternative.p.rapidapi.com/?i=${id}&r=json`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e15cdce77emsh649e227f964733cp16a8cejsnd163034cc023",
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        },
      }
    );
    const response = await resp.json();
    // Loading spinner stop
    this.setState({ loading: false });
    return response;
  };

  getTitles = async () => {
    const resp = await fetch(
      `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${this.state.searchbar}&page=1&r=json`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e15cdce77emsh649e227f964733cp16a8cejsnd163034cc023",
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        },
      }
    );
    const response = await resp.json();
    return response;
  };

  checkForDuplicates = (response, stateData) => {
    for (var i = 0; i < stateData.length; i++) {
      if (response === stateData[i].title) {
        return true;
      }
    }
  };

  handleSearchBarOnChange = (e) => {
    this.setState({ searchbar: e.target.value });
  };

  handleSearchBarButton = () => {
    // We want to change the data state to hold movie/show data
    const titles = this.getTitles();

    titles
      .then((response) => {
        // response.Search is the returned array of results from the api
        for (var i = 0; i < response.Search.length; i++) {
          // We want the response.Search element that matches the exact search bar user input
          if (response.Search[i].Title === this.state.searchbar) {
            // We dont want duplicates
            if (
              !this.checkForDuplicates(
                response.Search[i].Title,
                this.state.data
              )
            ) {
              // We want more data based on the imdb id of the particular movie/show
              const titleData = this.getTitleData(response.Search[i].imdbID);
              titleData.then((response) => {
                // Immutably change the data state
                this.setState((prevState) => ({
                  data: prevState.data.concat({
                    title: response.Title,
                    year: response.Year,
                    plot: response.Plot,
                    runtime: response.Runtime,
                    rating: response.imdbRating,
                    cast: response.Actors,
                    director: response.Director,
                    poster: response.Poster,
                    id: response.imdbID,
                  }),
                }));

                // Set local storage of movie/show data
                localStorage.setItem("data", JSON.stringify(this.state.data));
              });
            } else {
              alert(`"${this.state.searchbar}" is already in your list!`);
            }

            // Again, we only want one inserted in case there are 2 of the same titles mathcing the search bar user input
            break;
          }
        }
      })
      .catch((error) => {
        alert(
          `"${this.state.searchbar}" is not a valid movie or show. Try again.`
        );
      });
  };

  componentDidMount() {
    // Retrieve local storage of carousel data and set state with it
    const loveCarousel = JSON.parse(localStorage.getItem("loveCarousel"));
    if (loveCarousel) {
      this.setState({ loveCarousel: loveCarousel });
    }
    // Retrieve local storage of movie/show data and set state with it
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      this.setState({ data: data });
    }
  }

  render() {
    return (
      <Container fluid>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/help" component={Help} />
            <Route exact path={["/", "/saved", "/compacted"]}>
              <Compacted
                handleSearchBarOnChange={this.handleSearchBarOnChange}
                handleSearchBarButton={this.handleSearchBarButton}
                data={this.state.data}
                loveCarousel={this.state.loveCarousel}
                removeLoveItem={this.removeLoveItem}
                removeItem={this.removeItem}
                addToLoveCarousel={this.addToLoveCarousel}
                loading={this.state.loading}
              />
            </Route>
            <Route path="/extended">
              <Extended
                handleSearchBarOnChange={this.handleSearchBarOnChange}
                handleSearchBarButton={this.handleSearchBarButton}
                data={this.state.data}
                removeItem={this.removeItem}
                addToLoveCarousel={this.addToLoveCarousel}
                loading={this.state.loading}
              />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
