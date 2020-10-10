import React from "react"
import styled from "styled-components"
const Videosbox = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    .video {
        border-radius: 10px;
        width:380px;
        height:220px;
    }
`; 
export default ({ id, itemkey }) => {
    const YOUTUBE_PATH = 'https://www.youtube.com/watch?v=';
    const THUMBNAIL_PATH = 'http://i.ytimg.com/vi/';
    return (
        <Videosbox key={id}>
            <a rel="noopener noreferrer" target="_blank" href={`${YOUTUBE_PATH}${itemkey}`}>
                <img className="video" src={`${THUMBNAIL_PATH}${itemkey}/sddefault.jpg`} alt="썸네일" />
            </a>
        </Videosbox>
    )
}