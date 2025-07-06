import { FC } from "react";
import Spinner from "../../atoms/Spinner/Spinner";
import './LoadingScreen.scss';

interface LoadingScreenProps {
    isLoading?: boolean;
    message?: string;
    className?: string;
}

const LoadingScreen: FC<LoadingScreenProps> = ({
    isLoading = true,
    message,
    className = ''
}) => {
    if (!isLoading) return null;

    return (
        <div className={`loading-screen ${className}`}>
            <div className="loading-screen__content">
                <Spinner size="large" />
                {message && (
                    <p className="loading-screen__message">{message}</p>
                )}
            </div>
        </div>
    );
};

export default LoadingScreen; 