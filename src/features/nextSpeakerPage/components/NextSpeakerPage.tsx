import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import { Page } from 'src/components/Page';
import { RulesButton } from 'src/components/RulesButton';
import { ProgressTimer } from 'src/components/ProgressTimer';


interface Props {
    numSkips: number; // TODO: use this?
    rules: string[];
    onStart: () => void;
}

export const NextSpeakerPage: React.FC<Props> = (props) => {
    return (
        <Page>
            <Typography variant="h4" component="h1">You will speak next</Typography>

            <Typography variant="body1" component="p">
                Once you are ready, click the start button.
            </Typography>
            
            <ProgressTimer aria-label="time remaining" />

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
                    startIcon={<DoneIcon />}
                    onClick={props.onStart}
                >
                    Start
                </Button>
                
                <RulesButton rules={props.rules} />
            </Stack>
        </Page>
    );
};
