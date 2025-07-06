import React from "react";
import { PlansCarousel } from "../components/organisms";

export const Plans: React.FC<{
  data: Array<{
    name: string;
    price: number;
    description: string[];
    age: number;
  }>;
  plan: number;
}> = ({ data, plan }) => {
  return <PlansCarousel data={data} plan={plan} />;
};
