import React, {useState} from 'react';
import {Story} from "@storybook/react";
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


export default {
    title: 'OnOff',
    component: OnOff,
};
const callback=action('on or off clicked')

export const OnMode = () => <OnOff on={true} onChange={callback}/>;
export const OffMode = () => <OnOff on={false} onChange={callback}/>;

export const ModeChanging = () => {
    const [value,setValue]=useState<boolean>(false)
    return <OnOff on={value} onChange={setValue}/>
}