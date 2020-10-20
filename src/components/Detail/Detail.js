import React from "react";
import DetailCasts from "./DetailCasts";
import DetailIntoroBg from "./DetailIntoroBg";
import DetailIntro from "./DetailIntro";
import DetailSimilars from "./DetailSimilars"
import DetailVideos from "./DetailVideos";
import { Contentbox, Castsbox, Videosbox, Similarbox, SectionTitle, Inner } from "./DetailStyle"
import { useSelector } from "react-redux";
export default() => {
  const { result } = useSelector(state => state.detail)
  const { backdrop_path, id, poster_path, casts, videos, similars, gens } = result;
  return (
    <>
      <Inner>
        <DetailIntoroBg backdrop_path={backdrop_path} poster_path={poster_path}/>
        <Contentbox>
          <DetailIntro genres={gens} />
          <SectionTitle>출연</SectionTitle>
          <Castsbox>
            {casts.map((item, i) => {
                const { character, name, profile_path } = item;
                return <DetailCasts key={i} id={id} character={character} name={name} profile_path={profile_path} />;
            })}
          </Castsbox>
          <SectionTitle>예고편</SectionTitle>
          <Videosbox>
            {videos.map((video, i) => {
              const { key, thumbnail } = video
              return <DetailVideos key={i} itemkey={key} thumbnail={thumbnail} id={id} />
            })}
          </Videosbox>
          <SectionTitle>비슷한 영화</SectionTitle>
          <Similarbox>
            {similars.map((similar, i)=> {
              const { title, id, poster_path } = similar
              return <DetailSimilars key={i} title={title} id={id} poster_path={poster_path} />})}
          </Similarbox>
        </Contentbox>
      </Inner>
    </>
  );
}