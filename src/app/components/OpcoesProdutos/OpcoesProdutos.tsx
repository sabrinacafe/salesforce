import React from "react";
import ProductButton from "../ProductButtons/ProductButtons";

const produtos = [
    { icon: "/assets/ProductsExemples/ia.svg", label: "IA" },
    { icon: "/assets/ProductsExemples/sales-day.svg", label: "Vendas" },
    { icon: "/assets/ProductsExemples/integration-day.svg", label: "Atendimento ao Cliente" },
    { icon: "/assets/ProductsExemples/marketing-day.svg", label: "Marketing" },
    { icon: "/assets/ProductsExemples/commerce-day.svg", label: "Commerce" },
    { icon: "/assets/ProductsExemples/cloud.svg", label: "Nuvem de Dados" },
    { icon: "/assets/ProductsExemples/placeholder1.svg", label: "Tableau" },
    { icon: "/assets/ProductsExemples/integration-day.svg", label: "Mulesoft" },
    { icon: "/assets/ProductsExemples/slack.svg", label: "Slack" },
    { icon: "/assets/ProductsExemples/platform-day.svg", label: "Plataforma" },
    { icon: "/assets/ProductsExemples/products-sustainability-day.svg", label: "Net Zero" },
    { icon: "/assets/ProductsExemples/product-smb-day.svg", label: "Pequenas Empresas" },
    { icon: "/assets/ProductsExemples/parceiros.svg", label: "Parceiros" },
    { icon: "/assets/ProductsExemples/sucess-day.svg", label: "Sucesso" }
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
