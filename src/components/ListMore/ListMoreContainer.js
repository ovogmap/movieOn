import React, { useEffect, useState } from 'react';
import ListMore from "./ListMore"
import { fetchData } from "../../store/api/Api"
import { useDispatch, useSelector } from 'react-redux';
import { startLoading, endLoading } from '../../store/modules/loading'
import Loading from '../Loading/Loading'
export default({name}) => {
  const { isLoading } = useSelector(state => state.loading)
  const disPatch = useDispatch()
  console.log(isLoading)
  const [onData, setOnData] = useState([])
  const [num, setNum] = useState(1);
  // function onScroll() {
  //   let sTop = document.documentElement.scrollTop;
  //   let cTop = document.documentElement.clientHeight;
  //   let hTop = document.documentElement.scrollHeight;
  //   if (hTop == sTop + cTop) {
  //     setNum((cur) => cur + 1);
  //   }
  // }
  const onScrollfatchData = async () => {
    disPatch(startLoading())
    try {
      const result = await fetchData(name, num)
      const NewArray = result.data.results
      setOnData([...onData, ...NewArray])
      disPatch(endLoading())
    } catch(e) {
      console.log(e)
    }
  }
  useEffect(() => {
    onScrollfatchData()
    // window.addEventListener("scroll", onScroll)
  },[num])

  return isLoading ? <Loading /> 
  : <>
    {onData && <ListMore onData={onData} name={name} />}
  </>
}
