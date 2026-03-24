import { Component } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = import.meta.env.VITE_API_KEY;

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  handleSearch = async (title, typeSearch = "all") => {
    this.setState({ movies: [], loading: true });
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}${typeSearch !== "all" ? `&type=${typeSearch}` : ""}`,
      );
      const data = await response.json();
      this.setState({ movies: data.Search, loading: false });
    } catch (err) {
      console.log(err.message);
    }
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=Avatar`,
      );
      const data = await response.json();
      this.setState({ movies: data.Search, loading: false });
    } catch (err) {
      console.log(err.message);
    }
  }
  render() {
    return (
      <main className="max-w-7xl w-full mx-auto flex-1">
        <Search handleSearch={this.handleSearch} />
        {this.state.loading ? (
          <Preloader />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </main>
    );
  }
}

export default Main;
