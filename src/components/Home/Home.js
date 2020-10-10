import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
  .text {
    font-size: 60px;
    font-weight: 300;
    color: #fff;
  }
`;
const NickName = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: #fff;
`;
const Title = styled.p`
  font-size: 80px;
  font-weight: 400;
  font-style: italic;
  color: #fff;
  padding: 40px 0 60px;
`;
const More = styled.button`
  width: 280px;
  height: 120px;
  border: 10px solid #fff;
  background: rgb(0, 0, 0, 0.2);
  font-size: 60px;
  font-weight: 400;
  color: #fff;
  margin-top: 50px;
  cursor: pointer;
  &:hover {
    background: rgb(0, 0, 0, 0.5);
  }
`;
export default function Home({ movieData, userObj }) {
  const [imgUrl, setImgUrl] = useState("");
  const anms = [
    "알수없는 여행자",
    "전설의 낚시꾼",
    "성급한 도박사",
    "배부른 대식가",
  ];
  const index = Math.floor(Math.random() * anms.length);
  console.log(anms[index]);
  // const { displayName } = userObj;
  useEffect(() => {
    setImgUrl(
      `url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieData.backdrop_path}) center / cover no-repeat`
    );
    console.log(movieData);
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
