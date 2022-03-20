import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

interface Props {
    className?: string;
}

const Outer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
}));

const Inner = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
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
