import { FC } from "react";
import './Spinner.scss';

interface SpinnerProps {
    size?: 'small' | 'medium' | 'large' | 'custom';
    color?: string;
    width?: string;
    height?: string;
    className?: string;
}

const Spinner: FC<SpinnerProps> = ({
    size = 'medium',
    color = '#36d7b7',
    width,
    height,
    className = ''
}) => {
    const style = {
        ...(color && { borderColor: color, borderTopColor: 'transparent' }),
        ...(width && { width }),
        ...(height && { height })
    };

    return (
        <div
            className={`spinner spinner--${size} ${className}`}
            style={style}
        />
    );
};

export default Spinner; 