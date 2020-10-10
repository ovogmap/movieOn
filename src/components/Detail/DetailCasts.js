import React from "react";
import styled from "styled-components";
const CastBox = styled.div`
    width: 150px;
    text-align: center;
`;
const CastsImg = styled.img`
    width: 150px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 4px 4px 14px 4px #cbcbcb;
`;
const CastsName = styled.h4`
    font-size: 18px;
    padding: 20px 0 10px;
`;
const CastsCha = styled.p`
    font-size: 16px;
`;
export default ({id, profile_path, name, character}) => {
    return (
        <CastBox key={id}>
            <CastsImg
            src={`//image.tmdb.org/t/p/original/${profile_path}`}
            alt="사진"
            />
            <CastsName>{name}</CastsName>
            <CastsCha>{character} 역</CastsCha>
        </CastBox>
    )
}