import { SpeakerPage as SpeakerPageComponent } from './SpeakerPage';
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'
import { ComponentProps, useState } from 'react';

export default {
    title: 'Speaker Page',
    component: SpeakerPageComponent,
};

const words = ['First word', '2nd', 'Yet another word to guess'];

const Template: Story<ComponentProps<typeof SpeakerPageComponent>> = (args) => {
    const [wordIndex, setWordIndex] = useState(0);

    const nextWord = () => {
        setWordIndex(wordIndex >= words.length - 1 ? 0 : wordIndex + 1);
    }

    return (
        <SpeakerPageComponent
            {...args}
            word={words[wordIndex]}
            onSuccess={nextWord}
            onSkip={nextWord}
        />
    );
}

export const SpeakerPage = Template.bind({});
SpeakerPage.args = {
    startTime: new Date().getTime(),
    endTime: new Date().getTime() + 30000,
    rules: [
        'This is a set of three rules.',
        'Each of them is equally important.',
        'But we don\'t want to use up too much space, either.'
    ]
};
