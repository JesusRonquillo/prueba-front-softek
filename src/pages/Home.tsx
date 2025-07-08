import { FC, ChangeEvent, useEffect, useState, FormEvent } from "react";
import { HomeTemplate } from "../components/templates";
import { LazyImage } from "../components/atoms";
import { LoadingScreen } from "../components/molecules";
import homeImage from "../assets/images/image.svg";
import blurAsset from "../assets/blur_asset.svg";
import blurAssetGreen from "../assets/blur_asset_green.svg";
import "../styles/pages.scss";
import ContainerForm from "../components/organisms/ContainerForm/ContainerForm";
import { useAppDispatch } from "../redux/store";
import { addUserData } from "../redux/userSlice";
import { useImageLoader } from "../hooks/useImageLoader";

export const Home: FC = () => {
  const [documentNumber, setDocumentNumber] = useState<string>("");
  const [isQuoteDisabled, setIsQuoteDisabled] = useState<boolean>(true);
  const [numberPhone, setNumberPhone] = useState<string>("");
  const [privacyPolicy, setPrivacyPolicy] = useState<number>(0);
  const [tradePolicy, setTradePolicy] = useState<number>(0);
  const [documentError, setDocumentError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const dispatch = useAppDispatch();

  // Lista de imágenes críticas para cargar
  const criticalImages = [homeImage, blurAsset, blurAssetGreen];

  const { allImagesLoaded } = useImageLoader({
    images: criticalImages,
  });

  // Función para validar el número de documento
  const validateDocumentNumber = (value: string): string => {
    if (value.length === 0) {
      return "";
    }
    if (value.length < 8) {
      return "El DNI debe tener 8 dígitos";
    }
    return "";
  };

  // Función para validar el número de teléfono
  const validatePhoneNumber = (value: string): string => {
    if (value.length === 0) {
      return "";
    }
    if (!value.startsWith('9')) {
      return "El número de celular debe empezar con 9";
    }
    if (value.length < 9) {
      return "El celular debe tener 9 dígitos";
    }
    return "";
  };

  useEffect(() => {
    const isDocumentValid = documentNumber.length === 8;
    const isPhoneValid = numberPhone.length === 9 && numberPhone.startsWith('9');
    const isFormValid = isDocumentValid && isPhoneValid && privacyPolicy === 1 && tradePolicy === 1;

    setIsQuoteDisabled(!isFormValid);
  }, [documentNumber, numberPhone, privacyPolicy, tradePolicy]);

  const handleDocumentNumberChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    // Limitar la longitud del número de documento a 8 caracteres
    if (value.length <= 8) {
      setDocumentNumber(value);
      setDocumentError(validateDocumentNumber(value));
    }
  };

  const handleCotizarClick = (): void => {
    // Verificar que el número de documento esté lleno antes de avanzar
    dispatch(addUserData({ phone: numberPhone, dni: documentNumber }));

    const isDocumentValid = documentNumber.length === 8;
    const isPhoneValid = numberPhone.length === 9 && numberPhone.startsWith('9');
    const isFormValid = isDocumentValid && isPhoneValid && privacyPolicy === 1 && tradePolicy === 1;

    setIsQuoteDisabled(!isFormValid);
  };

  const handleNumberPhoneChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    // Limitar la longitud del número de teléfono a 9 caracteres
    if (value.length <= 9) {
      setNumberPhone(value);
      setPhoneError(validatePhoneNumber(value));
    }
  };

  const handlePrivacyPolicyChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { checked } = event.target;
    setPrivacyPolicy(checked ? 1 : 0);
  };

  const handleTradePolicyChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { checked } = event.target;
    setTradePolicy(checked ? 1 : 0);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario si es necesario
  };

  // Mostrar loading mientras se cargan las imágenes críticas
  if (!allImagesLoaded) {
    return <LoadingScreen isLoading={true} />;
  }

  return (
    <HomeTemplate>
      <div className="home__container">
        <form onSubmit={handleSubmit}>
          <div className="home__sub-container">
            <div>
              <LazyImage
                className="home__image"
                src={homeImage}
                alt="Home Image"
                loading="eager"
                animationDelay="delayed-2"
              />
            </div>
            <div>
              <ContainerForm
                documentNumber={documentNumber}
                numberPhone={numberPhone}
                privacyPolicy={privacyPolicy}
                tradePolicy={tradePolicy}
                isQuoteDisabled={isQuoteDisabled}
                handleDocumentNumberChange={handleDocumentNumberChange}
                handleNumberPhoneChange={handleNumberPhoneChange}
                handlePrivacyPolicyChange={handlePrivacyPolicyChange}
                handleTradePolicyChange={handleTradePolicyChange}
                handleCotizarClick={handleCotizarClick}
                documentError={documentError}
                phoneError={phoneError}
              />
            </div>
          </div>
        </form>
      </div>
    </HomeTemplate>
  );
};
