import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
const Similaritem = styled.img`;
    border-radius: 10px;
    width:300px;
    height:400px;
    box-shadow: 4px 4px 14px 4px #cbcbcb;
`; 
const SimilarBox = styled.div`;
    border-radius: 10px;
    width:250px;
    height:350px;
    text-align: center;
`;
const SimilarTitle = styled.h4`;
    font-size: 26px;
    padding-top: 20px;
`;
export default ({id,poster_path,title}) => {
    console.log(id)
    return (
        <Link key={id} to={`/detail/${id}`}>
            <SimilarBox>
                <Similaritem src={`//image.tmdb.org/t/p/original/${poster_path}`} alt="포스터"/>
                <SimilarTitle>{title}</SimilarTitle>
            </SimilarBox>
        </Link>
    )
}