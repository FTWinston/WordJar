import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Page } from 'src/components/Page';
import { RulesButton } from 'src/components/RulesButton';
import RestartIcon from '@mui/icons-material/RestartAlt';
import { useMemo } from 'react';
import { determineTeamScores } from '../utils/determineTeamScores';
import { Teams } from './Teams';

interface Props {
    localPlayer: string;
    hostPlayer: string;
    team1: string[];
    team2: string[];
    rules: string[];
    playerScores: Record<string, number>;
    playerFouls: Record<string, number>;
    onRestart?: () => void;
}

export const ResultsPage: React.FC<Props> = (props) => {
    const { playerScores, playerFouls, team1, team2 } = props;

    const [team1score, team2score] = useMemo(
        () => determineTeamScores(playerScores, playerFouls, team1, team2),
        [playerScores, playerFouls, team1, team2]
    );

    const titleLines = team1score === team2score
        ? ['Game is a tie!', `Both teams scored ${team1score} points.`]
        : [`Team ${team1score > team2score ? 1 : 2} win!`, `Score is ${team1score} points to ${team2score}.`];

    return (
        <Page>
            <Typography variant="h2" component="h1">{titleLines[0]}</Typography>
            <Typography variant="body1">{titleLines[1]}</Typography>

            <Teams
                team1={props.team1}
                team2={props.team2}
                playerScores={playerScores}
                playerFouls={playerFouls}
                localPlayer={props.localPlayer}
                hostPlayer={props.hostPlayer}
            />
            
            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                <Tooltip title={`Only ${props.onRestart ? 'you' : props.hostPlayer} can start a new game.`}>
                    <span>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={props.onRestart}
                            disabled={props.onRestart === undefined}
                            startIcon={<RestartIcon />}
                        >
                            New game
                        </Button>
                    </span>
                </Tooltip>
                
                <RulesButton rules={props.rules} />
            </Stack>
        </Page>
    );
};
