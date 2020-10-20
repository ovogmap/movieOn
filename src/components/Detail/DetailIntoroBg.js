import React from "react";
import { useSelector } from "react-redux";
import { MainBg } from "./DetailStyle";
export default () => {
    const { backdrop_path } = useSelector(state => state.detail.result)
    const bg = `url(${backdrop_path}) top center / cover no-repeat`;
    return <MainBg style={{background: bg}} />
}