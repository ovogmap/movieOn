import React from "react";
import Detail from "./Detail";
import api from "../../util/Api";
import { useEffect } from "react";
import { useState } from "react"; 

export default({ getMoiveId }) => {
  const [detailMovie, setDetailMovie] = useState(null);
  const [genres, setGenres] = useState(null);
  const [casts, setCasts] = useState(null);
  const [videos, setVideos] = useState(null);
  const [similars,setSimilars] = useState(null);
  const fetchDetailMovie = async () => {
    const result = await api.getDetail(getMoiveId);
    setDetailMovie(result);
  };
  const fetcCredits = async () => {
    const result = await api.getCredits(getMoiveId);
    const cast = result.data.cast.splice(0, 5);
    setCasts(cast);
  };
  const fetchvideos = async () => {
    const result = await api.getVideos(getMoiveId)
    const video = result.data.results.splice(0, 3)
    setVideos(video)
  }
  const fetchSimilar = async () => {
    const result = await api.getSimilar(getMoiveId)
    const similar = result.data.results.splice(0,3)
    setSimilars(similar)
  }
  useEffect(() => {
    fetchDetailMovie();
    fetcCredits();
    fetchvideos();
    fetchSimilar()
  }, [getMoiveId]);

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
      {detailMovie && <Detail detailMovie={detailMovie} casts={casts} similars={similars} videos={videos} genres={genres} />}
    </>
  );
}