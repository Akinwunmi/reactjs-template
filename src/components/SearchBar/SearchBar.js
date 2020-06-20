import React from "react";

import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input
        id="SearchBarInput"
        type="search"
        name="search"
        placeholder="Search bar"
      />
    </div>
  );
};

export default SearchBar;
