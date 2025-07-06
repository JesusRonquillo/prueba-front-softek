import { useEffect } from "react";
import { Button, Dash } from "../components/atoms";
import { AppHeader, Timeline, TimelineMobile, SummaryCard } from "../components";
import useApi from "../hooks/useApi";
import "../styles/pages.scss";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./Loading";
import { useSelector } from "react-redux";
import { selectUserData, selectSelectedPlan } from "../redux/Selector";
import { RootState } from "../types/style-interfaces";

const Summary = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL + "/api/user.json";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, loading, error, fetchData } = useApi<any>(apiUrl);
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => selectUserData(state));

  // Usar el selector para obtener el plan seleccionado
  const selectedPlan = useSelector((state: RootState) =>
    selectSelectedPlan(state)
  );

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (userData.dni === "" || selectedPlan.price === 0) {
      navigate("/");
    }
  }, [userData, selectedPlan, navigate]);
  const handleBack = () => {
    navigate(-1);
  };
  // Removed animation for simplicity

  return (
    <>
      {loading === true ? (
        <LoadingPage />
      ) : (
        <>
          <AppHeader />
          <div className="timeline-flex-container" style={{ background: "#EDEFFC" }}>
            <Timeline activeStep={2} text="Planes y coberturas" />
            <Dash />
            <Timeline activeStep={1} text="Resumen" />
            <TimelineMobile></TimelineMobile>
          </div>
          <div>
            <div className="summary-container">
              <Button variant="back" onClick={handleBack}>Volver</Button>
              <SummaryCard
                name={data?.name}
                lastName={data?.lastName}
                dni={userData?.dni}
                phone={userData?.phone}
                plan={selectedPlan?.name}
                price={selectedPlan.price.toString()}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Summary;
