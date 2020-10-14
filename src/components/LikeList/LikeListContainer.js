import React, { useContext } from "react"
import LikeList from "./LikeList"
import { LikesList } from "../Router"

export default () => {
    const like = useContext(LikesList)
    const { likeList, setLikeList } = like
    return <LikeList likeList={likeList} setLikeList={setLikeList} />
}