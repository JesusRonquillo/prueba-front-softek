import { FC } from "react";
import Text from "../../atoms/Text/Text";
import Dash from "../../atoms/Dash/Dash";
import './Timeline.scss';

interface TimelineProps {
    activeStep: number;
    stepNumber: number;
    text: string;
    showDashes?: boolean;
    className?: string;
}

const Timeline: FC<TimelineProps> = ({
    activeStep,
    stepNumber,
    text,
    showDashes = true,
    className = ''
}) => {
    const isActive = activeStep >= stepNumber;

    return (
        <div className={`timeline ${className}`}>
            <div className="timeline__step">
                <div className={`timeline__circle ${isActive ? 'timeline__circle--active' : ''}`}>
                    {stepNumber}
                </div>
                <Text
                    variant="body"
                    color={isActive ? "#141938" : "#7981B2"}
                    className="timeline__text"
                >
                    {text}
                </Text>
            </div>
            {showDashes && <Dash className="timeline__dashes" />}
        </div>
    );
};

export default Timeline; 