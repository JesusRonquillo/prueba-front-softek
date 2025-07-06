import { FC, ReactNode } from "react";
import './FormGroup.scss';

interface FormGroupProps {
    children: ReactNode;
    className?: string;
    direction?: 'row' | 'column';
    gap?: 'small' | 'medium' | 'large';
}

const FormGroup: FC<FormGroupProps> = ({
    children,
    className = '',
    direction = 'column',
    gap = 'medium'
}) => {
    return (
        <div className={`form-group form-group--${direction} form-group--gap-${gap} ${className}`}>
            {children}
        </div>
    );
};

export default FormGroup; 