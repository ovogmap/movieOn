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
  width: 380px;
  height: 250px;
  text-align: center;
`;
const ItemImg = styled.img`
  border-radius: 10px;
  width:380px;
  height:220px;
`; 
export default ({ upcoming, popular, topRated }) => {
  return (
    <Inner>
      <h2>개봉예정</h2>
      <Link to="/listmore/upcoming"><span>더보기</span></Link>
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
      <h2>인기작</h2>
      <Link to="/listmore/popular"><span>더보기</span></Link>
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
      <h2>평점이 좋은 작품</h2>
      <Link to="/listmore/top_rated"><span>더보기</span></Link>
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

