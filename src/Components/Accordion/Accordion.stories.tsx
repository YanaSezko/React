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
const onClickCallback=action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>;
export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}
                                                     items={[{title:"Yana",value:1}, {title:"Olya",value:2}, {title:"Zlata",value:3}]}
                                                     onClick={onClickCallback}/>;

export const ModeChanging = () => {
    const [value,setValue]=useState<boolean>(false)
    return <Accordion titleValue={"Users"} collapsed={value} onChange={()=>{setValue(!value)}}
                      items={[
                          {title:"Yana",value:1},
                          {title:"Olya",value:2},
                          {title:"Zlata",value:3}]}
                      onClick={(value)=>{alert(`user with ID ${value} should be happy`)}}/>;
}