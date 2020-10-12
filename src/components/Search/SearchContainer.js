import React, { useEffect, useState } from 'react';
import Search from "./Search"
import { getSearchMovie } from "../../util/Api"
function SearchContainer() {
  const [onSearch, setOnSearch] = useState("")
  const [getQuery, setGetQuery] = useState(null)
  const serachRun = async () => {
    const movie = onSearch
    const response = await getSearchMovie(movie)
    console.log(response)
    setGetQuery(response.data?.results)
  }
  // useEffect(()=>{
  //   const timer = setTimeout(()=>{
  //     setDelayValue(onSearch)
  //   }, 700)
  //   return () => {clearTimeout(timer)}
  // },[onSearch, delayValue])
  return <Search serachRun={serachRun} setGetQuery={setGetQuery} getQuery={getQuery} onSearch={onSearch} setOnSearch={setOnSearch}/>
}

export default SearchContainer;