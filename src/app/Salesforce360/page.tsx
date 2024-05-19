"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';

const Customer360: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-blue-500">
      <header className="relative w-full h-96 md:h-[60vh] overflow-hidden">
        <Image
          src="../../../../public/assets/Salesforce360/360_salesforce.png" // Atualize o caminho da imagem
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute"
        />
      </header>
      <main className="flex flex-col items-center justify-center text-center p-6">
        <Transition
          show={isVisible}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mt-8">
              Agora todo mundo é um Einstein.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white">
              O Customer 360, todo o nosso portfólio de produtos, ajuda você a se conectar com seus clientes de uma maneira totalmente nova. Agora todos – suas equipes de marketing, vendas, e-commerce, serviços de atendimento ao cliente, TI e dados – podem trabalhar de maneira mais inteligente e ser mais produtivos com dados conectados, IA confiável e o CRM de IA nº 1.
            </p>
          </div>
        </Transition>
      </main>
    </div>
  );
};

export default Customer360;
