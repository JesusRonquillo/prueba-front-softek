import { FC } from "react"
import { FormField, FormGroup } from "../index";
import { FormInputsProps } from "../../../types";

const FormInputs: FC<FormInputsProps> = ({
    numberPhone,
    documentNumber,
    handleDocumentNumberChange,
    handleNumberPhoneChange,
    className,
    documentError,
    phoneError
}) => {

    return (
        <FormGroup className={className}>
            <FormField
                type="document"
                value={documentNumber}
                onChange={handleDocumentNumberChange}
                error={documentError}
            />
            <FormField
                type="phone"
                value={numberPhone}
                onChange={handleNumberPhoneChange}
                error={phoneError}
            />
        </FormGroup>
    )
}

export default FormInputs 