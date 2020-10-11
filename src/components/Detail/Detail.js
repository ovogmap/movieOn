import React from "react";
import styled from "styled-components";
import DetailCasts from "./DetailCasts";
import DetailIntoroBg from "./DetailIntoroBg";
import DetailIntro from "./DetailIntro";
import DetailSimilars from "./DetailSimilars"
import DetailVideos from "./DetailVideos";
const Inner = styled.div`
  padding-top: 50px;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 200px;
  h2 {
    padding: 100px 0 50px;
  }
  .contentbox {
    width:1180px;
  }
      .poster{
        margin-top: -150px;
      }
  .castsbox{
    width:100%;
    display:flex;
    justify-content: space-between;
  }
  .videosbox {
    width:100%;
    display:flex;
    justify-content: space-between;
    .video {
      border-radius: 10px;
      width:380px;
      height:220px;
    }
  }
  .similarbox {
    width:100%;
    display:flex;
    justify-content: space-between;
  }
`;
function Detail({ detailMovie, casts, genres, videos, similars }) {
  const { backdrop_path, poster_path } = detailMovie.data;
  return (
    <>
      <Inner>
        <DetailIntoroBg backdrop_path={backdrop_path} poster_path={poster_path}/>
        <div className="contentbox">
          <DetailIntro detailMovie={detailMovie} genres={genres} />
            <h2>출연</h2>
          <div className="castsbox">
            {casts &&
              casts.map((item) => {
                const { id, character, name, profile_path } = item;
                return <DetailCasts key={id} id={id} character={character} name={name} profile_path={profile_path} />;
            })}
          </div>
            <h2>예고편</h2>
          <div className="videosbox">
            {videos && 
            videos.map(video => {
              const { key, id } = video
              return <DetailVideos key={id} itemkey={key} id={id} />
            })}
          </div>
            <h2>비슷한 영화</h2>
          <div className="similarbox">
            {similars && similars.map(similar=> {
              const { title, id, poster_path } = similar
              return <DetailSimilars key={id} title={title} id={id} poster_path={poster_path} />})}
          </div>
        </div>
      </Inner>
    </>
  );
}

export default Detail;
