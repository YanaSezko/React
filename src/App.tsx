import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./Components/Rating/Rating";
import Accordion from "./Components/Accordion/Accordion";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./Components/Rating/UncontrolledRating";
import UncontrolledOnOff from "./Components/OnOff/UncontrolledOnOff";

function App() {
    let [ratingValue,setRatingValue]=useState<RatingValueType>(0)
    let [accordionCollapsed,setAccordionCollapsed]=useState<boolean>(true)
    let [switchOn,setSwitchOn]=useState<boolean>(false)

    return (<div className={"App"}>
            Controlled:<OnOff on={switchOn} onChange={setSwitchOn}/>
            Uncontrolled:<UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}<br/>
            {/*Controlled:<Accordion titleValue={"Menu"} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)} }  collapsed={accordionCollapsed}/>*/}
            Uncontrolled:<UncontrolledAccordion titleValue={"Menu"}/>
           Controlled:<Rating value={ratingValue} onClick={setRatingValue}/>
            Uncontrolled:<UncontrolledRating onChange={setRatingValue}/>


            {/*Article2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    )
}

type PageTitlePropsType={
    title:string
}

function PageTitle(props:PageTitlePropsType){
    return <h1>{props.title}</h1>
}



export default App;
