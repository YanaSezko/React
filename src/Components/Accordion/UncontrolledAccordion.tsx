import React, {useReducer, useState} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed:false})
    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: "TOGGLE-COLLAPSED"})
        }}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}


// function Accordion2(props: AccordionPropsType) {
//     if (props.collapsed === true) {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//         </div>
//     } else {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//             <AccordionBody/>
//         </div>
//     }
// }

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;