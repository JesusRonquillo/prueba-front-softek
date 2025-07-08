import { FC } from "react";
import { FormGroup } from "../../molecules";
import { Badge, Text } from "../../atoms";
import FormInputs from "../../molecules/FormInputs/FormInputs";
import FormChecks from "../../molecules/FormChecks/FormChecks";
import { ContainerFormProps } from "../../../types";
import './ContainerForm.scss';

const ContainerForm: FC<ContainerFormProps> = ({
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
    documentError,
    phoneError,
    className
}) => {
    return (
        <div className={`container-form ${className || ''}`}>
            <div className="container-form__header">
                <Badge variant="success">Seguro Salud Flexible</Badge>
                <FormGroup>
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
                documentError={documentError}
                phoneError={phoneError}
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