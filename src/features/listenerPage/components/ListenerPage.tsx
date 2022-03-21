import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BadIcon from '@mui/icons-material/Dangerous';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
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
    onFoul: () => void;
}

export const ListenerPage: React.FC<Props> = (props) => {
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
                <strong>Don't</strong> guess their words, but check they obey the rules.
            </Typography>

            <ProgressTimer startTime={props.startTime} endTime={props.endTime}
                aria-label="time remaining"
            />

            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <Tooltip title={`Click only if ${props.speaker} breaks the rules`}>
                    <Button
                        variant="contained"
                        type="button"
                        color="error"
                        disabled={props.lastWord === undefined}
                        startIcon={<BadIcon />}
                    >
                        Foul
                    </Button>
                </Tooltip>

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
