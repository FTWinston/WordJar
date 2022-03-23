import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useState } from 'react';

interface Props {
    startTime?: number;
    endTime?: number;
    'aria-label'?: string;
}

export const ProgressTimer: React.FC<Props> = (props) => {
    const [currentTime, setCurrentTime] = useState(new Date().getTime());

    useEffect(
        () => {
            const interval = setInterval(() => setCurrentTime(new Date().getTime()), 250);
            return () => clearInterval(interval);
        },
        []
    );

    const progressFraction = props.startTime !== undefined && props.endTime !== undefined
        ? Math.min(100, 100 * (currentTime - props.startTime) / (props.endTime - props.startTime))
        : 0;

    return (
        <LinearProgress
            variant="determinate"
            value={progressFraction}
            aria-label={props['aria-label']}
            sx={{m: 2}}
        />
    );
}