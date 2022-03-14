import { styled } from '@mui/material/styles';

interface Props {
    className?: string;
    onSubmit: (submitter?: string) => void;
}

const Root = styled('form')(({ theme }) => ({
    display: 'inline-flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    marginTop: theme.spacing(),
}));

export const Form: React.FC<Props> = (props) => {
    return (
        <Root
            className={props.className}
            autoComplete="off"
            onSubmit={(e) => { e.preventDefault(); props.onSubmit(); }}
        >
            {props.children}
        </Root>
    );
};
