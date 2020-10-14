import React from "react"
import styled from "styled-components"
const Box = styled.div`
    padding-top : 100px;
`;

export default ({likeList, setLikeList}) => {
    console.log(likeList)
    return (
        <Box>
            {likeList.map(item => {
                const { id, title } = item
                return <p key={id}>{title}</p>
            })
            }
        </Box>
    )
}