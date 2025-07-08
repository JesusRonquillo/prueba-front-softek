import { FC } from "react";
import { LoadingScreen } from "../components/molecules";

interface LoadingPageProps {
  isLoading?: boolean;
}

const LoadingPage: FC<LoadingPageProps> = ({ isLoading = true }) => {
  return <LoadingScreen isLoading={isLoading} />;
};

export default LoadingPage;
