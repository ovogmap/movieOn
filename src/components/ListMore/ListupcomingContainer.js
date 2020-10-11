import React, { useEffect, useState } from 'react';
import ListMore from "./Listupcoming"
import { fetchData } from "../../util/Api"
export default({name}) => {
  const [onData, setOnData] = useState(null)

  const run = async () => {
    const result = await fetchData(name)
    setOnData(result.data.results)
  }

  useEffect(()=>{
    run()
  },[onData])

  return onData && <ListMore onData={onData} name={name} />
}
