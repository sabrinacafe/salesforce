import React from "react";

const Footer = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] items-start">
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            Empresa
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-[#00A1E0]">
            Sobre
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-[#00A1E0]">
            Blog
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-[#00A1E0]">
            Imprensa
          </p>
        </div>
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            Minha Conta
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-[#00A1E0]">
            Mídias Sociais
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-[#00A1E0]">
            Permissões
          </p>
        </div>
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            Nossas Informações
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-[#00A1E0]">
            Política de Privacidade
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-[#00A1E0]">
            Termos & Condições
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-[#00A1E0]">
            Mapa do Site
          </p>
        </div>
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            Sobre Nós
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-[#00A1E0]">
            Centro de Suporte
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-[#00A1E0]">
            Suporte ao Cliente
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-[#00A1E0]">
            Direitos Autorais
          </p>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-[1rem] text-[15px] opacity-75">
        Copyright © 2024 by Mind Makers LUIS HENRIQUE RM 552692 SABRINA CAFÉ RM 553698 JOÃO PEDRO RM 553698
      </div>
    </div>
  );
};

export default Footer;
