import React from 'react';
import Search from "./Search"
import {getSearchMovie} from "../../util/Api"
function SearchContainer() {
    getSearchMovie()
  return <Search/>
}

export default SearchContainer;