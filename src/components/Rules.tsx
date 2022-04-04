import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import RuleIcon from '@mui/icons-material/LabelImportant';
import { describeRules } from 'src/utils/describeRules';
import { GameRules } from 'src/types/GameRules';

interface Props {
    rules: GameRules;
}

export const Rules: React.FC<Props> = (props) => {
    const rulesText = describeRules(props.rules);

    return (
        <Box sx={{display: 'inline flex', maxWidth: 400}}>
            <List
                dense={true}
                subheader={<ListSubheader>Rules for speaking</ListSubheader>}
            >
                {rulesText.map((rule, index) => (
                    <ListItem key={index}>
                        <ListItemIcon sx={{ minWidth: 38 }}>
                            <RuleIcon />
                        </ListItemIcon>
                        <ListItemText primary={rule} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};