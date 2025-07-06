import { FC, ReactNode } from "react";
import './Text.scss';

interface TextProps {
    children: ReactNode;
    variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'label';
    size?: string;
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    color?: string;
    lineHeight?: string;
    letterSpacing?: string;
    align?: 'left' | 'center' | 'right';
    className?: string;
    centerOnMobile?: boolean;
}

const Text: FC<TextProps> = ({
    children,
    variant = 'body',
    size,
    weight,
    color,
    lineHeight,
    letterSpacing,
    align = 'left',
    className = '',
    centerOnMobile = false
}) => {
    const style = {
        ...(size && { fontSize: size }),
        ...(weight && { fontWeight: weight }),
        ...(color && { color }),
        ...(lineHeight && { lineHeight }),
        ...(letterSpacing && { letterSpacing }),
        ...(align && { textAlign: align as any })
    };

    return (
        <span
            className={`text text--${variant} ${centerOnMobile ? 'text--center-mobile' : ''} ${className}`}
            style={style}
        >
            {children}
        </span>
    );
};

export default Text; 