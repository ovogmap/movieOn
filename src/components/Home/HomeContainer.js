import React, { useState, useEffect } from "react";
import Home from "./Home";
import api from "../../util/Api";
import Loding from "../Loading/Loading"
export default function HomeContainer({ userObj }) {
  const [movie, setMovie] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
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
    const timer = setTimeout(()=>{      
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [movie]);
  // console.log(movie);
  return isLoading ? <Loding /> : (
    <>
      {movieData && <Home movieData={movieData} userObj={userObj} />}
    </>
  );
}
