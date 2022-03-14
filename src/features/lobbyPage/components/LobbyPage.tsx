import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Page } from 'src/components/Page';
import { Teams } from './Teams';

interface Props {
    code: string;
    localPlayer: string;
    hostPlayer: string;
    team1: string[];
    team2: string[];
    onConfigure?: () => void;
    onStart?: () => void;
    onSwitch: () => void;
}

export const LobbyPage: React.FC<Props> = (props) => {
    const message = props.onStart
        ? <>Choose your team, and start the game once all players have joined.</>
        : <>Choose your team, and wait for <strong>{props.hostPlayer}</strong> to configure the game.</>

    return (
        <Page>
            <Typography variant="h2">Game Code: <strong>{props.code}</strong></Typography>

            <Typography variant="body2">{message}</Typography>

            <Teams
                team1={props.team1}
                team2={props.team2}
                localPlayer={props.localPlayer}
                hostPlayer={props.hostPlayer}
            />

            <Stack direction="row" spacing={1} justifyContent="center">
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={props.onSwitch}
                >
                    Switch team
                </Button>

                <Button
                    variant={props.onStart ? 'outlined' : 'text'}
                    color="primary"
                    onClick={props.onConfigure}
                >
                    Configure
                </Button>

                <Tooltip title={`Only ${props.onStart ? 'you' : props.hostPlayer} can start the game.`}>
                    <span>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={props.onStart}
                            disabled={props.onStart ? props.team1.length < 1 || props.team2.length < 2 : true}
                        >
                            Start
                        </Button>
                    </span>
                </Tooltip>
            </Stack>
        </Page>
    );
};
