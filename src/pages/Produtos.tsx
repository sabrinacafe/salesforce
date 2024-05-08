import React from "react";
import ProductButton from "@/app/components/ProductButtons/ProductButtons";


const produtos = [
    { icon: "./public/images/ia.svg", label: "IA" },
    { icon: "./public/images/sales-day.svg", label: "Vendas" },
    { icon: "./public/images/integration-day.svg", label: "Atendimento ao Cliente" },
    { icon: "./public/images/marketing-day.svg", label: "Marketing" },
    { icon: "./public/images/commerce-day.svg", label: "Commerce" },
    { icon: "./public/images/cloud.svg", label: "Nuvem de Dados" },
    { icon: "./public/images/placeholder1.svg", label: "Tableau" },
    { icon: "./public/images/integration-day.svg", label: "Mulesoft" },
    { icon: "./public/images/slack.svg", label: "Slack" },
    { icon: "./public/images/plataform-day.svg", label: "Plataforma" },
    { icon: "./public/images/products-sustainability-day.svg", label: "Net Zero" },
    { icon: "./public/images/product-smb-day.svg", label: "Pequenas Empresas" },
    { icon: "./public/images/parceiros.svg", label: "Parceiros" },
    { icon: "./public/images/sucess-day.svg", label: "Sucesso" }
];

const Produtos: React.FC = () => {
    return (
        <div className="pt-10 pb-10 bg-white">
            <h2 className="text-2xl font-bold text-center mb-6">Selecione o Produto</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
                {produtos.map((produto, index) => (
                    <ProductButton key={index} icon={produto.icon} label={produto.label} />
                ))}
            </div>
        </div>
    );
};

export default Produtos;
