import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OfferTemplate } from "../components/templates";
import { Button } from "../components/atoms";
import useApi from "../hooks/useApi";
import SectionInfo from "../components/organisms/SectionInfo/SectionInfo";
import "../styles/pages.scss";
import LoadingPage from "./Loading";
import { useAppDispatch } from "../redux/store";
import { addUser } from "../redux/userSlice";
import { PlansResponse, UserFormData } from "../types";

const Oferts = () => {
  const apiUrlUser = import.meta.env.VITE_API_BASE_URL + "/api/user.json";
  const apiUrlPlans = import.meta.env.VITE_API_BASE_URL + "/api/plans.json";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    data: userData,
    loading: userLoading,
    error: userError,
    fetchData: fetchUserData,
  } = useApi<UserFormData>(apiUrlUser);

  const {
    data: plansData,
    loading: plansLoading,
    error: plansError,
    fetchData: fetchPlansData,
  } = useApi<PlansResponse>(apiUrlPlans);

  useEffect(() => {
    fetchUserData();
    fetchPlansData();
    if (userError || plansError) {
      console.log(userError);
      console.log(plansError);
    }
  }, [fetchUserData, fetchPlansData, userError, plansError]);

  useEffect(() => {
    if (!userLoading && userData?.name) {
      // Despacha la acción addUser con los datos del usuario
      dispatch(addUser({ name: userData.name }));
    }
  }, [userData, userLoading, dispatch]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      {userLoading && plansLoading ? (
        <LoadingPage />
      ) : (
        <OfferTemplate currentStep={1}>
          <div className="page-container">
            <Button
              variant="back"
              onClick={handleBack}
              className="page-container__back-button"
            >
              Volver
            </Button>
            <SectionInfo
              name={userData?.name || ""}
              dataPlans={plansData?.list || []}
            />
          </div>
        </OfferTemplate>
      )}
    </>
  );
};

export default Oferts;
