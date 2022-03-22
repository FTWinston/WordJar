import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { useState, useEffect } from 'react';

interface Props {
    caller?: string;
}

export const FoulNotification: React.FC<Props> = (props) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    useEffect(() => {
        if (props.caller) {
            setShowSnackbar(true);
        }
    }, [props.caller]);

    return (
        <Snackbar
            key={props.caller}
            open={showSnackbar && props.caller !== undefined}
            onClose={() => setShowSnackbar(false)}
            autoHideDuration={6000}
            ClickAwayListenerProps={{
                mouseEvent: false,
                touchEvent: false,
            }}
        >
            <Alert
                variant="filled"
                severity="error"
                icon={<AnnouncementIcon />}
                sx={{ width: '100%' }}
            >
                {props.caller} called foul
            </Alert>
        </Snackbar>
    );
}