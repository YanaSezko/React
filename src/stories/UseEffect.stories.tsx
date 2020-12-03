import React, { useEffect, useState } from "react"

export default {
    title: 'useEffect demo',
}
//api.getUsers().then('')...запрос на сервер
//setInterval установка интервалов
//indexedDB работа с базой данных
//document.getElementById обращение напрямую к ДОМ-элементам
export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample');
    useEffect(() => {
        console.log("useEffect каждый раз")
        document.title = counter.toString()
    })
    
    useEffect(() => {
        console.log("useEffect только первый раз")
        document.title = counter.toString()
       }, [])

    useEffect(() => {
        console.log("useEffect первый раз и только когда меняестя  зависимость -counter")
        document.title = counter.toString()
       }, [counter])//зависимость от counter...если он не меняется,то нет смысла срабатывать UseEffect(у)


    return <>
        Hello,{counter}.{fake}
        <button onClick={() => setCounter(counter + 1)}>counter</button>
        <button onClick={() => setFake(fake + 1)}>fake</button>

    </>

}
export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("SetTimeoutExample")
    useEffect(()=>{
        setTimeout(()=>{
            console.log("setTimeout")
            document.title = counter.toString()
           },1000)
    },[counter])

    return <>
        Hello,{counter}.{fake}
        <button onClick={() => setCounter(counter + 1)}>counter</button>
        <button onClick={() => setFake(fake + 1)}>fake</button>

    </>

}
export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("SetTimeoutExample")
    useEffect(()=>{
        setInterval(()=>{
           console.log('tick'+counter)
            setCounter((state)=>state+1)
           },1000)
    },[])

    return <>
        Hello,counter:{counter}-fake:{fake}

       {/*  <button onClick={() => setCounter(counter + 1)}>counter</button>
        <button onClick={() => setFake(fake + 1)}>fake</button>
 */}
    </>

}

