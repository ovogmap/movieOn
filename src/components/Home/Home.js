import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainBox, NickName, Title, More } from "./HomeStyle"
export default ({ introMoive }) => {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    setImgUrl(
      `url(${introMoive.backdropPath}) center / cover no-repeat`
    );
  }, [introMoive]);
  return (
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