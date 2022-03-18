import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

interface Props {
    className?: string;
    width?: number | string;
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
            <Stack spacing={2} sx={{pt: 1, pb: 1, minWidth: props.width}}>
                {props.children}
            </Stack>
        </Root>
    );
};
