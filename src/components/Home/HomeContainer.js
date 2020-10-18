import React, { useState, useEffect } from "react";
import Home from "./Home";
import introApi from '../../store/api/intro'
export default function HomeContainer({ userObj }) {
  const [introMoive, setIntroMoive] = useState(null);

  const getIntroMovie = async () => {
    const result = await introApi()
    setIntroMoive(result)
  }
  useEffect(() => {
    getIntroMovie()
  }, []);
  return (
    <>
      {introMoive && <Home introMoive={introMoive} />}
    </>
  );
}
