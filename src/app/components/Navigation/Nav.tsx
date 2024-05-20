import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoImg from "../../../../public/assets/NavBar/Salesforce-logo.png";
import ButtonBlue from "../Button/ButtonBlue";
import ButtonGreen from "../Button/ButtonGreen";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <>
      <nav className="h-[12vh] bg-white shadow-md w-full fixed top-0 z-50">
        <div className="w-full max-w-7xl flex items-center justify-between mx-auto h-[12vh] px-4">
          <Link href="/">
            <Image src={LogoImg} alt="LogoSalesForce" width={150} height={50} />
          </Link>
          <ul className="hidden lg:flex items-center space-x-6">
            <li className="text-[17px] cursor-pointer hover:text-[#00A1E0] transition-all duration-200">
              <Link href="/Produtos">Produtos</Link>
            </li>
            <li className="text-[17px] cursor-pointer hover:text-[#00A1E0] transition-all duration-200">
              <Link href="/Suporte">Suporte</Link>
            </li>
            <li className="text-[17px] cursor-pointer hover:text-[#00A1E0] transition-all duration-200">
              <Link href="/SobreNos">Sobre nós</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-2 md:space-x-5">
            <Link href="/Entre">
              <ButtonBlue text="Entre" />
            </Link>
            <Link href="/CriarConta">
              <ButtonGreen text="Cadastre-se" />
            </Link>
            <Bars3BottomRightIcon
              onClick={openNav}
              className="w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
