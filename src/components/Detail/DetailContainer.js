import React from "react";
import Detail from "./Detail";
import api from "../../Api";
import { useEffect } from "react";
import { useState } from "react";
function DetailContainer({ getMoiveId }) {
  const [detailMovie, setDetailMovie] = useState(null);
  const [genres, setGenres] = useState(null);
  const [casts, setCasts] = useState(null);
  const fetchDetailMovie = async () => {
    const result = await api.getDetail(getMoiveId);
    setDetailMovie(result);
  };
  const fetcCredits = async () => {
    const result = await api.getCredits(getMoiveId);
    const cast = result.data.cast.splice(0, 5);
    setCasts(cast);
  };
  const fetchImage = async () => {
    const result = await api.getImg(getMoiveId);
    console.log(result);
  };
  useEffect(() => {
    fetchDetailMovie();
    fetcCredits();
    fetchImage();
  }, []);

  const gens = () => {
    let gens = "";
    if (detailMovie) {
      const genreList = detailMovie.data.genres.map((genre) => genre.name);
      if (detailMovie.data.genres.length > 3) {
        genreList.splice(3);
      }
      gens = genreList.join(" | ");
    }
    setGenres(gens);
  };
  useEffect(() => {
    if (detailMovie) {
      gens();
    }
  }, [detailMovie]);
  return (
    <>
      {detailMovie ? (
        <Detail detailMovie={detailMovie} casts={casts} genres={genres} />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default DetailContainer;
