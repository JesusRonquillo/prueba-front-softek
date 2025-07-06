import { FC, ReactNode } from "react";
import Text from "../../atoms/Text/Text";
import './CardSelection.scss';

interface CardSelectionProps {
    icon: ReactNode;
    title: string;
    description: string;
    isActive: boolean;
    onClick: () => void;
    className?: string;
}

const CardSelection: FC<CardSelectionProps> = ({
    icon,
    title,
    description,
    isActive,
    onClick,
    className = ''
}) => {
    return (
        <div
            className={`card-selection ${isActive ? 'card-selection--active' : ''} ${className}`}
            onClick={onClick}
        >
            <div className="card-selection__check"></div>
            <div className="card-selection__icon">
                {icon}
            </div>
            <div className="card-selection__content">
                <Text variant="heading" className="card-selection__title">
                    {title}
                </Text>
                <Text variant="body" className="card-selection__description">
                    {description}
                </Text>
            </div>
        </div>
    );
};

export default CardSelection; 