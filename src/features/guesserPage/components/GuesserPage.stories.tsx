import { GuesserPage as GuesserPageComponent } from './GuesserPage';
import { Story } from '@storybook/react'
import { ComponentProps, useEffect, useState } from 'react';

export default {
    title: 'Guesser Page',
    component: GuesserPageComponent,
};

const words = ['First word', '2nd', 'Yet another word to guess'];

const Template: Story<ComponentProps<typeof GuesserPageComponent>> = (args) => {
    const [wordIndex, setWordIndex] = useState(-1);

    useEffect(
        () => {
            const interval = setInterval(() => {
                setWordIndex(value => value >= words.length - 1 ? 0 : value + 1);
            }, 8000);

            return () => clearInterval(interval);
        }, []
    )
    
    return (
        <GuesserPageComponent
            {...args}
            lastWord={words[wordIndex]}
        />
    );
}

export const GuesserPage = Template.bind({});
GuesserPage.args = {
    speaker: 'Some guy',
    startTime: new Date().getTime(),
    endTime: new Date().getTime() + 30000,
    rules: [
        'This is a set of three rules.',
        'Each of them is equally important.',
        'But we don\'t want to use up too much space, either.'
    ]
};
