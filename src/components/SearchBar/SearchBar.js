import React from "react";

import "./SearchBar.scss";

export const SearchBar = () => {
  return (
    <div class="SearchBar">
      <input
        id="SearchBarInput"
        type="search"
        name="search"
        placeholder="Search bar"
      />
    </div>
  );
};
