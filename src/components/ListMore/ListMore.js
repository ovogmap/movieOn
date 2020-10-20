import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Inner, ContentBox, Intro, ItemBox, Items, ItemImg } from "./ListMoreStyle"
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