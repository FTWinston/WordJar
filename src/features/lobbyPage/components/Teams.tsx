import Stack from '@mui/material/Stack';
import { PlayerList } from './PlayerList';

interface Props {
    localPlayer: string;
    hostPlayer: string;
    team1: string[];
    team2: string[];
}

export const Teams: React.FC<Props> = (props) => {
    return (
        <Stack direction="row" justifyContent="center" margin={2} spacing={2}>
            <PlayerList
                players={props.team1}
                localPlayer={props.localPlayer}
                hostPlayer={props.hostPlayer}
                teamNumber={1}
            />
            <PlayerList
                players={props.team2}
                localPlayer={props.localPlayer}
                hostPlayer={props.hostPlayer}
                teamNumber={2}
            />
        </Stack>
    );
};
