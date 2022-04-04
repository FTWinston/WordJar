import { WordEntryPage } from './WordEntryPage';
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'
import { ComponentProps, useState } from 'react';
import { defaultGameRules } from 'src/utils/defaultGameRules';

export default {
    title: 'Word Entry Page',
    component: WordEntryPage,
};

const Template: Story<ComponentProps<typeof WordEntryPage>> = (args) => {
    const [current, setCurrent] = useState(args.current);

    const onEnter = async (word: string) => {
        if (current < args.total) {
            setCurrent(current + 1);
        }

        action('onEnter');
        
        await new Promise(r => setTimeout(r, 200));

        return Math.random() < 0.75; // Don't always succeed, sometimes fail.
    }

    return (
        <WordEntryPage
            {...args}
            current={current}
            onEnter={onEnter}
        />
    );
}

export const First = Template.bind({});
First.args = {
    current: 1,
    total: 5,
    prompt: 'Name of a movie',
    rules: defaultGameRules
};

export const Second = Template.bind({});
Second.args = {
    current: 2,
    total: 5,
    prompt: 'Anything at all',
    rules: defaultGameRules
};

export const Last = Template.bind({});
Last.args = {
    current: 7,
    total: 7,
    prompt: 'Someone you know',
    rules: defaultGameRules
};
