import React from "react"
import {Videosbox, Video} from "./DetailStyle"
export default ({ id, itemkey, thumbnail }) => {
  return (
    <Videosbox key={id}>
      <a rel="noopener noreferrer" target="_blank" href={`${itemkey}`}>
        <Video src={`${thumbnail}`} alt="썸네일" />
      </a>
    </Videosbox>
  )
}