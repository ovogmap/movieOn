import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "1d3ad3a1e497c9afbe443d1443905c3f";
const LANGUAGE = "ko-KR";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  params: {
    api_key: "1d3ad3a1e497c9afbe443d1443905c3f",
    language: "ko-KR",
  },
});
export const YOUTUBE_PATH = 'https://www.youtube.com/watch?v=';
export const THUMBNAIL_PATH = 'http://i.ytimg.com/vi/';
export default {
  upcoming: () => api.get("upcoming"),
  popular: () => api.get("popular"),
  top_rated: () => api.get("top_rated"),
  now_playing: () => api.get("now_playing"),
  getDetail: (id) => api.get(`${id}`),
  getCredits: (id) => api.get(`${id}/credits`),
  getImg: (id) => api.get(`${id}/images`),
  getVideos: (id) => api.get(`${id}/videos`),
  getSimilar: (id) => api.get(`${id}/similar`)
};
const getQuery = (path, queries = []) => {
  let url = `${BASE_URL}${path}?api_key=${API_KEY}&language=${LANGUAGE}&page=1`;
  // queries.forEach(query => {
  //   url += `&${query}`;
  // });
  return url;
};
export async function fetchData(path) {
  const url = getQuery(path)
  const result = await axios.get(url)
  return result
}
export const getSearchMovie = () => {
 let url = `${BASE_URL}${API_KEY}?api_key=${API_KEY}&language=${LANGUAGE}page=1&include_adult=true`;
 const result = axios.get(url)
 return result
}
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// ListMore name를 porps match params name로 받아와서 props로 내려준걸 fetchData에 파라미터로 쓰고 싶어서 함수 만들던
// 파라미터로 쓰고 싶어서 함수 만들던 중이었음
// https://api.themoviedb.org/3/movie/581392?api_key=https://1d3ad3a1e497c9afbe443d1443905c3f&language=ko-KR
// 디테일 다들어 있음.
