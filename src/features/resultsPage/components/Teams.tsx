import Stack from '@mui/material/Stack';
import { PlayerList } from './PlayerList';

interface Props {
    localPlayer: string;
    hostPlayer: string;
    playerScores: Record<string, number>;
    playerFouls: Record<string, number>;
    team1: string[];
    team2: string[];
}

export const Teams: React.FC<Props> = (props) => {
    const mapPlayerInfo = (name: string) => ({
        name,
        points: props.playerScores[name] ?? 0,
        fouls: props.playerFouls[name],
    });

    const team1 = props.team1.map(mapPlayerInfo);
    const team2 = props.team2.map(mapPlayerInfo);

    return (
        <Stack direction="row" justifyContent="center" margin={2} spacing={2}>
            <PlayerList
                players={team1}
                localPlayer={props.localPlayer}
                hostPlayer={props.hostPlayer}
                teamNumber={1}
            />
            <PlayerList
                players={team2}
                localPlayer={props.localPlayer}
                hostPlayer={props.hostPlayer}
                teamNumber={2}
            />
        </Stack>
    );
};
