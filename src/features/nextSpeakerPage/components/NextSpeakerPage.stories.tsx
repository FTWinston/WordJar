import { NextSpeakerPage as PageComponent } from './NextSpeakerPage';
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'
import { ComponentProps } from 'react';

export default {
    title: 'Next Speaker Page',
    component: PageComponent,
};

const Template: Story<ComponentProps<typeof PageComponent>> = (args) => {
    return (
        <PageComponent
            {...args}
            onStart={action('start')}
        />
    );
}

export const NextSpeakerPage = Template.bind({});
NextSpeakerPage.args = {
    numSkips: 2,
    rules: [
        'This is a set of three rules.',
        'Each of them is equally important.',
        'But we don\'t want to use up too much space, either.'
    ]
};
