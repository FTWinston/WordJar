import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalIcon from '@mui/icons-material/Person';
import OtherIcon from '@mui/icons-material/PersonOutline';
import HostIcon from '@mui/icons-material/PersonAddAltOutlined';
import LocalHostIcon from '@mui/icons-material/PersonAddAlt1';
import ListSubheader from '@mui/material/ListSubheader';

interface Props {
    localPlayer: string;
    hostPlayer: string;
    players: string[];
    teamNumber: number;
}

export const PlayerList: React.FC<Props> = (props) => {
    return (
        <Paper elevation={3} sx={{ width: 200, height: 230, overflow: 'auto' }}>
            <List
                dense
                subheader={
                    <ListSubheader component="div">
                        Team #{props.teamNumber}
                    </ListSubheader>
                }
            >
                {props.players.map((player: string) => {
                    let icon;
                    if (player === props.localPlayer) {
                        icon = player === props.hostPlayer
                            ? <LocalHostIcon color="secondary" sx={{ ml: 0.35 }} />
                            : <LocalIcon color="secondary" />;
                    }
                    else {
                        icon = player === props.hostPlayer
                            ? <HostIcon sx={{ ml: 0.35 }} />
                            : <OtherIcon />;
                    }

                    return (
                        <ListItem key={player} role="listitem">
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={player} />
                        </ListItem>
                    );
                })}
            </List>
        </Paper>
    );
};
