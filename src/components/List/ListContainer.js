import React, { useEffect } from 'react';
import List from "./List"
import api from "../../store/api/Api"
import Loading from '../Loading/Loading'
import { loading, success, error } from '../../store/modules/list'
import { useSelector, useDispatch } from 'react-redux'
export default () => {
  const { isLoading, error, result } = useSelector(state=> state.list)
  const disPatch = useDispatch()
  const { upcoming, popular, topRated } = result;
  console.log(result)
  let timer
  const getMovieList = async () => {
    disPatch(loading())
    console.log('start')
    try {
      const upcoming = await api.upcoming()
      const upcomings = upcoming.data.results.splice(0,4)
      const popular = await api.popular()
      const populars = popular.data.results.splice(0,4)
      const topRated = await api.top_rated()
      const topRateds = topRated.data.results.splice(0,4)
      timer = setTimeout(()=>{
        disPatch(success({
          upcoming: upcomings,
          popular: populars,
          topRated: topRateds
      }))}, 800)
      console.log('success')
    } catch(e) {
      disPatch(error(e))
    }
    console.log('finish')
  } 
  useEffect(()=>{
    getMovieList()
    return () => clearTimeout(timer)
  },[])
  return isLoading ?  <Loading/> : <List upcoming={upcoming} popular={popular} topRated={topRated} />
}