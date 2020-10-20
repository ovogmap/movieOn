import React from "react"
import { Link } from "react-router-dom"
import { MovieItems, ItemImg } from "./ListStyle"
export default ({id, title, backdrop_path}) => {
  return (
    <MovieItems>
      <Link to={`/detail/${id}`}>
        <ItemImg src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="사진" />
        <h4>{title}</h4>
      </Link>
    </MovieItems>
  )
}