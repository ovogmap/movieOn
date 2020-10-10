import React, { useState } from "react";
import styled from "styled-components";
const Intro = styled.div`
    width: 1180px;
    display: flex;
    
`;
const PosterImg = styled.img`
    width: 280px;
    height: 400px;
    border-radius: 10px;
    margin-top: -100px;
`;
const ContText = styled.div`
    padding: 20px;
`;
const IntroTitle = styled.h2`
    font-size: 40px;
    display: inline;
`;
const IntroGenres = styled.p`
    margin-left: 30px;
    font-szie: 26px;
    display: inline;
    font-weight: 600;
`;
const IntroLine = styled.div`
    width: 880px;
    height: 2px;
    background: #e60000;
    margin: 20px 0 30px;
`;
const IntroTagLine = styled.h4`
    font-size: 20px;
    font-weight: blod;
    padding-bottom: 20px;
`;
const LikeBtn = styled.button`
    font-size: 22px;
    font-weight: 900;
    margin-left: 20px;
    width: 130px;
    height: 45px;
    border-radius: 10px;
    border: none;
    background: #e60000;
    color: #fff;
    cursor: pointer;
`;

export default ({detailMovie, genres}) => {
    const [isLike, setIsLike] = useState(false)
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
            <LikeBtn onClick={onLikeToggle}>{!isLike ? "좋아요" : "좋아요 취소"}</LikeBtn>
            <IntroLine/> 
            <IntroTagLine>{detailMovie.data.tagline}</IntroTagLine>
            <p>{detailMovie.data.overview}</p>
          </ContText>
        </Intro>
    )
}