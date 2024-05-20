import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;        // Caminho da imagem
  title: string;        // Título do cartão
  description: string;  // Descrição associada ao cartão
}

const FeatureCard: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div className="text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
      <Image
        src={image}
        alt="icon"
        width={70}
        height={70}
        className="mx-auto"
      />
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-[#032D60]">
        {title}
      </h1>
      <p className="mt-[1rem] text-black opacity-90 text-[15px]">
        {description}
      </p>
      <Link href="/Trailblazer" legacyBehavior>
        <a className="mt-[1.4rem] text-blue-600 font-[500] cursor-pointer hover:text-blue-800">
          Comece a aprender
        </a>
      </Link>
    </div>
  );
};

export default FeatureCard;
