import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Oferts from "./pages/Oferts";
import Summary from "./pages/Summary";
import WorkInProgress from "./pages/WorkInProgress";
import "./App.css";

const App = () => {
  return (
    <div className="app-layout">
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oferts-user" element={<Oferts />} />
          <Route path="/oferts-user/summary-user" element={<Summary />} />
          <Route path="/work-in-progress" element={<WorkInProgress />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
