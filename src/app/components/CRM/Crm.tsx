"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import CrmImg from '../../../../public/assets/CRM/crm.svg';

const Crm: React.FC = () => {
    const crmContentRef = useRef<HTMLDivElement>(null);
    const crmImgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const fadeIn = (element: HTMLDivElement) => {
                if (element && isInViewport(element)) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0px)';
                }
            };

            if (crmContentRef.current && crmImgRef.current) {
                fadeIn(crmContentRef.current);
                fadeIn(crmImgRef.current);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isInViewport = (element: HTMLDivElement) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    return (
        <div className="bg-gradient-to-b from-[#032D60] to-[#00A1E0] min-h-[55vh] flex items-center justify-center">
            <div className="w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div ref={crmContentRef} className="opacity-0 translate-y-12 transition duration-600 ease-out">
                    <h2 className="text-3xl md:text-4xl text-white leading-tight">
                        O que é CRM ?
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-white font-light">
                        CRM, ou Gestão de Relacionamento com o Cliente, é uma tecnologia para gerenciar todas as relações e interações da sua empresa com clientes e potenciais clientes. O objetivo é melhorar os relacionamentos comerciais. Um sistema CRM ajuda as empresas a ficarem conectadas a clientes, otimizar processos e melhorar a lucratividade.
                    </p>
                </div>
                <div ref={crmImgRef} className="opacity-0 translate-y-12 transition duration-600 ease-out flex justify-center md:justify-end">
                    <Image src={CrmImg} alt="CRM" width={500} height={500} className="w-full max-w-md md:max-w-none" />
                </div>
            </div>
        </div>
    );
};

export default Crm;