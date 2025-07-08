import { FC } from "react";
import './Button.scss';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'back';
    onClick?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

const Button: FC<ButtonProps> = ({
    variant = 'primary',
    onClick,
    children,
    disabled = false,
    className = ''
}) => {
    if (variant === 'back') {
        return (
            <button
                className={`button button--${variant} ${className}`}
                onClick={onClick}
                disabled={disabled}
            >
                <div className="button__circle">
                    <div className="button__triangle"></div>
                </div>
                <span className="button__text">{children}</span>
            </button>
        );
    }

    return (
        <button
            className={`button button--${variant} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="button__text">{children}</span>
        </button>
    );
};

export default Button; 