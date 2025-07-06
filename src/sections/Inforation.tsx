import React, { useState } from "react";
import { SelectionSection } from "../components/molecules";
import iconMe from "../assets/icon-for-me.svg";
import iconOther from "../assets/icon-for-other.svg";
import { Plans } from "./Plans";
// Removed react-spring dependency
import { SectionInfoProps } from "../types/style-interfaces";

const SectionInfo: React.FC<SectionInfoProps> = ({ name, dataPlans }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (optionId: string) => {
    setActiveCard(optionId === activeCard ? null : optionId);
  };

  // Removed animations for simplicity

  const selectionOptions = [
    {
      id: "Para mí",
      icon: <img src={iconMe} alt="Icono" />,
      title: "Para mí",
      description: "Cotiza tu seguro de salud y agrega familiares si así lo deseas."
    },
    {
      id: "Para alguien más",
      icon: <img src={iconOther} alt="Icono" />,
      title: "Para alguien más",
      description: "Realiza una cotización para uno de tus familiares o cualquier persona."
    }
  ];

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <SelectionSection
          title={`${name} ¿Para quién deseas cotizar?`}
          description="Selecciona la opción que se ajuste más a tus necesidades."
          options={selectionOptions}
          activeOption={activeCard}
          onOptionSelect={handleCardClick}
        />
        <div>
          {activeCard && (
            <Plans data={dataPlans} plan={activeCard === "Para mí" ? 1 : 2} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
