import Fab from '@mui/material/Fab';
import RuleIcon from '@mui/icons-material/Rule';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { Rules } from './Rules';
import Tooltip from '@mui/material/Tooltip';
import { GameRules } from 'src/types/GameRules';

interface Props {
    rules: GameRules;
}

export const RulesButton: React.FC<Props> = (props) => {
    const [showing, show] = useState(false);

    return (
        <>
            <Tooltip title="View game rules">
                <Fab
                    size="medium"
                    color="secondary"
                    aria-label="Rules"
                    onClick={() => show(true)}
                    sx={{ml: '16px !important'}}
                >
                    <RuleIcon />
                </Fab>
            </Tooltip>

            <Drawer
                anchor="right"
                open={showing}
                onClose={() => show(false)}
            >
                <Rules rules={props.rules} />
            </Drawer>
        </>
    );
}