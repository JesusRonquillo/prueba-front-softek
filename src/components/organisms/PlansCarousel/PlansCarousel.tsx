import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";
import { addSelectedPlan } from "../../../redux/userSlice";
import { Button, Badge, Text } from "../../atoms";
import './PlansCarousel.scss';
import houseIcon from "../../../assets/house.svg";
import hospitalIcon from "../../../assets/hospitalIcon.svg";

interface PlanData {
    name: string;
    price: number;
    description: string[];
    age: number;
}

interface PlansCarouselProps {
    data: PlanData[];
    plan: number;
    className?: string;
}

const PlansCarousel: React.FC<PlansCarouselProps> = ({ data, plan, className = '' }) => {
    const dispatch = useAppDispatch();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dataForMe, setDataForMe] = useState<PlanData[]>([]);
    const [dataForYou, setDataForYou] = useState<PlanData[]>([]);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

    useEffect(() => {
        if (data.length >= 3) {
            setDataForMe(data.slice(0, 3));
            setDataForYou(data.slice(3, data.length));
        } else {
            setDataForMe(data);
            setDataForYou([]);
        }
    }, [data]);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1200);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const currentData = plan === 1 ? dataForMe : dataForYou;

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === currentData.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? currentData.length - 1 : prevSlide - 1
        );
    };

    const handleSelectPlan = (index: number) => {
        const selectedPlan = currentData[index];
        dispatch(addSelectedPlan(selectedPlan));
    };

    if (currentData.length === 0) {
        return null;
    }

    const getTransform = () => {
        if (isDesktop) {
            return `translateX(0%)`;
        }
        return `translateX(-${currentSlide * 100}%)`;
    };

    return (
        <div className={`plans-carousel ${className}`}>
            <div className="plans-carousel__container">
                <div
                    className="plans-carousel__slides"
                    style={{ transform: getTransform() }}
                >
                    {currentData.map((planData, index) => (
                        <div key={index} className="plans-carousel__slide">
                            <div className="plans-carousel__card">
                                <div className="plans-carousel__card-header">
                                    {planData.price > 90 && (
                                        <Badge variant="success" className="plans-carousel__recommended">
                                            Plan recomendado
                                        </Badge>
                                    )}
                                    <div className="plans-carousel__card-info">
                                        <div className="plans-carousel__card-content">
                                            <Text variant="heading" className="plans-carousel__card-title">
                                                {planData.name}
                                            </Text>
                                            <div className="plans-carousel__price-section">
                                                <Text variant="caption" className="plans-carousel__price-label">
                                                    COSTO DEL PLAN
                                                </Text>
                                                <Text variant="heading" className="plans-carousel__price">
                                                    ${planData.price}
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="plans-carousel__icon">
                                            <img
                                                src={planData.price > 90 ? hospitalIcon : houseIcon}
                                                width={56}
                                                height={56}
                                                alt="Plan icon"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="plans-carousel__divider"></div>

                                <div className="plans-carousel__benefits">
                                    {planData.description.map((description, descIndex) => (
                                        <div key={descIndex} className="plans-carousel__benefit">
                                            <span className="plans-carousel__bullet">•</span>
                                            <Text variant="body" className="plans-carousel__benefit-text">
                                                {description}
                                            </Text>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/oferts-user/summary-user" className="plans-carousel__select-link">
                                    <Button
                                        variant="primary"
                                        onClick={() => handleSelectPlan(index)}
                                        className="plans-carousel__select-button"
                                    >
                                        Seleccionar Plan
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {currentData.length > 1 && !isDesktop && (
                <div className="plans-carousel__controls">
                    <button
                        onClick={prevSlide}
                        className="plans-carousel__control-button"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextSlide}
                        className="plans-carousel__control-button"
                    >
                        →
                    </button>
                </div>
            )}
        </div>
    );
};

export default PlansCarousel; 