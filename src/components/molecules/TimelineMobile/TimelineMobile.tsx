import { FC } from "react";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import './TimelineMobile.scss';
import arrowLeftIcon from "../../../assets/arrow_left.svg";

interface TimelineMobileProps {
    currentStep?: number;
    totalSteps?: number;
    onBack?: () => void;
    className?: string;
}

const TimelineMobile: FC<TimelineMobileProps> = ({
    currentStep = 1,
    totalSteps = 2,
    onBack,
    className = ''
}) => {
    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            window.history.back();
        }
    };

    return (
        <div className={`timeline-mobile ${className}`}>
            <button
                className="timeline-mobile__back-button"
                onClick={handleBack}
            >
                <div className="timeline-mobile__back-circle">
                    <Icon src={arrowLeftIcon} alt="Volver" size="small" />
                </div>
            </button>

            <Text variant="caption" weight={700} className="timeline-mobile__step-text">
                PASO {currentStep} DE {totalSteps}
            </Text>

            <div className="timeline-mobile__progress">
                <div
                    className="timeline-mobile__progress-bar"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
            </div>
        </div>
    );
};

export default TimelineMobile; 