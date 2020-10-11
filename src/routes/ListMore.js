import React from "react";
import {ListupcomingContainer} from "../components/ListMore/index"
export default (props) => {
    console.log(props)
    const name = props.match.params.name
    return <ListupcomingContainer name={name}/>
}