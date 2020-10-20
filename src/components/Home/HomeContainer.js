import React, { useState, useEffect } from "react";
import Home from "./Home";
import introApi from '../../store/api/intro'
import Loading from '../Loading/Loading'
import { startLoading, endLoading } from '../../store/modules/loading'
import { useSelector, useDispatch } from 'react-redux'
export default function HomeContainer() {
  const [introMoive, setIntroMoive] = useState(null);
  const { isLoading } = useSelector(state => state.loading)
  const disPatch = useDispatch()
  const getIntroMovie = async () => {
    disPatch(startLoading())
    try {
      const result = await introApi()
      setIntroMoive(result)
      disPatch(endLoading())
    } catch(e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getIntroMovie()
  }, []);
  return isLoading ? <Loading/> : (<>
      {introMoive && <Home introMoive={introMoive} />}
      </>
  );
}
