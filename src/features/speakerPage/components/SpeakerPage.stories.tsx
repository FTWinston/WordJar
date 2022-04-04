import { SpeakerPage as SpeakerPageComponent } from './SpeakerPage';
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'
import { ComponentProps, useState } from 'react';
import { defaultGameRules } from 'src/utils/defaultGameRules';

export default {
    title: 'Speaker Page',
    component: SpeakerPageComponent,
};

const words = ['First word', '2nd', 'Yet another word to guess'];

const Template: Story<ComponentProps<typeof SpeakerPageComponent>> = (args) => {
    const [numSkips, setNumSkips] = useState(args.numSkips);
    const [wordIndex, setWordIndex] = useState(0);

    const skip = () => {
        setNumSkips(numSkips - 1);
        setWordIndex(wordIndex >= words.length - 1 ? 0 : wordIndex + 1);
    }

    const success = () => {
        setWordIndex(wordIndex >= words.length - 1 ? 0 : wordIndex + 1);
    }

    return (
        <SpeakerPageComponent
            {...args}
            word={words[wordIndex]}
            numSkips={numSkips}
            onSuccess={success}
            onSkip={skip}
        />
    );
}

export const SpeakerPage = Template.bind({});
SpeakerPage.args = {
    numSkips: 2,
    startTime: new Date().getTime(),
    endTime: new Date().getTime() + 30000,
    rules: defaultGameRules
};
