import { useEffect } from "react";
import { Button, Dash } from "../components/atoms";
import { AppHeader, Timeline, TimelineMobile } from "../components";
import useApi from "../hooks/useApi";
import SectionInfo from "../sections/Inforation";
import "../styles/pages.scss";
import { Link } from "react-router-dom";
import LoadingPage from "./Loading";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { PlansData, UserData } from "../types/style-interfaces";

const Oferts = () => {
  const apiUrlUser = import.meta.env.VITE_API_BASE_URL + "/api/user.json";
  const apiUrlPlans = import.meta.env.VITE_API_BASE_URL + "/api/plans.json";
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {
    data: userData,
    loading: userLoading,
    error: userError,
    fetchData: fetchUserData,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useApi<UserData>(apiUrlUser);
  const {
    data: plansData,
    loading: plansLoading,
    error: plansError,
    fetchData: fetchPlansData,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useApi<PlansData>(apiUrlPlans);

  useEffect(() => {
    fetchUserData();
    fetchPlansData();
    if (userError || plansError) {
      console.log(userError);
      console.log(plansError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!userLoading && userData) {
      // Despacha la acción addUser con los datos del usuario
      dispatch(addUser(userData));
    }
  }, [userData, userLoading, dispatch]);

  return (
    <>
      {userLoading && plansLoading === true ? (
        <LoadingPage />
      ) : (
        <>
          <AppHeader />
          <div className="timeline-flex-container" style={{ background: "#EDEFFC" }}>
            <Timeline activeStep={1} text="Planes y coberturas" />
            <Dash />
            <Timeline activeStep={2} text="Resumen" />
            <TimelineMobile></TimelineMobile>
          </div>
          <div className="page-container">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Button variant="back" onClick={() => window.history.back()}>Volver</Button>
            </Link>
            <SectionInfo
              name={userData?.name || ""}
              dataPlans={plansData?.list || []}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Oferts;
