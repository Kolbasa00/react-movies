import { useState } from "react";
import InputType from "./InputType";
function Search(props) {
  const [search, setSearch] = useState("");
  const [typeSearch, setTypeSearch] = useState("all");

  const handleFilter = (event) => {
    setTypeSearch(event.target.dataset.type);
    props.handleSearch(search, event.target.dataset.type);
  };

  return (
    <div className="mb-8">
      <div className="relative mb-4">
        <input
          type="search"
          placeholder="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") props.handleSearch(search, typeSearch);
          }}
          className="w-full outline-none border-b border-gray-400 placeholder-gray-300 focus:border-none h-[3rem] ::-webkit-search-cancel-button"
        />
        <button
          className="absolute uppercase text-sm bg-[#26a69a] text-white py-2 px-4 transition hover:bg-[#2bbbad] shadow-2xl rounded-xs cursor-pointer right-1"
          onClick={() => props.handleSearch(search, typeSearch)}
        >
          Search
        </button>
      </div>
      <div className="flex gap-4">
        <InputType
          text="All"
          type="all"
          handleFilter={handleFilter}
          currentType={typeSearch}
        />
        <InputType
          handleFilter={handleFilter}
          text="Movies only"
          type="movie"
          currentType={typeSearch}
        />
        <InputType
          handleFilter={handleFilter}
          text="Series only"
          type="series"
          currentType={typeSearch}
        />
      </div>
    </div>
  );
}

export default Search;
