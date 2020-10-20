import React from "react"
import { Link } from "react-router-dom"
import { Similaritem, SimilarBox, SimilarTitle } from "./DetailStyle"
export default ({id, poster_path, title}) => {
  return (
    <Link key={id} to={`/detail/${id}`}>
      <SimilarBox>
        <Similaritem src={`${poster_path}`} alt="포스터"/>
        <SimilarTitle>{title}</SimilarTitle>
      </SimilarBox>
    </Link>
  )
}