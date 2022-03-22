import Snackbar from '@mui/material/Snackbar';
import { useState, useEffect } from 'react';

interface Props {
    word?: string;
    show: boolean;
}

export const GuessNotification: React.FC<Props> = (props) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    useEffect(() => {
        if (props.word) {
            setShowSnackbar(true);
        }
    }, [props.word]);

    return (
        <Snackbar
            key={props.word}
            open={showSnackbar && props.show && props.word !== undefined}
            onClose={() => setShowSnackbar(false)}
            autoHideDuration={6000}
            ClickAwayListenerProps={{
                mouseEvent: false,
                touchEvent: false,
            }}
            message={`Correct guess: ${props.word}`}
        />
    );
}