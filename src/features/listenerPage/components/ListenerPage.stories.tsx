import { ListenerPage as ListenerPageComponent } from './ListenerPage';
import { Story } from '@storybook/react'
import { ComponentProps, useEffect, useState } from 'react';
import { defaultGameRules } from 'src/utils/defaultGameRules';

export default {
    title: 'Listener Page',
    component: ListenerPageComponent,
};

const words = ['First word', '2nd', undefined, 'Yet another word to guess'];

const Template: Story<ComponentProps<typeof ListenerPageComponent>> = (args) => {
    const [wordIndex, setWordIndex] = useState(-1);

    const [calledFoul, setCalledFoul] = useState<string>();

    useEffect(
        () => {
            const interval = setInterval(() => {
                setWordIndex(value => value >= words.length - 1 ? 0 : value + 1);
                setCalledFoul(undefined);
            }, 8000);

            return () => clearInterval(interval);
        }, []
    )

    return (
        <ListenerPageComponent
            {...args}
            lastWord={words[wordIndex]}
            calledFoul={calledFoul}
            onFoul={() => setCalledFoul('Some guy')}
        />
    );
}

export const ListenerPage = Template.bind({});
ListenerPage.args = {
    speaker: 'Some guy',
    startTime: new Date().getTime(),
    endTime: new Date().getTime() + 30000,
    rules: defaultGameRules
};
