"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import CircleImg from '../../../../public/assets/CaracteristicsCrm/Circulo.png'; // Ajuste o caminho conforme necessário

const Caracteristics: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const paragraphs = [
        "Descubra o poder do CRM com a Salesforce: sua aliada na jornada de transformação do relacionamento com clientes. Nossa plataforma líder de mercado proporciona uma visão 360º de cada cliente, permitindo personalização sem precedentes e interações mais inteligentes. Simplifique processos, potencialize vendas e cultive clientes satisfeitos com soluções que falam a língua do seu negócio.",
        "Juntos, conectamos as empresas aos seus clientes. Utilizando o Salesforce Customer 360, nossa plataforma de CRM integrada, sua empresa oferece experiências personalizadas para seus clientes. Nossa solução fornece produtos poderosos e conectados para melhorar seu marketing, vendas, commerce, atendimento ao cliente, TI e muito mais."
    ];

    return (
        <div className="bg-white py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center mx-auto max-w-7xl px-4">
                <div>
                    <h2 className="text-3xl md:text-4xl text-[#032D60] mb-4">
                        O que é a Salesforce faz?
                    </h2>
                    <div className="relative overflow-hidden" style={{ minHeight: "6rem" }}>
                        {paragraphs.map((text, index) => (
                            <p
                                key={index}
                                className={`absolute top-0 transition-all duration-700 ease-in-out transform ${
                                    index === activeIndex ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
                                } text-lg md:text-base text-black font-light mb-4 w-full`}
                            >
                                {text}
                            </p>
                        ))}
                    </div>
                    <div className="flex space-x-4 mt-8">
                        {paragraphs.map((_, index) => (
                            <button
                                key={index}
                                className={`h-2.5 w-2.5 rounded-full ${index === activeIndex ? 'bg-[#032D60]' : 'bg-gray-400'}`}
                                onClick={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="relative mt-8 md:mt-0">
                    <Image src={CircleImg} alt="about Salesforce" width={500} height={500} />
                </div>
            </div>
        </div>
    );
};

export default Caracteristics;

