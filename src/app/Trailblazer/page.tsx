"use client";

import React from 'react';
import Image from 'next/image';
import trilhaImage from '../../../public/assets/Trailblazer/trilha.png';

const Trailblazer: React.FC = () => {
  return (
    <div className="bg-white text-black p-6 md:p-12 mt-16"> {/* Adicionada margem superior à div principal */}
      <section className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8">
        <div className="flex-1 mt-16 lg:mt-0"> {/* Adicionada margem superior ao texto */}
          <h1 className="text-4xl font-bold text-[#032D60] mb-4">Todos podem ser um Trailblazer com o Salesforce.</h1>
          <h4 className="text-xl font-semibold text-black mb-2">O que é um Trailblazer?</h4>
          <p className="text-md text-black italic mb-4">/treyl-bley-zer/substantivo</p>
          <p className="text-md text-black mb-2">
            1. um pioneiro; um inovador; um aprendiz ao longo da vida; um motor e agitador.
          </p>
          <p className="text-md text-black mb-2">
            2. um líder que deixa um caminho para outros seguirem.
          </p>
          <p className="text-md text-black mb-4">
            3. mais importante, uma pessoa que constrói um mundo melhor para os outros.
          </p>
          <a href="https://trailhead.salesforce.com/pt-BR/trailblazer-community/feed" className="inline-block bg-[#032D60] text-white py-2 px-4 rounded-full shadow-lg transition transform hover:scale-105">
            EXPLORE A COMUNIDADE
          </a>
        </div>
        <div className="flex-1 mb-8 lg:mb-0 mt-16 lg:mt-0"> {/* Ajustada margem superior da imagem */}
          <Image src={trilhaImage} alt="Trilha" className="rounded-md" layout="responsive" />
        </div>
      </section>
    </div>
  );
};

export default Trailblazer;
