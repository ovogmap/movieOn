import React from 'react';
import { Link } from 'react-router-dom';
import { Inner, ItemBox, Items, ItemImg, ItemIntro } from "./ListStyle"
import ListItems from "./ListItems"
export default ({ upcoming, popular, topRated }) => {
  return (
    <Inner>
      <ItemIntro>
        <h2>개봉예정</h2>
        <Link to="/listmore/upcoming"><span>더보기</span></Link>
      </ItemIntro>
      <ItemBox>
        {upcoming && upcoming.map((item)=>{
          const { title, id, backdrop_path } = item
          // return <ListItems key={id} title={title} id={id} backdrop_path={backdrop_path} />
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

