import { FC } from "react";
import './Button.scss';

interface ButtonProps {
    variant?: 'back' | 'primary' | 'secondary';
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
    return (
        <button
            className={`button button--${variant} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {variant === 'back' && (
                <div className="button__circle">
                    <div className="button__triangle" />
                </div>
            )}
            <span className="button__text">{children}</span>
        </button>
    );
};

export default Button; 