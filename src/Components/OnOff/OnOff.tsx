import React, {useState} from "react";

type PropsType = {
    on: boolean
    onChange:(on:boolean)=>void
}

function OnOff(props: PropsType) {
      const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        padding:"5px",
        background: props.on? "green":"white"

    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        padding:"5px",
        background: props.on?"white":"red"
    }
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        background: props.on?"green":"red"
    }


    return <div>
        <div style={onStyle} onClick={()=>{props.onChange(true)}}>On</div>
        <div style={offStyle} onClick={()=>{props.onChange(false)}}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}

export default OnOff;