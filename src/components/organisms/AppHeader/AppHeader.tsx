import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { clearUser } from "../../../redux/userSlice";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import './AppHeader.scss';
import logo from "../../../assets/logo.svg";
import telephoneIcon from "../../../assets/telephone.svg";

const AppHeader: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { name, userData, selectedPlan } = useAppSelector(state => state.user);

    // Verificar si hay datos de usuario para mostrar el botón
    const hasUserData = name || userData.dni || userData.phone || selectedPlan.name;

    const handleLogout = () => {
        dispatch(clearUser());
        navigate("/");
    };

    return (
        <header className="app-header">
            <nav className="app-header__nav">
                <Icon src={logo} alt="Rimac Logo" size="custom" className="app-header__logo" />

                <div className="app-header__right">
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

                    {hasUserData && (
                        <button
                            onClick={handleLogout}
                            className="app-header__logout-button"
                            title="Cerrar Sesión"
                        >
                            <span className="app-header__logout-icon">⟲</span>
                            <span className="app-header__tooltip">Cerrar Sesión</span>
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default AppHeader; 