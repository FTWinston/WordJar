import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface Props {
    label: string;
}

const Root = styled('label')(({ theme }) => ({
    marginTop: theme.spacing(),
}));

export const FormField: React.FC<Props> = (props) => {
    return (
        <Root>
            <Typography variant="body2" sx={{textAlign: 'left', mb: 1}}>{props.label}:</Typography>

            {props.children}
        </Root>
    );
};
