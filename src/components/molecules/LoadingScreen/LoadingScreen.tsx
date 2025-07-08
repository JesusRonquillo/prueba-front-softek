import { FC, useState, useEffect } from "react";
import rimacLogo from "../../../assets/logo_white.svg";
import './LoadingScreen.scss';

interface LoadingScreenProps {
    isLoading?: boolean;
    message?: string;
    className?: string;
    onAnimationComplete?: () => void;
}

const LoadingScreen: FC<LoadingScreenProps> = ({
    isLoading = true,
    message,
    className = '',
    onAnimationComplete
}) => {
    const [visible, setVisible] = useState(isLoading);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        if (!isLoading && visible) {
            setAnimating(true);
            const timer = setTimeout(() => {
                setVisible(false);
                setAnimating(false);
                onAnimationComplete?.();
            }, 500); // Duración de la animación de salida
            return () => clearTimeout(timer);
        } else if (isLoading && !visible) {
            setVisible(true);
        }
    }, [isLoading, visible, onAnimationComplete]);

    if (!visible) return null;

    const screenClasses = [
        'loading-screen',
        className,
        animating ? 'loading-screen--fade-out' : 'loading-screen--fade-in'
    ].filter(Boolean).join(' ');

    return (
        <div className={screenClasses}>
            <div className="loading-screen__content">
                <div className="loading-screen__logo">
                    <img src={rimacLogo} alt="Rimac Logo" />
                </div>
                <p className="loading-screen__message">
                    {message || "Cargando..."}
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen; 