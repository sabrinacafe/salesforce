"use client";

import React from 'react';
import Image from 'next/image';
import ChatBotImage from '../../../public/assets/support/ChatBot.png';
import SupportImage from '../../../public/assets/support/support.jpg';

const Suporte: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-[#032D60] my-8">Entre em contato</h1>

      <div className="w-full max-w-4xl bg-white p-8 shadow-md rounded-md flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-[#032D60]">Nosso telefone:</h2>
        <p className="text-xl text-black mb-4">0800 891 1887</p>

        <div className="mb-8 w-full">
          <Image src={SupportImage} alt="Support Image" layout="responsive" className="rounded-md" />
        </div>

        <h2 className="text-2xl font-semibold text-[#032D60]">Utilize o nosso chatbot para tirar suas principais dúvidas:</h2>
        <p className="text-center text-lg text-black mb-8">
          Se não encontrar a resposta esperada, preencha nosso formulário no chatbot para que nossa equipe possa entrar em contato contigo o mais rápido possível.
        </p>

        <div className="mb-8 w-full">
          <Image src={ChatBotImage} alt="ChatBot Image" layout="responsive" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Suporte;
