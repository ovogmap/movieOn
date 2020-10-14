import React, { useContext, useEffect, useState } from "react";
import { Intro, PosterImg, ContText, IntroTitle, IntroGenres, IntroLine, IntroTagLine, LikeBtn } from "./DetailStyle"
import { LikesList } from "../Router"
import { dbStore } from "../../fbase";
export default ({detailMovie, genres}) => {
  const like = useContext(LikesList)
  const { likeList, setLikeList, isLike, setIsLike, userObj } = like
  const onAdd = () => {
    const { id, title, poster_path} = detailMovie.data
    if(userObj){
      dbStore.collection("user").doc(`${userObj.uid}`).update({
        likeList: [
          ...likeList,
          {
            title,
            id,
            poster_pathgit 
          }
        ]
      }).then(() => {
        console.log("ok")
      })
    }
    // setLikeList([
    //   ...likeList,
    //   {
    //     id,
    //     title,
    //     poster_path
    //   }
    // ])
    setIsLike(true)
  }
  const onRemove = () => {
    const { id } = detailMovie.data
    const array = [...likeList]
    const reasult = array.filter(item => {
      return item.id !== id
    })
    setLikeList(reasult)
    setIsLike(false)
  }
  console.log(likeList)
  return (
    <Intro>
      <PosterImg
        src={`//image.tmdb.org/t/p/original/${detailMovie.data.poster_path}`}
        alt="포스터"
      />
      <ContText>
        <IntroTitle>{detailMovie.data.title}</IntroTitle>
        <IntroGenres>{genres}</IntroGenres>
        {isLike ? <LikeBtn onClick={onRemove}>좋아요취소</LikeBtn>
        : <LikeBtn onClick={onAdd}>좋아요</LikeBtn>
        }
        <IntroLine /> 
        <IntroTagLine>{detailMovie.data.tagline}</IntroTagLine>
        <p>{detailMovie.data.overview}</p>
      </ContText>
    </Intro>
  )
}