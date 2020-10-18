import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainBox, NickName, Title, More } from "./HomeStyle"
export default ({ userObj, introMoive }) => {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    setImgUrl(
      `url(${introMoive.backdropPath}) center / cover no-repeat`
    );
  }, [introMoive]);
  return userObj ? (
        <MainBox style={{ background: imgUrl }}>
          <NickName>{userObj.displayName} 님,</NickName>
          <Title>{introMoive.title}</Title>
          <p className="text">어떠세요?</p>
          <Link to={`/detail/${introMoive.id}`}>
            <More>더보기</More>
          </Link>
        </MainBox>
      ) : (
        <MainBox style={{ background: imgUrl }}>
          <NickName>오늘의 영화</NickName>
          <Title>{introMoive.title}</Title>
          <p className="text">어떠세요?</p>
          <Link to={`/detail/${introMoive.id}`}>
            <More>더보기</More>
          </Link>
        </MainBox>
      )
}