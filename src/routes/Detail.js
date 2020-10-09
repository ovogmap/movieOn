import React from "react";
import DetailIndex from "../components/Detail/index";
function Detail(props) {
  const getMoiveId = props.match.params.id;
  return <DetailIndex getMoiveId={getMoiveId} />;
}

export default Detail;
