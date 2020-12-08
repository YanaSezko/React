import React, {useState} from 'react';
import { Clock } from './Clock';

export default {
    title: 'Clock',
    component: Clock,
};

export const BaseAnalogExample = () => {
       return <Clock mode={"analog"}/>
}

export const BaseDidgitalExample = () => {
       return <Clock mode={"digital"}/>
}