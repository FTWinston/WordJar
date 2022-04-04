import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Form } from 'src/components/Form';
import { Page } from 'src/components/Page';
import { RulesButton } from 'src/components/RulesButton';
import { GameRules } from 'src/types/GameRules';


interface Props {
    current: number;
    total: number;
    prompt: string;
    rules: GameRules;
    onEnter: (word: string) => Promise<boolean>;
}

export const WordEntryPage: React.FC<Props> = (props) => {
    const textbox = useRef<HTMLInputElement>(null);
    const [word, setWord] = useState('');
    const [readOnly, setReadOnly] = useState(false);
    const [animateIn, setAnimateIn] = useState(true);
    const [doneAll, setDoneAll] = useState(false);
    const [error, setError] = useState(false);

    const progressFraction = 100 * (props.current - 1) / (props.total - 1);

    const lastWord = props.current >= props.total;

    const handleSubmit = async () => {
        setError(false);
        setReadOnly(true);
        let finishing = false;

        const success = await props.onEnter(word);

        if (success) {
            setWord('');
            setDoneAll(lastWord);
            finishing = lastWord;
        }
        else {
            setError(true);
        }

        setAnimateIn(false);

        if (!finishing) {
            setTimeout(
                () => {
                    setAnimateIn(true);
                    setReadOnly(false);
                    textbox.current?.focus();
                }, 300
            );
        }
    };

    useEffect(() => textbox.current?.focus(), []);

    return (
        <Page>
            <Typography variant="h3" component="h1">{doneAll ? 'Wait for others' : 'Enter a Word'}</Typography>

            <Form onSubmit={handleSubmit}>
                <Slide in={animateIn} appear={false} direction={animateIn ? 'right' : 'left'}>
                    <TextField
                        inputRef={textbox}
                        id="name"
                        variant="outlined"
                        label={props.prompt}
                        value={word}
                        onChange={e => { setWord(e.target.value); setError(false); }}
                        focused={true}
                        error={error}
                        disabled={readOnly || doneAll}
                    />
                </Slide>
                
                <LinearProgress
                    variant="determinate"
                    value={progressFraction}
                    aria-label="word entry progress"
                />

                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={readOnly || doneAll || word.trim().length === 0}
                        startIcon={<AddIcon />}
                    >
                        add word
                    </Button>

                    <RulesButton rules={props.rules} />
                </Stack>
            </Form>
        </Page>
    );
};
