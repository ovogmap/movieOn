import React, { useState, useEffect } from "react";
import Home from "./Home";
import api from "../../util/Api";

export default function HomeContainer({ userObj }) {
  const [movie, setMovie] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const fetchMovie = async () => {
    const newMovie = await api.now_playing();
    const index = Math.floor(Math.random() * newMovie.data.results.length);
    setMovie(newMovie.data.results[index]);
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  const detailMovie = async () => {
    const result = await api.getDetail(movie.id).then((response) => {
      return response.data;
    });
    setMovieData(result);
  };
  useEffect(() => {
    if (movie) {
      detailMovie();
    }
  }, [movie]);
  // console.log(movie);
  return (
    <>
      {movieData ? <Home movieData={movieData} userObj={userObj} /> : <></>}
    </>
  );
}
