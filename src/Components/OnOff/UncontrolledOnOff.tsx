import React, {useState} from "react";
import {truncate} from "fs";

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?:boolean
}

function UncontrolledOnOff(props: PropsType) {
    let [on, setOn] = useState(props.defaultOn? props.defaultOn:false)


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        background: on ? "green" : "white"

    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        background: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        background: on ? "green" : "red"
    }
    const onClicked = () => {
        setOn(true);
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false);
        props.onChange(false)
    }

    return <div>
        <div style={onStyle} onClick={onClicked}>On</div>
        <div style={offStyle} onClick={offClicked}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}

export default UncontrolledOnOff;