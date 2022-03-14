import { LobbyPage as PageComponent } from './LobbyPage';
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'
import { useState } from 'react';

export default {
    title: 'Lobby Page',
    component: PageComponent,
};

const Template: Story<{ localHost: boolean }> = (args) => {
    const localPlayer = 'Some Guy';
    const hostPlayer = args.localHost ? localPlayer : 'Host Guy';

    const [team1, setTeam1] = useState(['Some Guy', 'Host Guy', 'Any Guy']);
    const [team2, setTeam2] = useState(['Another Guy', 'This Guy', 'That Guy']);

    const onSwitch = () => {
        if (team1.includes(localPlayer)) {
            setTeam1(team1.filter(player => player !== localPlayer));
            setTeam2([...team2, localPlayer]);
        }
        else {
            setTeam1([...team1, localPlayer]);
            setTeam2(team2.filter(player => player !== localPlayer));
        }
        
        return action('switch');
    };

    return (
        <PageComponent
            code="ABCD"
            localPlayer={localPlayer}
            hostPlayer={hostPlayer}
            team1={team1}
            team2={team2}
            onSwitch={onSwitch}
            onConfigure={args.localHost ? action('configure') : undefined}
            onStart={args.localHost ? action('start') : undefined}
        />
    );
}

export const Host = Template.bind({});
Host.args = {
    localHost: true,
};

export const Client = Template.bind({});
Client.args = {
    localHost: false,
};