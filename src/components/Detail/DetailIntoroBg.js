import React from "react";
import styled from "styled-components";
const MainBg = styled.div`
  width: 100%;
  height: 400px;
  filter: grayscale(100%);
  z-index: -10;
`;
export default ({backdrop_path, poster_path}) => {
    const bg = `url(https://image.tmdb.org/t/p/original/${backdrop_path}) top center / cover no-repeat`;
    const post = `url(http://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}) center / cover no-repeat`;
    return <MainBg style={{background: bg}} />
}