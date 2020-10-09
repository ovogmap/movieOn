import React from "react";
import styled from "styled-components";
const Inner = styled.div`
  padding-top: 50px;
`;
const MainBg = styled.div`
  width: 100%;
  height: 400px;
  filter: grayscale(100%);
  z-index: -10;
`;
function Detail({ detailMovie, casts, genres }) {
  console.log(detailMovie);
  console.log(detailMovie.data.title);
  console.log(casts);
  // const TITLE = detailMovie.data.title;
  const { backdrop_path, poster_path } = detailMovie.data;
  const bg = `url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}) center / cover no-repeat`;
  const post = `url(http://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}) center / cover no-repeat`;

  return (
    <>
      <Inner>
        <MainBg
          style={{
            background: bg,
          }}
        />
        <img
          src={`//image.tmdb.org/t/p/w300_and_h450_bestv2/${detailMovie.data.poster_path}`}
          alt="포스터"
          width="280px"
          height="400px"
          style={{ borderRadius: "10px" }}
        />
        <h1>{detailMovie.data.title}</h1>
        {genres}
        <h6>{detailMovie.data.tagline}</h6>
        <p>{detailMovie.data.overview}</p>
        <div>
          <h2>출연</h2>
          {casts &&
            casts.map((item) => {
              const { id, character, name, profile_path } = item;
              return (
                <div key={id}>
                  <img
                    src={`//image.tmdb.org/t/p/w138_and_h175_face/${profile_path}`}
                    alt="사진"
                    width="100px"
                    height="100px"
                  />
                  <h4>{name}</h4>
                  <h6>{character} 역</h6>
                </div>
              );
            })}
        </div>
      </Inner>
    </>
  );
}

export default Detail;
