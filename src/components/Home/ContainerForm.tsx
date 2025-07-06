import { ChangeEvent, FC } from "react";
import { FormGroup } from "../molecules";
import { Badge, Text } from "../atoms";
import FormInputs from "./FormInputs";
import FormChecks from "./FormChecks";
import './ContainerForm.scss';

interface props {
    documentNumber: string;
    numberPhone: string;
    privacyPolicy: number;
    tradePolicy: number;
    isQuoteDisabled: boolean;
    handleDocumentNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleNumberPhoneChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handlePrivacyPolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleTradePolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleCotizarClick: () => void;
}

const ContainerForm: FC<props> = ({
    documentNumber,
    numberPhone,
    privacyPolicy,
    tradePolicy,
    isQuoteDisabled,
    handleDocumentNumberChange,
    handleNumberPhoneChange,
    handlePrivacyPolicyChange,
    handleTradePolicyChange,
    handleCotizarClick
}) => {
    return (
        <div className="container-form">
            <div className="container-form__header">
                <Badge variant="primary">Seguro Salud Flexible</Badge>
                <FormGroup gap="small">
                    <Text variant="heading" className="container-form__title">
                        Creado para ti y tu familia
                    </Text>
                    <Text variant="body" className="container-form__description">
                        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                        nuestra asesoría. 100% online.
                    </Text>
                </FormGroup>
            </div>
            <FormInputs
                numberPhone={numberPhone}
                documentNumber={documentNumber}
                handleDocumentNumberChange={handleDocumentNumberChange}
                handleNumberPhoneChange={handleNumberPhoneChange}
            />
            <FormChecks
                privacyPolicy={privacyPolicy}
                tradePolicy={tradePolicy}
                handleCotizarClick={handleCotizarClick}
                isQuoteDisabled={isQuoteDisabled}
                handlePrivacyPolicyChange={handlePrivacyPolicyChange}
                handleTradePolicyChange={handleTradePolicyChange}
            />
        </div>
    )
}

export default ContainerForm