import  React  from 'react';
import { ClockViewPropsType } from './Clock';

const get2simbol = (num: number) => num < 10 ? "0" + num : num


export const DigitalClockView:React.FC<ClockViewPropsType> =({date})=>{
    return<>
    <span>{get2simbol(date.getHours())}</span>:
    <span>{get2simbol(date.getMinutes())}</span>:
    <span>{get2simbol(date.getSeconds())}</span>
</>
}