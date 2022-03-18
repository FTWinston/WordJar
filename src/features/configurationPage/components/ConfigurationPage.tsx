import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import { Form } from 'src/components/Form';
import { Page } from 'src/components/Page';
import Slider from '@mui/material/Slider';
import { FormField } from './FormField';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { GameRules } from 'src/types/GameRules';
import { useState } from 'react';

interface Props extends GameRules {
    onSave: (rules: GameRules) => void;
}

const formatSeconds = (value: number) => `${value}s`;

const unlimitedRounds = 11;
const formatRounds = (value: number) => value === unlimitedRounds ? 'No round limit' : `End game after each player has spoken ${value} time${value === 1 ? '' : 's'}`;

const unlimitedSkips = 6;
const formatSkip = (value: number) => value === 0 ? 'Cannot skip any words' : value === unlimitedSkips ? 'Unlimited skipping' : `Can skip ${value} word${value === 1 ? '' : 's'}`;

const categoryOptions = [
    'Movies',
    'Physical objects',
    'People',
];

const ruleOptions = [
    'Only use one-syllable words',
    'Only speak a single sentence',
    'Only speak a single word',
    'Not use any words at all',
];

export const ConfigurationPage: React.FC<Props> = (props) => {
    const [wordsPerPlayer, setWordsPerPlayer] = useState(props.wordsPerPlayer);
    const [timePerPlayer, setTimePerPlayer] = useState(props.timePerPlayer);
    const [rounds, setRounds] = useState(props.rounds ?? unlimitedRounds);
    const [skipsPerPlayer, setSkips] = useState(props.skipsPerPlayer ?? unlimitedSkips);
    const [wordCategory, setWordCategory] = useState(props.wordCategory ?? '');
    const [speakerRule, setSpeakerRule] = useState(props.speakerRule ?? '');
    
    const handleSubmit = async () => {
        const rules: GameRules = {
            wordsPerPlayer,
            timePerPlayer,
            rounds,
            skipsPerPlayer,
            wordCategory,
            speakerRule,
        };

        if (rounds === unlimitedRounds) {
            delete rules.rounds;
        }

        if (skipsPerPlayer === unlimitedSkips) {
            delete rules.skipsPerPlayer;
        }

        if (wordCategory.trim() === '') {
            delete rules.wordCategory;
        }

        if (speakerRule.trim() === '') {
            delete rules.speakerRule;
        }

        return rules;
    }

    return (
        <Page>            
            <Typography variant="h2">Game Configuration</Typography>

            <Typography variant="body1">As the host, you can configure the game's rules.</Typography>

            <Form onSubmit={handleSubmit} width={300}>
                <FormField label="Words per player (whole game)">
                    <Slider
                        value={wordsPerPlayer}
                        onChange={(_e, value) => setWordsPerPlayer(value as number)}
                        step={1}
                        min={1}
                        max={30}
                        valueLabelDisplay="auto"
                    />
                </FormField>

                <FormField label="Time per player (each round)">
                    <Slider
                        value={timePerPlayer}
                        onChange={(_e, value) => setTimePerPlayer(value as number)}
                        step={5}
                        min={10}
                        max={90}
                        valueLabelDisplay="auto"
                        valueLabelFormat={formatSeconds}
                    />
                </FormField>

                <FormField label="Round limit (optional)">
                    <Slider
                        value={rounds}
                        onChange={(_e, value) => setRounds(value as number)}
                        step={1}
                        min={1}
                        max={unlimitedRounds}
                        valueLabelDisplay="auto"
                        valueLabelFormat={formatRounds}
                    />
                </FormField>

                <FormField label="Word skipping limit">
                    <Slider
                        value={skipsPerPlayer}
                        onChange={(_e, value) => setSkips(value as number)}
                        step={1}
                        min={0}
                        max={unlimitedSkips}
                        valueLabelDisplay="auto"
                        valueLabelFormat={formatSkip}
                    />
                </FormField>
                

                <FormField label="Word category (optional)">
                    <Autocomplete
                        value={wordCategory}
                        onChange={(_event, value) => setWordCategory(value ?? '')}
                        freeSolo
                        options={categoryOptions}
                        renderInput={(params) => <TextField {...params} label="All words must be" />}
                    />
                </FormField>

                <FormField label="Additional rule (optional)">
                    <Autocomplete
                        value={speakerRule}
                        onChange={(_event, value) => setSpeakerRule(value ?? '')}
                        freeSolo
                        options={ruleOptions}
                        renderInput={(params) => <TextField {...params} label="Speaker must" />}
                    />
                </FormField>

                <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={1}
                >
                    <Button
                        variant="contained"
                        type="submit"
                        endIcon={<DoneIcon />}
                    >
                        Done
                    </Button>
                </Stack>
            </Form>
        </Page>
    );
};
