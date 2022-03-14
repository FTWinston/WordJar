import { styled } from '@mui/material/styles';

interface Props {
    className?: string;
}

const Outer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[500],
}));

const Inner = styled('div')(({ theme }) => ({
    // maxWidth: 'calc(100vh * 2 / 3)',
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
}));

export const Page: React.FC<Props> = (props) => {
    return (
        <Outer>
            <Inner className={props.className}>
                {props.children}
            </Inner>
        </Outer>
    );
};
