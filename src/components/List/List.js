import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"
const Inner = styled.div`
 padding-top: 100px;
 width: 1180px;
 margin: 0 auto;
`;
const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
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
const ItemIntro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;
export default ({ upcoming, popular, topRated }) => {
  return (
    <Inner>
      <ItemIntro>
        <h2>개봉예정</h2>
        <Link to="/listmore/upcoming"><span>더보기</span></Link>
      </ItemIntro>
      <ItemBox>
        {upcoming && upcoming.map((item)=>{
          const { title, id, backdrop_path} = item
          return (
            <Items key={id}>
              <Link to={`/detail/${id}`}>
                <ItemImg src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="사진" />
                <h4>{title}</h4>
              </Link>
            </Items>
          )
        })}
      </ItemBox>
      <ItemIntro>
        <h2>인기작</h2>
        <Link to="/listmore/popular"><span>더보기</span></Link>
      </ItemIntro>
      <ItemBox>
        {popular && popular.map((item)=>{
          const { title, id, backdrop_path } = item
          return (
            <Items key={id}>
              <Link to={`/detail/${id}`}>
                <ItemImg src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="사진" />
                <h4>{title}</h4>
              </Link>
            </Items>
          )
        })}
      </ItemBox>
      <ItemIntro>
        <h2>평점이 좋은 작품</h2>
        <Link to="/listmore/top_rated"><span>더보기</span></Link>
      </ItemIntro>
      <ItemBox>
        {topRated && topRated.map((item)=>{
          const { title, id, backdrop_path } = item
          return (
            <Items key={id}>
              <Link to={`/detail/${id}`}>
                <ItemImg src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="사진" />
                <h4>{title}</h4>
              </Link>
            </Items>
          )
        })}
      </ItemBox>
    </Inner>
  );
}

