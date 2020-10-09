import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  params: {
    api_key: "1d3ad3a1e497c9afbe443d1443905c3f",
    language: "ko-KR",
  },
});

export default {
  upcoming: () => api.get("upcoming"),
  popular: () => api.get("popular"),
  top_rated: () => api.get("top_rated"),
  now_playing: () => api.get("now_playing"),
  getDetail: (id) => api.get(`${id}`),
  getCredits: (id) => api.get(`${id}/credits`),
  getImg: (id) => api.get(`${id}/images`),
};

// https://api.themoviedb.org/3/movie/581392?api_key=https://1d3ad3a1e497c9afbe443d1443905c3f&language=ko-KR
// 디테일 다들어 있음.
