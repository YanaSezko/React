import React, {useState} from 'react';
import {Select} from "./Select";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


export default {
    title: 'Select stories',
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState("2")
    return <>

        <Select items={[
            {value: "1", title: "Kiev"},
            {value: "2", title: "Minsk"},
            {value: "3", title: "Moscow"}] }
                onChange={setValue}
                value={value}
        />
    </>
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>

        <Select items={[
            {value: "1", title: "Kiev"},
            {value: "2", title: "Minsk"},
            {value: "3", title: "Moscow"}]}
                onChange={setValue}
                value={value}
        />
    </>
}