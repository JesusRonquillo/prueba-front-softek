import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "../components/atoms";
import rimacLogo from "../assets/logo.svg";
import "./WorkInProgress.scss";

const WorkInProgress: FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div className="work-in-progress">
            <div className="work-in-progress__container">
                <div className="work-in-progress__header">
                    <img
                        src={rimacLogo}
                        alt="Rimac Logo"
                        className="work-in-progress__logo"
                    />
                </div>

                <div className="work-in-progress__content">
                    <div className="work-in-progress__icon">
                        ⚙️
                    </div>

                    <Text variant="heading" className="work-in-progress__title">
                        Estamos trabajando en ello
                    </Text>

                    <Text variant="body" className="work-in-progress__subtitle">
                        Los términos y condiciones se encuentran en construcción.
                        Regresa pronto para más información.
                    </Text>

                    <div className="work-in-progress__actions">
                        <Button
                            onClick={handleGoBack}
                            variant="secondary"
                            className="work-in-progress__button"
                        >
                            Volver atrás
                        </Button>
                        <Button
                            onClick={handleGoHome}
                            variant="primary"
                            className="work-in-progress__button"
                        >
                            Ir al inicio
                        </Button>
                    </div>
                </div>

                <div className="work-in-progress__animation">
                    <div className="work-in-progress__gear work-in-progress__gear--1"></div>
                    <div className="work-in-progress__gear work-in-progress__gear--2"></div>
                    <div className="work-in-progress__gear work-in-progress__gear--3"></div>
                </div>
            </div>
        </div>
    );
};

export default WorkInProgress; 