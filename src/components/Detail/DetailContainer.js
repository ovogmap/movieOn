import React, { useEffect } from "react";
import Detail from "./Detail";
import detailApi from '../../store/api/detail'
import { loading, success, error } from '../../store/modules/detail'
import { useDispatch, useSelector } from "react-redux";
import Loading from '../Loading/Loading'


export default({ getMoiveId }) => {
  const { isLoading } = useSelector(state=> state.detail)
  const dispatch = useDispatch()
  const fetchDetail = async () => {
    dispatch(loading())
    try{
      const result = await detailApi(getMoiveId)
      dispatch(success(result))
      console.log(result)
    } catch(e) {
      dispatch(error(e))
    }
  }
  useEffect(() => {
    fetchDetail()
  }, [getMoiveId]);
  return isLoading ? <Loading /> : <Detail />
}