import React, { useState } from "react";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import './PlanCard.scss';

interface PlanCardProps {
    backgroundImage?: string;
    icon?: React.ReactNode;
    title: string;
    description: string;
    onClick?: () => void;
    isActive?: boolean;
    className?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
    backgroundImage,
    icon,
    title,
    description,
    onClick,
    isActive = false,
    className = ''
}) => {
    const [checked, setChecked] = useState(isActive);

    const handleCheck = () => {
        setChecked(!checked);
        if (onClick) onClick();
    };

    return (
        <div
            className={`plan-card ${isActive ? 'plan-card--active' : ''} ${className}`}
            style={{ backgroundImage }}
            onClick={handleCheck}
        >
            {icon && <div className="plan-card__icon">{icon}</div>}

            <div className="plan-card__content">
                <div className="plan-card__text">
                    <Text variant="subheading" className="plan-card__title">
                        {title}
                    </Text>
                    <Text variant="body" className="plan-card__description">
                        {description}
                    </Text>
                </div>

                <div
                    className={`plan-card__check ${isActive ? 'plan-card__check--active' : ''}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleCheck();
                    }}
                >
                    {isActive && (
                        <div className="plan-card__check-icon">✓</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlanCard; 