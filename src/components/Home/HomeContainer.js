import React, { useEffect } from "react";
import Home from "./Home";
import introApi from '../../store/api/intro'
import Loading from '../Loading/Loading'
import { loading, success, error } from '../../store/modules/home'
import { useSelector, useDispatch } from 'react-redux'
export default function HomeContainer() {
  const { result, isLoading, erroe } = useSelector(state => state.home)
  const disPatch = useDispatch()
  let timer
  const getIntroMovie = async () => {
    disPatch(loading())
    try {
      const result = await introApi()
      console.log(result)
      timer = setTimeout(()=>{
        disPatch(success(result))
      }, 800)
    } catch(e) {
      disPatch(error(e))
    }
  }
  useEffect(() => {
    getIntroMovie()
    return () => clearTimeout(timer)
  }, []);
  return isLoading ? <Loading/> : <Home introMoive={result} />
}
