import React from "react";
import ProductButton from "@/app/components/ProductButtons/ProductButtons";

const produtos = [
  { icon: "/assets/ProductsExamples/ia.svg", label: "IA" },
  { icon: "/assets/ProductsExamples/sales-day.svg", label: "Vendas" },
  { icon: "/assets/ProductsExamples/integration-day.svg", label: "Atendimento ao Cliente" },
  { icon: "/assets/ProductsExamples/marketing-day.svg", label: "Marketing" },
  { icon: "/assets/ProductsExamples/commerce-day.svg", label: "Commerce" },
  { icon: "/assets/ProductsExamples/cloud.svg", label: "Nuvem de Dados" },
  { icon: "/assets/ProductsExamples/placeholder1.svg", label: "Tableau" },
  { icon: "/assets/ProductsExamples/integration-day.svg", label: "Mulesoft" },
  { icon: "/assets/ProductsExamples/slack.svg", label: "Slack" },
  { icon: "/assets/ProductsExamples/platform-day.svg", label: "Plataforma" },
  { icon: "/assets/ProductsExamples/products-sustainability-day.svg", label: "Net Zero" },
  { icon: "/assets/ProductsExamples/product-smb-day.svg", label: "Pequenas Empresas" },
  { icon: "/assets/ProductsExamples/parceiros.svg", label: "Parceiros" },
  { icon: "/assets/ProductsExamples/sucess-day.svg", label: "Sucesso" }
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