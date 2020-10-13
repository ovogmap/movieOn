import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"
const Inner = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
const ContentBox = styled.div`
  width: 1180px;
  // display: flex;
  padding-bottom: 100px;
`;
const Intro = styled.div`
  padding: 0 0 15px;
  border-bottom: 2px solid #e60000;
  margin-bottom: 50px;
`;
const ItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  row-gap: 40px;
  margin-top : 20px;
`;
const Items = styled.div`
  flex-basis: 24%;
  text-align: center;
  position: relative;
  &:hover {
    img {
      filter: grayscale(0%);
    }
  }
  a {
    display: block;
    text-align: meddle;
  }
  h4 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 22px;
  }
`;
const ItemImg = styled.img`
  border-radius: 10px;
  width:100%;
  height:100%;
  filter: grayscale(80%);
  transition: all .3s;
`; 
export default({onData, name}) => {
  const [section,setSection] = useState(null)
  useEffect(()=>{
    switch (name) {
      case "upcoming":
        setSection("개봉예정작")
        break;
      case "popular":
        setSection("인기작")
        break;
      case "top_rated":
        setSection("평점이 좋은 작품")
        break;
      default:
        break;
    }
    // if(name === "upcoming") {
    //   setSection("개봉예정작")
    // } else if(name === "popular") {
    //   setSection("인기작")
    // } else if(name === "top_rated") {
    //   setSection("평점이 좋은 작품")
    // }
  },[])
  return (
    <Inner>
      <ContentBox>
        <Intro>
          <h2>{section}</h2>
        </Intro>
        <ItemBox>
        {onData && onData.map((item)=>{
          const { title, id, backdrop_path } = item;
            return (
              <Items key={id}>
                <Link to={`/detail/${id}`}>
                  <ItemImg src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="사진" />
                  <h4>{title}</h4>
                </Link>
              </Items>
            )
          })
        }
        </ItemBox>
      </ContentBox>
    </Inner>
  );
}

// function Card() {
//   return (
    
//   )
// }