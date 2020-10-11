import React, { useEffect, useState } from "react";
import DetailIndex from "../components/Detail/index";
import Loading from "../components/Loading/Loading";
export default (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const getMoiveId = props.match.params.id;
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false)
    },800)
    return () => clearTimeout(timer)
  },[])
  return isLoading ? <Loading/> : <DetailIndex getMoiveId={getMoiveId}/>;
}

