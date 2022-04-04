import { ResultsPage as PageComponent } from './ResultsPage';
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'
import { defaultGameRules } from 'src/utils/defaultGameRules';

export default {
    title: 'Results Page',
    component: PageComponent,
};

interface TemplateProps {
    localHost: boolean;
    playerScores: Record<string, number>;
    playerFouls: Record<string, number>;
}

const team1 = ['Some Guy', 'Host Guy', 'Any Guy'];
const team2 = ['Another Guy', 'This Guy', 'That Guy'];

const Template: Story<TemplateProps> = (args) => {
    const localPlayer = 'Some Guy';
    const hostPlayer = args.localHost ? localPlayer : 'Host Guy';

    return (
        <PageComponent
            localPlayer={localPlayer}
            hostPlayer={hostPlayer}
            team1={team1}
            team2={team2}
            playerScores={args.playerScores}
            playerFouls={args.playerFouls}
            onRestart={args.localHost ? action('restart') : undefined}
            rules={defaultGameRules}
        />
    );
}

export const Client = Template.bind({});
Client.args = {
    localHost: false,
    playerScores: {
        'Some Guy': 2,
        'Host Guy': 3,
        'Any Guy': 4,
        'Another Guy': 1,
        'This Guy': 5,
        'That Guy': 4,
    },
    playerFouls: {
        
    }
};

export const Host = Template.bind({});
Host.args = {
    localHost: true,
    playerScores: {
        'Some Guy': 2,
        'Host Guy': 3,
        'Any Guy': 4,
        'Another Guy': 1,
        'This Guy': 5,
        'That Guy': 4,
    },
    playerFouls: {
        'That Guy': 2,
        'Any Guy': 1,
    }
};
