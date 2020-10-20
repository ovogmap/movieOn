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
  const onScrollfatchData = async () => {
    disPatch(startLoading())
    try {
      const result = await fetchData(name)
      const NewArray = result.data.results
      setOnData([...onData, ...NewArray])
      disPatch(endLoading())
    } catch(e) {
      console.log(e)
    }
  }
  useEffect(() => {
    onScrollfatchData()
  },[])

  return isLoading ? <Loading /> 
  : <>
    {onData && <ListMore onData={onData} name={name} />}
  </>
}
