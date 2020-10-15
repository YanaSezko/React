import React, {useState} from 'react';
import {Story} from "@storybook/react";
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


export default {
    title: 'Accordion',
    component: Accordion,
};
const callback=action('accordion mode change event fired')

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback}/>;
export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}/>;

export const ModeChanging = () => {
    const [value,setValue]=useState<boolean>(false)
    return <Accordion titleValue={"Users"} collapsed={value} onChange={()=>{setValue(!value)}}/>;
}