"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import salesforceImage from '../../../public/assets/Salesforce360/360_salesforce.png';

const Customer360: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="relative w-full h-[100vh] mt-20 overflow-hidden"> {/* Adicionada margem superior */}
        <Image
          src={salesforceImage}
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={100}
          className="absolute"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <button
            className="bg-[#032D60] text-white py-2 px-4 rounded-full shadow-lg transition transform hover:scale-105"
            onClick={handleButtonClick}
          >
            Saiba Mais
          </button>
        </div>
      </header>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-blue-500 text-[#032D60] p-6 rounded-lg max-w-lg mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Agora todo mundo é um Einstein.</h1>
            <p className="text-lg md:text-xl text-white">
              O Customer 360, todo o nosso portfólio de produtos, ajuda você a se conectar com seus clientes de uma maneira totalmente nova. Agora todos – suas equipes de marketing, vendas, e-commerce, serviços de atendimento ao cliente, TI e dados – podem trabalhar de maneira mais inteligente e ser mais produtivos com dados conectados, IA confiável e o CRM de IA nº 1.
            </p>
            <button
              className="mt-4 bg-white text-[#032D60] py-2 px-4 rounded-full shadow-lg transition transform hover:scale-105"
              onClick={handleCloseModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer360;
