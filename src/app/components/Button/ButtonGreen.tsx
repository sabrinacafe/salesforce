import React from 'react';

interface ButtonGreenProps {
  text: string;
  className?: string; // Prop opcional que permite passar classes adicionais.
}

const ButtonGreen: React.FC<ButtonGreenProps> = ({ text, className }) => (
  <button className={`rounded-md px-3 py-1 text-[15px] md:px-4 md:py-2.5 overflow-hidden group bg-[#2e844a] relative hover:bg-gradient-to-r from-[#2e844a] to-[#2e844a] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#2e844a] transition-all ease-out duration-300 min-w-[120px] ${className}`}>
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease"></span>
    <span className="relative">{text}</span>
  </button>
);

export default ButtonGreen;



