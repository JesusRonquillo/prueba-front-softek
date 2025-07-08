import { FC, ReactNode } from "react";
import { AppHeader, AppFooter } from "../../organisms";
import { LazyImage } from "../../atoms";
import blurAsset from "../../../assets/blur_asset.svg";
import blurAssetGreen from "../../../assets/blur_asset_green.svg";
import './HomeTemplate.scss';

interface HomeTemplateProps {
    children: ReactNode;
    className?: string;
}

const HomeTemplate: FC<HomeTemplateProps> = ({ children, className = '' }) => {
    return (
        <div className={`home-template ${className}`}>
            <LazyImage
                className="home-template__blur-image"
                src={blurAsset}
                alt="Blur Image Background"
                loading="eager"
                animationDelay="delayed-1"
            />
            <LazyImage
                className="home-template__blur-image-green"
                src={blurAssetGreen}
                alt="Blur Image Background"
                loading="eager"
                animationDelay="delayed-3"
            />
            <AppHeader />
            <main className="home-template__content">
                {children}
            </main>
            <AppFooter />
        </div>
    );
};

export default HomeTemplate; 