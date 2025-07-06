import { useEffect, useState } from "react";
import { LoadingScreen } from "../components/molecules";

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  // Simulamos una carga de datos, podrías reemplazar esto con tu lógica real de carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulamos una carga de 3 segundos
    return () => clearTimeout(timer);
  }, []);

  return <LoadingScreen isLoading={loading} />;
};

export default LoadingPage;
