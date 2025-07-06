import { FC, ReactNode } from "react";
import './Badge.scss';

interface BadgeProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

const Badge: FC<BadgeProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    className = ''
}) => {
    return (
        <span className={`badge badge--${variant} badge--${size} ${className}`}>
            {children}
        </span>
    );
};

export default Badge; 