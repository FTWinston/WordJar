import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import RedoIcon from '@mui/icons-material/Redo';
import { Page } from 'src/components/Page';
import { RulesButton } from 'src/components/RulesButton';
import { ProgressTimer } from 'src/components/ProgressTimer';


interface Props {
    word: string;
    rules: string[];
    startTime: number;
    endTime: number;
    onSuccess: () => void;
    onSkip: () => void;
}

export const SpeakerPage: React.FC<Props> = (props) => {
    const [animateIn, setAnimateIn] = useState(true);

    const progressFraction = 50; // 100 * (props.current - 1) / (props.total - 1);

    return (
        <Page>
            <Typography variant="h3">Your word:</Typography>

            <Slide key={props.word} in={animateIn} appear={true} direction={animateIn ? 'right' : 'left'}>
                <Typography variant="body1">
                    {props.word}
                </Typography>
            </Slide>
            
            <ProgressTimer startTime={props.startTime} endTime={props.endTime}
                aria-label="time remaining"
            />

            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <Button
                    variant="outlined"
                    type="button"
                    startIcon={<RedoIcon />}
                    onClick={props.onSkip}
                >
                    skip
                </Button>

                <Button
                    variant="contained"
                    type="button"
                    color="success"
                    disabled={props.word.length === 0}
                    startIcon={<DoneIcon />}
                    onClick={props.onSuccess}
                >
                    correct guess
                </Button>

                <RulesButton rules={props.rules} />
            </Stack>
        </Page>
    );
};
