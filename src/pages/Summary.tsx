import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SummaryCard } from "../components/molecules";
import { OfferTemplate } from "../components/templates";
import { Button } from "../components/atoms";
import useApi from "../hooks/useApi";
import "../styles/pages.scss";
import LoadingPage from "./Loading";
import { useAppSelector } from "../redux/store";
import { selectUserData, selectSelectedPlan } from "../redux/Selector";
import { UserFormData } from "../types";

const Summary = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "/api/user.json";
  const { data, loading, error, fetchData } = useApi<UserFormData>(apiUrl);
  const navigate = useNavigate();
  const userData = useAppSelector(selectUserData);
  const selectedPlan = useAppSelector(selectSelectedPlan);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    fetchData();
  }, [error, fetchData]);

  useEffect(() => {
    if (userData.dni === "" || selectedPlan.price === 0) {
      navigate("/");
    }
  }, [userData, selectedPlan, navigate]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <OfferTemplate currentStep={2}>
          <div className="summary-container">
            <Button
              variant="back"
              onClick={handleBack}
              className="summary-container__back-button"
            >
              Volver
            </Button>
            <SummaryCard
              name={data?.name || ""}
              lastName={data?.lastName || ""}
              dni={userData?.dni || ""}
              phone={userData?.phone || ""}
              plan={selectedPlan?.name || ""}
              price={selectedPlan.price.toString()}
            />
          </div>
        </OfferTemplate>
      )}
    </>
  );
};

export default Summary;
