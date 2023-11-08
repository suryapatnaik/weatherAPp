import "./styles.css";

import React from "react";

function Header({ citySearchTerm, setCitySearchTerm, handleSearch }) {
  return (
    <div className="Header">
      <div>
        <input
          value={citySearchTerm}
          onChange={(e) => setCitySearchTerm(e.target.value)}
          id="SearchBar"
        ></input>

        <button id="SearchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;
