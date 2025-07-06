import { FC } from "react";
import Text from "../../atoms/Text/Text";
import Dash from "../../atoms/Dash/Dash";
import './Timeline.scss';

interface TimelineProps {
    activeStep: number;
    text: string;
    showDashes?: boolean;
    className?: string;
}

const Timeline: FC<TimelineProps> = ({
    activeStep,
    text,
    showDashes = true,
    className = ''
}) => {
    return (
        <div className={`timeline ${className}`}>
            <div className="timeline__step">
                <div className={`timeline__circle ${activeStep === 1 ? 'timeline__circle--active' : ''}`}>
                    {activeStep}
                </div>
                <Text
                    variant="body"
                    color={activeStep === 1 ? "#141938" : "#7981B2"}
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