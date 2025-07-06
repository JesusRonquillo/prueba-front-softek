import { FC, ReactNode } from "react";
import { CardSelection, FormGroup } from "../index";
import { Text } from "../../atoms";
import './SelectionSection.scss';

interface SelectionOption {
    id: string;
    icon: ReactNode;
    title: string;
    description: string;
}

interface SelectionSectionProps {
    title: string;
    description: string;
    options: SelectionOption[];
    activeOption: string | null;
    onOptionSelect: (optionId: string) => void;
    className?: string;
}

const SelectionSection: FC<SelectionSectionProps> = ({
    title,
    description,
    options,
    activeOption,
    onOptionSelect,
    className = ''
}) => {
    return (
        <section className={`selection-section ${className}`}>
            <div className="selection-section__header">
                <Text variant="heading" className="selection-section__title">
                    {title}
                </Text>
                <Text variant="body" className="selection-section__description">
                    {description}
                </Text>
            </div>

            <div className="selection-section__options">
                {options.map((option) => (
                    <CardSelection
                        key={option.id}
                        icon={option.icon}
                        title={option.title}
                        description={option.description}
                        isActive={activeOption === option.id}
                        onClick={() => onOptionSelect(option.id)}
                    />
                ))}
            </div>
        </section>
    );
};

export default SelectionSection; 