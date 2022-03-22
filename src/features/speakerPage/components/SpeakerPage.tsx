import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import RedoIcon from '@mui/icons-material/Redo';
import { Page } from 'src/components/Page';
import { RulesButton } from 'src/components/RulesButton';
import { ProgressTimer } from 'src/components/ProgressTimer';
import Badge from '@mui/material/Badge';
import { FoulNotification } from 'src/components/FoulNotification';


interface Props {
    word: string;
    numSkips: number;
    rules: string[];
    startTime: number;
    endTime: number;
    calledFoul?: string;
    onSuccess: () => void;
    onSkip: () => void;
}

export const SpeakerPage: React.FC<Props> = (props) => {
    const [animateIn, setAnimateIn] = useState(true);
    const [word, setWord] = useState(props.word);

    useEffect(() => {
        if (animateIn) {
            return;
        }

        const timeout = setTimeout(
            () => {
                setWord(props.word);
                setAnimateIn(true);
            }, 300
        );

        return () => clearTimeout(timeout);
    }, [animateIn, props.word]);

    return (
        <Page>
            <Typography variant="body1" component="h1">Describe this:</Typography>

            <Slide in={animateIn} appear={true} direction={animateIn ? 'right' : 'left'}>
                <Typography variant="h4" component="p">
                    {word}
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
                    variant="contained"
                    type="button"
                    color="primary"
                    disabled={props.word.length === 0}
                    startIcon={<DoneIcon />}
                    onClick={() => { setAnimateIn(false); props.onSuccess(); }}
                >
                    correct guess
                </Button>
                
                <Badge color="warning" badgeContent={props.numSkips}>
                    <Button
                        variant="outlined"
                        type="button"
                        startIcon={<RedoIcon />}
                        disabled={props.numSkips === 0}
                        onClick={() => { setAnimateIn(false); props.onSkip(); }}
                    >
                        skip
                    </Button>
                </Badge>

                <RulesButton rules={props.rules} />
            </Stack>

            <FoulNotification caller={props.calledFoul} />
        </Page>
    );
};
