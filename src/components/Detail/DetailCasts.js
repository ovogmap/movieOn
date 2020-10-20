import React from "react";
import { CastBox, CastsImg, CastsName, CastsCha } from "./DetailStyle"
export default ({ id, profile_path, name, character }) => {
  return (
    <CastBox key={id}>
      <CastsImg
      src={`${profile_path}`}
      alt="사진"
      />
      <CastsName>{name}</CastsName>
      <CastsCha>{character} 역</CastsCha>
    </CastBox>
  )
}