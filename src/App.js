import React from "react";
import axios from "axios"
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  }

  getMovie = async () => {
    const movie = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  componentDidMount = () => {
    this.getMovie();
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading" : "we are ready"}
      </div>
    );
  }
}

export default App;
