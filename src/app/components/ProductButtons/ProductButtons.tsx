import React from 'react';
import Image from 'next/image';
import Produtos from '../OpcoesProdutos/OpcoesProdutos';

interface ProductButtonProps {
    icon: string;
    label: string;
}

const ProductButton: React.FC<ProductButtonProps> = ({ icon, label }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-gray-100 rounded-full transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <Image src={icon} alt={label} width={40} height={40} layout="fixed" />
            </div>
            <p className="mt-2 text-sm text-gray-700">{label}</p>
        </div>
    );
};

export default ProductButton;
