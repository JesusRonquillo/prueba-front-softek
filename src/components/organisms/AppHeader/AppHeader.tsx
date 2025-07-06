import { FC } from "react";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import './AppHeader.scss';
import logo from "../../../assets/logo.svg";
import telephoneIcon from "../../../assets/telephone.svg";

const AppHeader: FC = () => {
    return (
        <header className="app-header">
            <nav className="app-header__nav">
                <Icon src={logo} alt="Rimac Logo" size="custom" className="app-header__logo" />

                <div className="app-header__contact">
                    <Text variant="body" className="app-header__text">
                        ¡Compra por este medio!
                    </Text>
                    <div className="app-header__phone">
                        <Icon src={telephoneIcon} alt="Teléfono" size="small" />
                        <Text variant="body" weight={700} className="app-header__phone-number">
                            (01) 411 6001
                        </Text>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default AppHeader; 