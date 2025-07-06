import { FC } from "react";
import './Icon.scss';

interface IconProps {
    src: string;
    alt: string;
    size?: 'small' | 'medium' | 'large' | 'custom';
    width?: number;
    height?: number;
    className?: string;
    onClick?: () => void;
}

const Icon: FC<IconProps> = ({
    src,
    alt,
    size = 'medium',
    width,
    height,
    className = '',
    onClick
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`icon icon--${size} ${onClick ? 'icon--clickable' : ''} ${className}`}
            onClick={handleClick}
        />
    );
};

export default Icon; 