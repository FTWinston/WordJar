import { Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { defaultGameRules } from 'src/utils/defaultGameRules';
import { Rules } from './Rules';

export default {
    title: 'Rules',
    component: Rules,
};

const Template: Story<ComponentProps<typeof Rules>> = (args) => (
    <Rules {...args} />
);

export const Default = Template.bind({});
Default.args = {
    rules: defaultGameRules
}

export const Modified = Template.bind({});
Modified.args = {
    rules: {
        wordsPerPlayer: 5,
        timePerPlayer: 25,
        rounds: 3,
        skipsPerPlayer: 1,
        wordCategory: 'the name of a famous person',
        speakerRule: 'speak only in pig latin',
    }
}