import React from "react";
import DetailIndex from "../components/Detail/index";
export default (props) => {
  console.log(props)
  const getMoiveId = props.match.params.id;
  return <DetailIndex getMoiveId={getMoiveId} />;
}

