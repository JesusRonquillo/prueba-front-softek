import { FC, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import Badge from "../../atoms/Badge/Badge";
import FormField from "../../molecules/FormField/FormField";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import './FormSection.scss';

interface FormSectionProps {
    documentNumber: string;
    numberPhone: string;
    privacyPolicy: boolean;
    tradePolicy: boolean;
    isQuoteDisabled: boolean;
    handleDocumentNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleNumberPhoneChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handlePrivacyPolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleTradePolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleCotizarClick: () => void;
    className?: string;
}

const FormSection: FC<FormSectionProps> = ({
    documentNumber,
    numberPhone,
    privacyPolicy,
    tradePolicy,
    isQuoteDisabled,
    handleDocumentNumberChange,
    handleNumberPhoneChange,
    handlePrivacyPolicyChange,
    handleTradePolicyChange,
    handleCotizarClick,
    className = ''
}) => {
    return (
        <div className={`form-section ${className}`}>
            <div className="form-section__header">
                <Badge variant="primary">Seguro Salud Flexible</Badge>
                <div className="form-section__title-group">
                    <Text variant="heading" className="form-section__title">
                        Creado para ti y tu familia
                    </Text>
                    <Text variant="body" className="form-section__description">
                        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                        nuestra asesoría. 100% online.
                    </Text>
                </div>
            </div>

            <div className="form-section__inputs">
                <FormField
                    type="document"
                    value={documentNumber}
                    onChange={handleDocumentNumberChange}
                    className="form-section__field"
                />
                <FormField
                    type="phone"
                    value={numberPhone}
                    onChange={handleNumberPhoneChange}
                    className="form-section__field"
                />
            </div>

            <div className="form-section__checkboxes">
                <Checkbox
                    id="privacy-policy"
                    name="privacy-policy"
                    checked={privacyPolicy}
                    onChange={handlePrivacyPolicyChange}
                    label="Acepto la Política de Privacidad"
                    required
                />
                <Checkbox
                    id="trade-policy"
                    name="trade-policy"
                    checked={tradePolicy}
                    onChange={handleTradePolicyChange}
                    label="Acepto la Política Comunicaciones Comerciales"
                    required
                />
                <Link to="/" className="form-section__terms-link">
                    Aplican Términos y Condiciones.
                </Link>
            </div>

            <Button
                variant="primary"
                onClick={handleCotizarClick}
                disabled={isQuoteDisabled}
            >
                Cotizar aquí
            </Button>
        </div>
    );
};

export default FormSection; 