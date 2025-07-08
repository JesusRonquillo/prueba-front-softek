import { FC, ChangeEvent } from "react";
import Input from "../../atoms/Input/Input";
import Icon from "../../atoms/Icon/Icon";
import './FormField.scss';
import arrowDown from "../../../assets/arrow_down.svg";

interface FormFieldProps {
    type: 'document' | 'phone';
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    error?: string;
}

const FormField: FC<FormFieldProps> = ({
    type,
    value,
    onChange,
    className = '',
    error
}) => {
    if (type === 'document') {
        return (
            <div className={`form-field-wrapper ${className}`}>
                <div className="form-field form-field--document">
                    <div className="form-field__dropdown">
                        <span>DNI</span>
                        <Icon src={arrowDown} alt="dropdown" size="small" />
                    </div>
                    <Input
                        id="document"
                        name="document"
                        type="number"
                        placeholder="xxxxxxxx"
                        value={value}
                        onChange={onChange}
                        label="Nro. de documento"
                        required
                        className="form-field__input"
                    />
                </div>
                {error && <span className="form-field__error">{error}</span>}
            </div>
        );
    }

    return (
        <div className={`form-field-wrapper ${className}`}>
            <div className="form-field form-field--phone">
                <Input
                    id="phone"
                    name="phone"
                    type="number"
                    placeholder="9xxxxxxxx"
                    value={value}
                    onChange={onChange}
                    label="Celular"
                    required
                    className="form-field__input"
                />
            </div>
            {error && <span className="form-field__error">{error}</span>}
        </div>
    );
};

export default FormField; 