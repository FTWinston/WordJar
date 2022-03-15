import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

interface Props {
    className?: string;
    onSubmit: (submitter?: string) => void;
}

const Root = styled('form')(({ theme }) => ({
    display: 'inline-flex',
}));

export const Form: React.FC<Props> = (props) => {
    return (
        <Root
            className={props.className}
            autoComplete="off"
            onSubmit={(e) => { e.preventDefault(); props.onSubmit(); }}
        >
            <Stack spacing={2} sx={{mt: 1}}>
                {props.children}
            </Stack>
        </Root>
    );
};
