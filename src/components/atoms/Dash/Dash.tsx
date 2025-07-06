import { FC } from "react";
import './Dash.scss';

interface DashProps {
    count?: number;
    className?: string;
}

const Dash: FC<DashProps> = ({ count = 4, className = '' }) => {
    return (
        <div className={`dash-container ${className}`}>
            {Array.from({ length: count }, (_, index) => (
                <div key={index} className="dash-line" />
            ))}
        </div>
    );
};

export default Dash; 