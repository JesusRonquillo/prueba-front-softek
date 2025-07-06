import { ChangeEvent, FC } from "react";
import { useNavigate } from "react-router-dom";
import { CheckboxGroup, FormGroup } from "../molecules";
import { Button, Link } from "../atoms";

interface props {
    privacyPolicy: number;
    tradePolicy: number;
    handleCotizarClick: () => void;
    isQuoteDisabled: boolean;
    handlePrivacyPolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleTradePolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormChecks: FC<props> = ({
    privacyPolicy,
    tradePolicy,
    handleCotizarClick,
    isQuoteDisabled,
    handlePrivacyPolicyChange,
    handleTradePolicyChange,
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
        <FormGroup gap="large">
            <CheckboxGroup items={checkboxItems} />
            <Link to="/" variant="terms">
                Aplican Términos y Condiciones.
            </Link>
            <button
                onClick={handleButtonClick}
                disabled={isQuoteDisabled}
                style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    borderRadius: '28px',
                    backgroundColor: '#03050F',
                    color: 'white',
                    border: 'none',
                    cursor: isQuoteDisabled ? 'not-allowed' : 'pointer',
                    opacity: isQuoteDisabled ? 0.5 : 1
                }}
            >
                Cotiza aquí
            </button>
        </FormGroup>
    )
}

export default FormChecks