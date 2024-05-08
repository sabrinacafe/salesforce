import React from "react";
import FeatureCard from "./TrailheadCard"; // Garanta que o caminho esteja correto.
import Icon1 from "@/public/images/artificial-intelligence.png";
import Icon2 from "@/public/images/user-interface.png";
import Icon3 from "@/public/images/medal.png";

const FeaturesSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FeatureCard
          image={Icon1.src}
          title="Noções básicas de inteligência artificial"
          description="Aprenda as noções básicas de IA e a tecnologia por trás dos seus recursos incríveis."
        />
        <FeatureCard
          image={Icon2.src}
          title="Noções básicas do Salesforce Einstein"
          description="Descubra insights e preveja resultados com esse avançado conjunto de recursos aprimorados de IA."
        />
        <FeatureCard
          image={Icon3.src}
          title="IA generativa do Einstein: início rápido"
          description="Descubra como a IA generativa e o Einstein estão transformando o futuro do trabalho."
        />
      </div>
    </div>
  );
};

export default FeaturesSection;

