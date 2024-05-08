import React from "react";

interface Props {
  headingMini: string;
  headingPrimary: string;
}

const SectionHeading = ({ headingPrimary, headingMini }: Props) => {
  return (
    <div className="text-center p-2">
        <h1 className="mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-[#02073e]">
        {headingPrimary}
        </h1>
        <p className="text-[#0b6cad] md:text-[16px] text-[15px]">{headingMini}</p>
      
    </div>
  );
};

export default SectionHeading;
