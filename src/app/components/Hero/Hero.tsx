import React from 'react';
import Image from "next/image";
import AnalyticsImg from "../../../../public/assets/Hero/analytics.svg";

const Hero = () => {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
        <div className="col-span-2 mr-8 lg:mr-16">
          <h1
            data-aos="fade-right"
            className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]"
          >
            Revolucione a Gestão de Clientes com a Salesforce
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="md:text-[17px] text-[15px] mb-[2rem] text-black opacity-90 font-[400]"
          >
            Com a Salesforce, aprimore sua capacidade de resposta às demandas do mercado e tome decisões embasadas em dados concretos. 
            Nossas ferramentas de CRM são o motor para um crescimento robusto e contínuo, pavimentando o caminho para o sucesso em um cenário de negócios cada vez mais competitivo. 
            Junte-se à comunidade Salesforce e veja seu negócio decolar.
          </p>
        </div>
        <div
          data-aos="left"
          data-aos-delay="600"
          className="col-span-3 hidden sm:block ml-8 lg:ml-16" 
        >
            <Image src={AnalyticsImg} alt="Analytics" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
