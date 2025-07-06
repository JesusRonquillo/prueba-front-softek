import { FC } from "react";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import './SummaryCard.scss';
import iconSummary from "../../../assets/icon-summary.svg";

interface SummaryCardProps {
    name: string;
    lastName: string;
    dni: string;
    phone: string;
    plan: string;
    price: string;
    className?: string;
}

const SummaryCard: FC<SummaryCardProps> = ({
    name,
    lastName,
    dni,
    phone,
    plan,
    price,
    className = ''
}) => {
    return (
        <div className={`summary-card ${className}`}>
            <Text variant="heading" centerOnMobile className="summary-card__title">
                Resumen del seguro
            </Text>

            <div className="summary-card__content">
                <Text variant="label" className="summary-card__subtitle">
                    PRECIOS CALCULADOS PARA:
                </Text>

                <div className="summary-card__user">
                    <Icon src={iconSummary} alt="Usuario" size="medium" />
                    <Text variant="subheading" className="summary-card__user-name">
                        {name} {lastName}
                    </Text>
                </div>

                <div className="summary-card__divider" />

                <div className="summary-card__section">
                    <Text variant="body" weight={700} className="summary-card__section-title">
                        Responsable de pago
                    </Text>
                    <Text variant="caption" className="summary-card__detail">
                        DNI: {dni}
                    </Text>
                    <Text variant="caption" className="summary-card__detail">
                        Celular: {phone}
                    </Text>
                </div>

                <div className="summary-card__section">
                    <Text variant="body" weight={700} className="summary-card__section-title">
                        Plan elegido
                    </Text>
                    <Text variant="caption" className="summary-card__detail">
                        {plan}
                    </Text>
                    <Text variant="caption" className="summary-card__detail">
                        Costo del Plan: ${price} al mes
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default SummaryCard; 