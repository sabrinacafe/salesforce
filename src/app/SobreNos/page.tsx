import React from 'react';
import Image from 'next/image';
import NossaHistoria1 from '../../../public/assets/SobreNos/NossaHistoria1.png';
import NossaHistoria2 from '../../../public/assets/SobreNos/NossaHistoria2.png';
import Salto1 from '../../../public/assets/SobreNos/Salto1.png';
import Salto2 from '../../../public/assets/SobreNos/Salto2.png';

const SobreNos = () => {
  return (
    <div className="bg-white text-black p-6 md:p-12 mt-20"> {/* Adicionada margem superior */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-[#032D60] mb-4">Construímos pontes entre empresas e clientes</h1>
        <p className="text-lg mb-8">
          As empresas são bem-sucedidas quando criam uma conexão significativa. Nossa missão é entregá-la. Ajudamos a unir cada departamento para nos concentrarmos melhor nos clientes com o Customer 360, o CRM nº 1 do mundo. Permitimos que todos, em todas as equipes, compartilhem uma única fonte de verdade com recursos de colaboração integrados que orientam conversas e decisões essenciais exatamente onde as pessoas trabalham. E com o Tableau, ajudamos as empresas a descobrir percepções profundas e a tomar ações orientadas por dados para melhor atender seus clientes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src={NossaHistoria1} alt="Nossa História 1" className="rounded-md" />
          <Image src={NossaHistoria2} alt="Nossa História 2" className="rounded-md" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#032D60] mb-4">
          Cada produto que oferecemos desempenha um papel na construção de conexões que impulsionam o sucesso, e esse sucesso pode ser aproveitado para criar mudanças positivas.
        </h2>
        <h3 className="text-2xl font-semibold text-[#032D60] mt-8 mb-4">Um salto para a nuvem. Um salto de confiança.</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src={Salto1} alt="Salto 1" className="rounded-md" />
          <Image src={Salto2} alt="Salto 2" className="rounded-md" />
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-[#032D60] mt-8 mb-4">A nuvem nasceu.</h3>
        <p className="text-lg mb-8">
          Em 1999, quatro fundadores da Salesforce, trabalhando lado a lado em um pequeno apartamento de São Francisco, lançaram um sistema de gerenciamento de relacionamento com o cliente (CRM) com uma abordagem inovadora. Todo o software e os dados críticos do cliente seriam hospedados na Internet e disponibilizados como um serviço de assinatura. Esse modelo pioneiro de “software como serviço”, ou SaaS, se espalhou rapidamente pelo setor de tecnologia.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-[#032D60] mt-8 mb-4">Cultivando a confiança.</h3>
        <p className="text-lg">
          Os primeiros a adotar nosso modelo baseado em nuvem deram um salto significativo de fé. Havia apenas uma fórmula para ganhar a confiança, ou seja, criando relacionamentos confiáveis. Ao longo das décadas, nosso produto cresceu em escala e sofisticação. Agora fornecemos serviços essenciais para muitas das maiores e mais críticas empresas, governos e organizações do mundo. A confiança é uma mercadoria cada vez mais valiosa. Os relacionamentos são dourados.
        </p>
      </section>
    </div>
  );
};

export default SobreNos;
