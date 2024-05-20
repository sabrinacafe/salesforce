import React from 'react';
import Image from "next/image";
import AnalyticsImg from "../../../../public/assets/Hero/analytics.svg";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mt-40"> 
      <div className="w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 items-center gap-8">
        <div className="col-span-2 mt-12 md:mt-0"> 
          <h1
            data-aos="fade-right"
            className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-[#02073e] leading-tight md:leading-normal"
          >
            Revolucione a Gestão de Clientes com a Salesforce
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="md:text-lg text-base mb-6 text-black opacity-90 font-light"
          >
            Com a Salesforce, aprimore sua capacidade de resposta às demandas do mercado e tome decisões embasadas em dados concretos. 
            Nossas ferramentas de CRM são o motor para um crescimento robusto e contínuo, pavimentando o caminho para o sucesso em um cenário de negócios cada vez mais competitivo. 
            Junte-se à comunidade Salesforce e veja seu negócio decolar.
          </p>
        </div>
        <div
          data-aos="left"
          data-aos-delay="600"
          className="col-span-3 flex justify-center lg:justify-end mt-12 lg:mt-0" 
        >
            <Image src={AnalyticsImg} alt="Analytics" width={500} height={500} className="w-full max-w-md lg:max-w-none" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
