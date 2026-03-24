import { Component } from "react";
import InputType from "./InputType";
class Search extends Component {
  state = {
    search: "",
    typeSearch: "all",
  };

  handleFilter = (event) => {
    this.setState({ typeSearch: event.target.dataset.type }, () => {
      this.props.handleSearch(this.state.search, this.state.typeSearch);
    });
  };

  render() {
    return (
      <div className="mb-8">
        <div className="relative mb-4">
          <input
            type="search"
            placeholder="search"
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                this.props.handleSearch(
                  this.state.search,
                  this.state.typeSearch,
                );
            }}
            className="w-full outline-none border-b border-gray-400 placeholder-gray-300 focus:border-none h-[3rem] ::-webkit-search-cancel-button"
          />
          <button
            className="absolute uppercase text-sm bg-[#26a69a] text-white py-2 px-4 transition hover:bg-[#2bbbad] shadow-2xl rounded-xs cursor-pointer right-1"
            onClick={() =>
              this.props.handleSearch(this.state.search, this.state.typeSearch)
            }
          >
            Search
          </button>
        </div>
        <div className="flex gap-4">
          <InputType
            text="All"
            type="all"
            handleFilter={this.handleFilter}
            currentType={this.state.typeSearch}
          />
          <InputType
            handleFilter={this.handleFilter}
            text="Movies only"
            type="movie"
            currentType={this.state.typeSearch}
          />
          <InputType
            handleFilter={this.handleFilter}
            text="Series only"
            type="series"
            currentType={this.state.typeSearch}
          />
        </div>
      </div>
    );
  }
}

export default Search;
