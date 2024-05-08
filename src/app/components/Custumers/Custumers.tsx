import Image from "next/image";
import React from "react";
import CompanyImg from "../../../../public/assets/Custumers/Clientes.png";

const Company = () => {
  return (
    <div className="pt-[6rem] pb-[3rem] ">
      <h1 className="mb-[1.5rem] font-bold text-[22px] text-center md:text-[30px] text-[#02073e]">
        Nossos Clientes
      </h1>
      <p className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-[17px] text-center text-gray-950 opacity-80">
      Clientes que utilizam Salesforce em suas empresas e veja como seu negócio pode obter ótimos resultados.
      </p>
      <div className="mt-[2rem] text-center w-[80%] mx-auto">
        <Image src={CompanyImg} alt="company" />
      </div>
    </div>
  );
};

export default Company;
