import React from "react";
import ListMoreIndex from "../components/ListMore/index"
export default (props) => {
    console.log(props)
    const name = props.match.params.name
    return <ListMoreIndex name={name}/>
}