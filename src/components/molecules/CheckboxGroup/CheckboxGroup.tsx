import { FC, ChangeEvent } from "react";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import './CheckboxGroup.scss';

interface CheckboxItem {
    id: string;
    label: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface CheckboxGroupProps {
    items: CheckboxItem[];
    className?: string;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
    items,
    className = ''
}) => {
    return (
        <div className={`checkbox-group ${className}`}>
            {items.map((item) => (
                <div key={item.id} className="checkbox-group__item">
                    <Checkbox
                        id={item.id}
                        name={item.id}
                        label={item.label}
                        checked={item.checked}
                        onChange={item.onChange}
                    />
                </div>
            ))}
        </div>
    );
};

export default CheckboxGroup; 