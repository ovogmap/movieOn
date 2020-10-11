import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { dbService } from "../../fbase";
import { UserContext } from "../Router";
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
    const [likeColl, setLikeColl] = useState(null)
    const user = useContext(UserContext);

    // useEffect(()=>{
    //     dbService.collection(`${user.uid}`).onSnapshot((item) => {
    //         const newArray = item.docs.map((doc) => ({
    //             id: doc.id,
    //             ...doc.data()
    //         }))
    //         setLikeColl(newArray)
    //     })
    // },[])

    likeColl && console.log(likeColl)
    console.log(likeColl)
    const onLikeToggle = () => {
        setIsLike(!isLike)
    }
    
    console.log(user)

    const { poster_path, title, id } = detailMovie.data;
    // const onLike = async () => {
    //     const newLikeMovie = {
    //         creareAt: Date.now(),
    //         creatorId: user.uid,
    //         likeMovietitle: title,
    //         poster: poster_path,
    //         movieId: id
    //     }
    //     await dbService.collection(`${user.uid}`).add(newLikeMovie)
    //     onLikeToggle()
    // }
    // const onLikeDelete = async () => {
    //     const num = likeColl?.map(item => {
    //         return item.movieId
    //     })
    //     console.log(num)
    //     const result = await dbService.doc(`${user.uid}/${num}`).delete()
    //     console.log(result)
    //     onLikeToggle()
    // }
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
            <IntroLine/> 
            <IntroTagLine>{detailMovie.data.tagline}</IntroTagLine>
            <p>{detailMovie.data.overview}</p>
          </ContText>
        </Intro>
    )
}