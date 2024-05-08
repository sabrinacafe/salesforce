import React from 'react';

interface ButtonBlueProps {
  text: string;
  className?: string;  // Permite que classes adicionais sejam passadas para o componente
}

const ButtonBlue: React.FC<ButtonBlueProps> = ({ text, className }) => (
  <button className={`rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 ${className}`}>
    {/* Span para efeito visual dinâmico */}
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease"></span>
    <span className="relative">{text}</span>  {/* Texto do botão */}
  </button>
);

export default ButtonBlue;

