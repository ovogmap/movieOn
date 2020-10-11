import React, { useEffect, useState } from 'react';
import List from "./List"
import api from "../../util/Api"
export default () => {
  const [upcoming,setUpcoming] = useState(null)
  const [popular,setPopular] = useState(null)
  const [topRated,setTopRated] = useState(null)
  const fetchUpcoming = async () => {
      const result = await api.upcoming()
      const upcomings = result.data.results.splice(0,4)
      setUpcoming(upcomings)
  }
  const fetchPopular = async () => {
      const result = await api.popular()
      const populars = result.data.results.splice(0,4)
      setPopular(populars)
  }
  const fetchTopRated = async () => {
      const result = await api.top_rated()
      const topRateds = result.data.results.splice(0,4)
      setTopRated(topRateds)
  }
  useEffect(()=>{
      fetchUpcoming()
      fetchPopular()
      fetchTopRated()
  },[])
  return <List upcoming={upcoming} popular={popular} topRated={topRated}/>
}