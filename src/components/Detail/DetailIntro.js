import React, { useContext, useState } from "react";
import { dbService } from "../../fbase";
import { UserContext } from "../Router";
import { Intro, PosterImg, ContText, IntroTitle, IntroGenres, IntroLine, IntroTagLine, LikeBtn } from "./DetailStyle"
export default ({detailMovie, genres}) => {
    const [isLike, setIsLike] = useState(false)
    const user = useContext(UserContext);
    console.log(user)
    // dbService.collection(`${user.uid}`).add()
    const onLikeToggle = () => {
        setIsLike(!isLike)
    }
    return (
      <Intro>
        <PosterImg
          src={`//image.tmdb.org/t/p/original/${detailMovie.data.poster_path}`}
          alt="포스터"
        />
        <ContText>
          <IntroTitle>{detailMovie.data.title}</IntroTitle>
          <IntroGenres>{genres}</IntroGenres>
          {isLike ? <LikeBtn onClick={onLikeToggle}>좋아요취소</LikeBtn>
          : <LikeBtn onClick={onLikeToggle}>좋아요</LikeBtn>
          }
          <IntroLine /> 
          <IntroTagLine>{detailMovie.data.tagline}</IntroTagLine>
          <p>{detailMovie.data.overview}</p>
        </ContText>
      </Intro>
    )
}