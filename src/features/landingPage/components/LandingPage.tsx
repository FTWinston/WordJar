import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grow from '@mui/material/Grow';
import Stack from '@mui/material/Stack';
import HostIcon from '@mui/icons-material/Download';
import JoinIcon from '@mui/icons-material/Upload';
import { useState } from 'react';
import { Form } from 'src/components/Form';
import { Page } from 'src/components/Page';

interface Props {
    onJoin: (name: string, code: string) => Promise<boolean>;
    onHost: (name: string) => Promise<void>;
}

export const LandingPage: React.FC<Props> = (props) => {
    const [joinOrHost, setJoinOrHost] = useState('join');
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    
    const [nameError, setNameError] = useState(false);
    const [codeError, setCodeError] = useState(false);
    const [connecting, setConnecting] = useState(false);

    const handleSubmit = async () => {
        const hasNameError = name.trim().length === 0;
        const hasCodeError = code.trim().length === 0;

        setNameError(hasNameError);
        setCodeError(hasCodeError);

        if (hasNameError) {
            return;
        }

        try {
            setConnecting(true);
            
            if (joinOrHost === 'host') {
                await props.onHost(name);
            }
            else {
                if (hasCodeError) {
                    return;
                }

                const success = await props.onJoin(name, code);

                if (!success) {
                    setCodeError(true);
                }
            }
        }
        finally {
            setConnecting(false);
        }
    }

    return (
        <Page>
            <Typography variant="h1">Word Jar</Typography>

            <Typography variant="body1">A word game, to play with friends you can speak to, in person or online.</Typography>

            <Form onSubmit={handleSubmit}>
                <ToggleButtonGroup
                    color="primary"
                    value={joinOrHost}
                    exclusive
                    disabled={connecting}
                    onChange={(e, newValue) => { if (newValue !== null) { setJoinOrHost(newValue) }}}
                >
                    <ToggleButton value="join">Existing game</ToggleButton>
                    <ToggleButton value="host">New game</ToggleButton>
                </ToggleButtonGroup>

                <TextField
                    id="name"
                    label="Your name"
                    variant="outlined"
                    color={nameError ? 'error' : undefined}
                    value={name}
                    onChange={e => { setName(e.target.value); setNameError(false); }}
                    focused={nameError}
                    disabled={connecting}
                />

                <Grow in={joinOrHost === 'join'}>
                    <TextField
                        id="code"
                        label="Game code"
                        variant="outlined"
                        color={codeError ? 'error' : undefined}
                        value={code}
                        onChange={e => { setCode(e.target.value.toUpperCase()); setCodeError(false); }}
                        focused={codeError}
                        disabled={connecting}
                    />
                </Grow>

                <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={1}
                >
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={connecting}
                        startIcon={joinOrHost === 'join' ? <JoinIcon /> : <HostIcon />}
                    >
                        {joinOrHost} game
                    </Button>
                </Stack>
            </Form>
        </Page>
    );
};
