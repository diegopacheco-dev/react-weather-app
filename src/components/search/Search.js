import React from "react";
import "./searchStyles.css";

const Search = () => {
  return (
    <div className="searchComponent">
      <h2>Encuentra una ciudad</h2>
      <form id="searchForm">
        <div className="input-container">
          <input type="text" placeholder="Busca tu ciudad" />
        </div>
      </form>
    </div>
  );
};

export default Search;
