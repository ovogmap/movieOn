import React from "react";
import DetailCasts from "./DetailCasts";
import DetailIntoroBg from "./DetailIntoroBg";
import DetailIntro from "./DetailIntro";
import DetailSimilars from "./DetailSimilars"
import DetailVideos from "./DetailVideos";
import { Contentbox, Castsbox, Videosbox, Similarbox, SectionTitle, Inner } from "./DetailStyle"
export default({ detailMovie, casts, genres, videos, similars }) => {
  const { backdrop_path, poster_path } = detailMovie.data;
  return (
    <>
      <Inner>
        <DetailIntoroBg backdrop_path={backdrop_path} poster_path={poster_path}/>
        <Contentbox>
          <DetailIntro detailMovie={detailMovie} genres={genres} />
          <SectionTitle>출연</SectionTitle>
          <Castsbox>
            {casts &&
              casts.map((item) => {
                const { id, character, name, profile_path } = item;
                return <DetailCasts key={id} id={id} character={character} name={name} profile_path={profile_path} />;
            })}
          </Castsbox>
          <SectionTitle>예고편</SectionTitle>
          <Videosbox>
            {videos && 
            videos.map(video => {
              const { key, id } = video
              return <DetailVideos key={id} itemkey={key} id={id} />
            })}
          </Videosbox>
          <SectionTitle>비슷한 영화</SectionTitle>
          <Similarbox>
            {similars && similars.map(similar=> {
              const { title, id, poster_path } = similar
              return <DetailSimilars key={id} title={title} id={id} poster_path={poster_path} />})}
          </Similarbox>
        </Contentbox>
      </Inner>
    </>
  );
}