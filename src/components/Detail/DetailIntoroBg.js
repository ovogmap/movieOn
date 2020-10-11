import React from "react";
import { MainBg } from "./DetailStyle";
export default ({backdrop_path}) => {
    const bg = `url(https://image.tmdb.org/t/p/original/${backdrop_path}) top center / cover no-repeat`;
    // const post = `url(http://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}) center / cover no-repeat`;
    return <MainBg style={{background: bg}} />
}