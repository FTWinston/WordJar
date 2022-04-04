import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Page } from 'src/components/Page';
import { RulesButton } from 'src/components/RulesButton';
import SwitchIcon from '@mui/icons-material/SwapHoriz';
import StartIcon from '@mui/icons-material/PlayArrow';
import RuleIcon from '@mui/icons-material/Rule';
import { Teams } from './Teams';
import { GameRules } from 'src/types/GameRules';

interface Props {
    code: string;
    localPlayer: string;
    hostPlayer: string;
    team1: string[];
    team2: string[];
    rules: GameRules;
    onConfigure?: () => void;
    onStart?: () => void;
    onSwitch: () => void;
}

export const LobbyPage: React.FC<Props> = (props) => {
    const message = props.onStart
        ? <>Choose your team, and start the game once all players have joined.</>
        : <>Choose your team, and wait for <strong>{props.hostPlayer}</strong> to configure the game.</>

    const configureButton = props.onStart
        ? (
            <Button
                variant="outlined"
                color="primary"
                onClick={props.onConfigure}
                startIcon={<RuleIcon />}
            >
                Configure
            </Button>
        )
        : undefined;

    const rulesButton = props.onStart
        ? undefined
        : <RulesButton rules={props.rules} />

    return (
        <Page>
            <Typography variant="h2" component="h1">Game Code: <strong>{props.code}</strong></Typography>

            <Typography variant="body2">{message}</Typography>

            <Teams
                team1={props.team1}
                team2={props.team2}
                localPlayer={props.localPlayer}
                hostPlayer={props.hostPlayer}
            />

            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={props.onSwitch}
                    startIcon={<SwitchIcon />}
                >
                    Switch team
                </Button>

                {configureButton}

                <Tooltip title={`Only ${props.onStart ? 'you' : props.hostPlayer} can start the game.`}>
                    <span>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={props.onStart}
                            disabled={props.onStart ? props.team1.length < 1 || props.team2.length < 2 : true}
                            endIcon={<StartIcon />}
                        >
                            Start
                        </Button>
                    </span>
                </Tooltip>
                
                {rulesButton}
            </Stack>
        </Page>
    );
};
