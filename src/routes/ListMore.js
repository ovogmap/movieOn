import React from "react";
import ListMoreIndex from "../components/ListMore/index"
export default (props) => {
    const name = props.match.params.name
    return <ListMoreIndex name={name}/>
}