import Snackbar from '@mui/material/Snackbar';

interface Props {
    word?: string;
    show: boolean;
    hide: () => void;
}

export const GuessNotification: React.FC<Props> = (props) => (
    <Snackbar
        key={props.word}
        open={props.show && props.word !== undefined}
        onClose={props.hide}
        autoHideDuration={6000}
        ClickAwayListenerProps={{
            mouseEvent: false,
            touchEvent: false,
        }}
        message={`Correct guess: ${props.word}`}
    />
)