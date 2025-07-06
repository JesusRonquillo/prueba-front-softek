import { FC, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import './Link.scss';

interface LinkProps {
    to: string;
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'terms';
    className?: string;
    onClick?: () => void;
}

const Link: FC<LinkProps> = ({
    to,
    children,
    variant = 'primary',
    className = '',
    onClick
}) => {
    return (
        <RouterLink
            to={to}
            className={`link link--${variant} ${className}`}
            onClick={onClick}
        >
            {children}
        </RouterLink>
    );
};

export default Link; 