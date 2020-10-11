import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainBox, NickName, Title, More } from "./HomeStyle"
export default ({ movieData, userObj }) => {
  const [imgUrl, setImgUrl] = useState("");
  const anms = [
    "알수없는 여행자",
    "전설의 낚시꾼",
    "성급한 도박사",
    "배부른 대식가",
    "기여운 효또니"
  ];
  const index = Math.floor(Math.random() * anms.length);
  useEffect(() => {
    setImgUrl(
      `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path}) center / cover no-repeat`
    );
  }, [movieData]);
  return (
    <>
      {userObj ? (
        <MainBox style={{ background: imgUrl }}>
          <NickName>
            {userObj.displayName ? userObj.displayName : anms[index]} 님,
          </NickName>
          <Title>{movieData.title}</Title>
          <p className="text">어떠세요?</p>
          <Link to={`/detail/${movieData.id}`}>
            <More>더보기</More>
          </Link>
        </MainBox>
      ) : (
        <MainBox style={{ background: imgUrl }}>
          <NickName>{anms[index]}님,</NickName>
          <Title>{movieData.title}</Title>
          <p className="text">어떠세요?</p>
          <Link to={`/detail/${movieData.id}`}>
            <More>더보기</More>
          </Link>
        </MainBox>
      )}
    </>
  );
}