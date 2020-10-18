import React from "react"
import {Videosbox, Video} from "./DetailStyle"
import { YOUTUBE_PATH, THUMBNAIL_PATH } from "../../store/api/Api"
export default ({ id, itemkey }) => {
  return (
    <Videosbox key={id}>
      <a rel="noopener noreferrer" target="_blank" href={`${YOUTUBE_PATH}${itemkey}`}>
        <Video src={`${THUMBNAIL_PATH}${itemkey}/sddefault.jpg`} alt="썸네일" />
      </a>
    </Videosbox>
  )
}