import React, { useState } from 'react';
import { useEffect } from 'react';

type PropsType = {

}

const get2simbol = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [dade, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return <div>
        <span>{get2simbol(dade.getHours())}</span>:
        <span>{get2simbol(dade.getMinutes())}</span>:
        <span>{get2simbol(dade.getSeconds())}</span>
    </div>
}