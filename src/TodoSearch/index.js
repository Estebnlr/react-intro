import React from 'react';
import { TodoContext } from '../TodoContext';
import searchIcon from "../assets/search-icon.svg";
import './TodoSearch.css';


function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <div className="search-container">
      <input
        placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(event) => {
        setSearchValue(event.target.value);
        }}
      />
      <img className="search-icon" src={searchIcon} alt="search icon" />
  </div>
  );
}

export { TodoSearch };
