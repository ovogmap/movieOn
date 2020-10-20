import React from "react";
import DetailIndex from "../components/Detail/index";
export default (props) => {
  const getMoiveId = props.match.params.id;
  return <DetailIndex getMoiveId={getMoiveId}/>;
}

