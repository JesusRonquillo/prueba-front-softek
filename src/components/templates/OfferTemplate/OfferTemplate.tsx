import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { AppHeader } from "../../organisms";
import { Timeline, TimelineMobile } from "../../molecules";
import { Dash } from "../../atoms";
import './OfferTemplate.scss';

interface OfferTemplateProps {
    children: ReactNode;
    currentStep: number;
    className?: string;
}

const OfferTemplate: FC<OfferTemplateProps> = ({
    children,
    currentStep,
    className = ''
}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className={`offer-template ${className}`}>
            <AppHeader />

            <div className="offer-template__timeline-desktop">
                <Timeline
                    activeStep={currentStep}
                    stepNumber={1}
                    text="Planes y coberturas"
                    showDashes={false}
                />
                <Dash />
                <Timeline
                    activeStep={currentStep}
                    stepNumber={2}
                    text="Resumen"
                    showDashes={false}
                />
            </div>

            <div className="offer-template__timeline-mobile">
                <TimelineMobile
                    currentStep={currentStep}
                    totalSteps={2}
                    onBack={handleBack}
                />
            </div>

            <main className="offer-template__content">
                {children}
            </main>
        </div>
    );
};

export default OfferTemplate; 