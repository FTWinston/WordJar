import { Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Rules } from './Rules';

export default {
    title: 'Rules',
    component: Rules,
};

const Template: Story<ComponentProps<typeof Rules>> = (args) => (
    <Rules {...args} />
);

export const Single = Template.bind({});
Single.args = {
    rules: ['This is one single rule.']
}

export const Multi = Template.bind({});
Multi.args = {
    rules: [
        'This is a set of three rules.',
        'Each of them is equally important.',
        'But we don\'t want to use up too much space, either.'
    ]
}