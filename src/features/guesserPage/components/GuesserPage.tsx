import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Page } from 'src/components/Page';
import { RulesButton } from 'src/components/RulesButton';
import { ProgressTimer } from 'src/components/ProgressTimer';
import { GuessNotification } from 'src/components/GuessNotification';

interface Props {
    speaker: string;
    lastWord?: string;
    rules: string[];
    startTime: number;
    endTime: number;
}

export const GuesserPage: React.FC<Props> = (props) => {
    const [showSnackbar, setShowSnackbar] = useState(false);
    
    useEffect(() => {
        if (props.lastWord) {
            setShowSnackbar(true);
        }
    }, [props.lastWord])

    return (
        <Page>
            <Typography variant="h3" component="h1">Listen to <strong>{props.speaker}</strong></Typography>

            <Typography variant="body1">
                Guess the words that they are trying to tell you.
            </Typography>

            <ProgressTimer startTime={props.startTime} endTime={props.endTime}
                aria-label="time remaining"
            />

            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <RulesButton rules={props.rules} />
            </Stack>
            
            <GuessNotification
                word={props.lastWord}
                show={showSnackbar }
                hide={() => setShowSnackbar(false)}
            />
        </Page>
    );
};
