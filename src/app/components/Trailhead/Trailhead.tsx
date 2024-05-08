import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import TrailheadCard from "./TrailheadCard";

const Features = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <SectionHeading
        headingPrimary="Aprenda habilidades valiosas gratuitamente com o Trailhead."
        headingMini="Siga os caminhos de aprendizado guiados e aprenda na prática as habilidades interpessoais, digitais e do Salesforce de qualquer lugar."
      />
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]">
        <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center">
          <TrailheadCard
            title="Noções básicas de inteligência artificial"
            image="/assets/Trailhead/artificial-intelligence.png"
            description="Aprenda as noções básicas de IA e a tecnologia por trás dos seus recursos incríveis."
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <TrailheadCard
            title="Noções básicas do Salesforce Einstein"
            image="/assets/Trailhead/user-interface.png"
            description="Descubra insights e preveja resultados com esse avançado conjunto de recursos aprimorados de IA."
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <TrailheadCard
            title="IA generativa do Einstein: início rápido"
            image="/assets/Trailhead/medal.png"
            description="Descubra como a IA generativa e o Einstein estão transformando o futuro do trabalho."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

