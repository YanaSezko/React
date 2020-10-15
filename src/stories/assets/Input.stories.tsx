import React, {ChangeEvent, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


export default {
    title: 'input',
    //component: input
};
export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value,setValue] = useState("")
    const onChange=(event:ChangeEvent<HTMLInputElement>)=>{
        const actualValue=event.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChange}/>-{value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value,setValue] = useState("")
    const inputRef=useRef<HTMLInputElement>(null)

    const save=()=>{
        const el=inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/><button onClick={save}>save</button>-actual value: {value}</>
}


export const ControlledInput = () => <input value={"react-app"}/>

