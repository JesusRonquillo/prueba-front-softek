import { FC, ChangeEvent } from "react";
import './Input.scss';

interface InputProps {
    id: string;
    name: string;
    type?: 'text' | 'number' | 'email' | 'password';
    placeholder?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    label?: string;
    error?: string;
    className?: string;
}

const Input: FC<InputProps> = ({
    id,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    required = false,
    label,
    error,
    className = ''
}) => {
    return (
        <div className={`input-wrapper ${className}`}>
            {label && (
                <label htmlFor={id} className="input__label">
                    {label}
                </label>
            )}
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={`input ${error ? 'input--error' : ''}`}
            />
            {error && <span className="input__error">{error}</span>}
        </div>
    );
};

export default Input; 