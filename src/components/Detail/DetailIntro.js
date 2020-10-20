import React, { useContext, useEffect, useState } from "react";
import { Intro, PosterImg, ContText, IntroTitle, IntroGenres, IntroLine, IntroTagLine, LikeBtn } from "./DetailStyle"
import { LikesList } from "../Router"
import { dbStore } from "../../fbase";
import { useSelector } from "react-redux";
export default () => {
  const like = useContext(LikesList)
  const { likeList, setLikeList, userObj } = like
  const { result } = useSelector(state => state.detail)
  const Movie = result
  const [likeState, setLikeState] = useState(false)
  const onAdd = () => {
    const { id, title, poster_path} = Movie
    console.log(likeList)
    if(userObj){
      const reasult = [
        ...likeList, 
        {
          id,
          title,
          poster_path
        }
      ]
      dbStore.collection("user").doc(`${userObj.uid}`).update({
        likeList: reasult
      }).then(() => {
        console.log("ok")
      })
      setLikeList(reasult)
      setLikeState(true)
    }
  }
  const onRemove = () => {
    if(likeList.length !== 0){
    const { id } = Movie
      const array = [...likeList]
      const reasult = array.filter(item => {
        return item.id !== id
      })
      dbStore.collection("user").doc(`${userObj.uid}`).update({
        likeList: reasult
      }).then(() => {
        console.log("remove")
      })
      setLikeList(reasult)
      setLikeState(false)
    }
  }
  useEffect(() => {
    if(userObj) {
      dbStore.collection("user").doc(`${userObj.uid}`).get()
      .then(response => {
        const data = response.data().likeList;
        console.log(data)
        const result = data.forEach(item => {
          console.log(item.id, Movie.id)
          if(item.id === Movie.id){
            setLikeState(true)
          }
        })
      })
      .catch(error => {
        console.log(error)
      })
    }
  },[])
  return (
    <Intro>
      <PosterImg
        src={`${Movie.poster_path}`}
        alt="포스터"
      />
      <ContText>
        <IntroTitle>{Movie.title}</IntroTitle>
        <IntroGenres>{Movie.genres}</IntroGenres>
        {likeState ? <LikeBtn onClick={onRemove}>좋아요취소</LikeBtn>
        : <LikeBtn onClick={onAdd}>좋아요</LikeBtn>
        }
        <IntroLine /> 
        <IntroTagLine>{Movie.tagline}</IntroTagLine>
        <p>{Movie.overview}</p>
      </ContText>
    </Intro>
  )
}