import type { NextPage } from 'next'
import { Button } from '@mui/material';

interface NormalButtonProps {
    children?: JSX.Element | string;
}

const NormalButton: NextPage<NormalButtonProps> = ({ children = '노말버튼' }) => {
    return <>
        <Button onClick={() => console.log(11)}>
            {children}
        </Button>
    </>;
};

export default NormalButton;