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
import Typography from '@mui/material/Typography';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

interface PlayerInfo {
    name: string;
    points: number;
    fouls?: number;
}

interface Props {
    localPlayer: string;
    hostPlayer: string;
    players: PlayerInfo[];
    teamNumber: number;
}

const FoulsBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -8,
      top: 4,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: 0,
    },
  }));
  
export const PlayerList: React.FC<Props> = (props) => {
    return (
        <Paper elevation={3} sx={{ width: 220, minHeight: 230, overflowY: 'auto', overflowX: 'hidden' }}>
            <List
                dense
                subheader={
                    <ListSubheader component="div">
                        Team #{props.teamNumber}
                    </ListSubheader>
                }
            >
                {props.players.map((player: PlayerInfo) => {
                    let icon;
                    if (player.name === props.localPlayer) {
                        icon = player.name === props.hostPlayer
                            ? <LocalHostIcon color="secondary" sx={{ ml: 0.35 }} />
                            : <LocalIcon color="secondary" />;
                    }
                    else {
                        icon = player.name === props.hostPlayer
                            ? <HostIcon sx={{ ml: 0.35 }} />
                            : <OtherIcon />;
                    }

                    return (
                        <ListItem
                            key={player.name}
                            role="listitem"
                            secondaryAction={(
                                <Tooltip title={`Scored ${player.points} point${player.points === 1 ? '' : 's'}, accused of ${player.fouls ?? 'no'} foul${player.fouls === 1 ? '' : 's'}`}>
                                    <FoulsBadge color="error" badgeContent={player.fouls}>
                                        <Typography variant="body1" component="span">
                                            {player.points}
                                        </Typography>
                                    </FoulsBadge>
                                </Tooltip>
                            )}
                        >
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={player.name} />
                        </ListItem>
                    );
                })}
            </List>
        </Paper>
    );
};
