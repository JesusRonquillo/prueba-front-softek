import { FC } from "react";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import './AppFooter.scss';
import logoWhite from "../../../assets/logo_white.svg";

const AppFooter: FC = () => {
    return (
        <footer className="app-footer">
            <Icon
                src={logoWhite}
                alt="Rimac Logo"
                size="custom"
                width={85}
                className="app-footer__logo"
            />
            <div className="app-footer__spacer"></div>
            <Text
                variant="caption"
                color="rgba(248, 249, 255, 1)"
                className="app-footer__copyright"
            >
                © 2023 RIMAC Seguros y Reaseguros.
            </Text>
        </footer>
    );
};

export default AppFooter; 