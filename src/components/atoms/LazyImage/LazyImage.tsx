import { FC, useState, useRef, useEffect } from 'react';
import './LazyImage.scss';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    onLoad?: () => void;
    placeholder?: string;
    loading?: 'lazy' | 'eager';
    delay?: number;
    animationDelay?: 'delayed-1' | 'delayed-2' | 'delayed-3';
}

const LazyImage: FC<LazyImageProps> = ({
    src,
    alt,
    className = '',
    onLoad,
    placeholder,
    loading = 'lazy',
    delay = 0,
    animationDelay
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (delay > 0) {
                        setTimeout(() => setIsInView(true), delay);
                    } else {
                        setIsInView(true);
                    }
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    const handleLoad = () => {
        setIsLoaded(true);
        onLoad?.();
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true); // Mark as loaded to stop loading state
    };

    const shouldLoad = loading === 'eager' || isInView;

    const containerClasses = [
        'lazy-image',
        className,
        animationDelay ? `lazy-image--${animationDelay}` : ''
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClasses} ref={imgRef}>
            {shouldLoad && (
                <img
                    src={hasError ? placeholder : src}
                    alt={alt}
                    className={`lazy-image__img ${isLoaded ? 'lazy-image__img--loaded' : ''}`}
                    onLoad={handleLoad}
                    onError={handleError}
                />
            )}
            {!isLoaded && (
                <div className="lazy-image__placeholder">
                    {placeholder ? (
                        <img src={placeholder} alt={alt} className="lazy-image__placeholder-img" />
                    ) : (
                        <div className="lazy-image__skeleton" />
                    )}
                </div>
            )}
        </div>
    );
};

export default LazyImage; 