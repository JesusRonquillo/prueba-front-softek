import { FC, ChangeEvent } from "react";
import './Checkbox.scss';

interface CheckboxProps {
    id: string;
    name: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    label: string;
    required?: boolean;
    className?: string;
}

const Checkbox: FC<CheckboxProps> = ({
    id,
    name,
    checked,
    onChange,
    label,
    required = false,
    className = ''
}) => {
    return (
        <div className={`checkbox ${className}`}>
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                required={required}
                className="checkbox__input"
            />
            <label htmlFor={id} className="checkbox__label">
                {label}
            </label>
        </div>
    );
};

export default Checkbox; 