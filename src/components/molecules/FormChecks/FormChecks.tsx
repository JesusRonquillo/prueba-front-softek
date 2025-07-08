import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CheckboxGroup, FormGroup } from "../index";
import { Button, Link } from "../../atoms";
import { FormChecksProps } from "../../../types";
import './FormChecks.scss';

const FormChecks: FC<FormChecksProps> = ({
    privacyPolicy,
    tradePolicy,
    handleCotizarClick,
    isQuoteDisabled,
    handlePrivacyPolicyChange,
    handleTradePolicyChange,
    className
}) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        handleCotizarClick();
        if (!isQuoteDisabled) {
            navigate("/oferts-user");
        }
    };

    const checkboxItems = [
        {
            id: "privacy-policy",
            label: "Acepto lo Política de Privacidad",
            checked: !!privacyPolicy,
            onChange: handlePrivacyPolicyChange
        },
        {
            id: "trade-policy",
            label: "Acepto la Política Comunicaciones Comerciales",
            checked: !!tradePolicy,
            onChange: handleTradePolicyChange
        }
    ];

    return (
        <FormGroup className={className}>
            <CheckboxGroup items={checkboxItems} />
            <Link to="/work-in-progress" variant="terms">
                Aplican Términos y Condiciones.
            </Link>
            <Button
                onClick={handleButtonClick}
                disabled={isQuoteDisabled}
                variant="primary"
                className="form-checks__quote-button"
            >
                Cotiza aquí
            </Button>
        </FormGroup>
    )
}

export default FormChecks 