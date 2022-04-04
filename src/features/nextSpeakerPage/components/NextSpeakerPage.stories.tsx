import { NextSpeakerPage as PageComponent } from './NextSpeakerPage';
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'
import { ComponentProps } from 'react';
import { defaultGameRules } from 'src/utils/defaultGameRules';

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
    rules: defaultGameRules
};
