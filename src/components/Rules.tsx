import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import RuleIcon from '@mui/icons-material/LabelImportant';

interface Props {
    rules: string[];
}

export const Rules: React.FC<Props> = (props) => {
    return (
        <Box sx={{display: 'inline flex', maxWidth: 400}}>
            <List
                dense={true}
                subheader={<ListSubheader>Rules for speaking</ListSubheader>}
            >
                {props.rules.map((rule, index) => (
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