import { ChangeEvent, FC } from "react"
import { FormField, FormGroup } from "../molecules";

interface props {
  numberPhone: string;
  documentNumber: string;
  handleDocumentNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNumberPhoneChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInputs: FC<props> = ({
  numberPhone,
  documentNumber,
  handleDocumentNumberChange,
  handleNumberPhoneChange
}) => {

  return (
    <FormGroup gap="large">
      <FormField
        type="document"
        value={documentNumber}
        onChange={handleDocumentNumberChange}
      />
      <FormField
        type="phone"
        value={numberPhone}
        onChange={handleNumberPhoneChange}
      />
    </FormGroup>
  )
}

export default FormInputs