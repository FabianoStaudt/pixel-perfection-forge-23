import React from 'react';

interface SelloutCardProps {
  title: string;
  total: string;
  metaProporcional: string;
  ly: string;
  deltaLY: string;
  deltaMeta: string;
  margemBruta: string;
  receitaPaga: string;
  chartImage: string;
}

export const SelloutCard: React.FC<SelloutCardProps> = ({
  title,
  total,
  metaProporcional,
  ly,
  deltaLY,
  deltaMeta,
  margemBruta,
  receitaPaga,
  chartImage,
}) => {
  return (
    <div className="rounded border shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] bg-white flex items-stretch gap-[18px] mt-1.5 px-[17px] py-[13px] border-solid border-[#E3E8EF]">
      <div>
        <div className="flex items-start gap-1">
          <div className="flex flex-col items-stretch flex-1">
            <div className="text-[#3859FF] text-lg font-semibold leading-loose">
              {title}
            </div>
            <div className="text-[#4B5565] text-xs font-light leading-loose mt-[11px]">
              Total
            </div>
          </div>
          <div className="text-[#4B5565] text-[11px] font-light leading-[3] mt-[39px]">
            Meta proporcional
          </div>
        </div>
        <div className="flex items-stretch gap-[18px] text-xs font-bold mt-[5px]">
          <div className="flex flex-col text-[#4B5565] flex-1">
            <div className="text-[#4B5565] text-base leading-loose self-stretch">
              {total}
            </div>
            <div className="text-[#4B5565] font-light mt-[15px]">
              LY
            </div>
            <div className="text-[#4B5565]">
              {ly}
            </div>
            <div className="text-[#4B5565] font-light leading-loose mt-[17px]">
              Margem bruta
            </div>
            <div className="text-[#4B5565] leading-loose">
              {margemBruta}
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-[#4B5565] text-base leading-loose self-stretch">
              {metaProporcional}
            </div>
            <div className="flex items-stretch gap-[23px] text-[#4B5565] font-light whitespace-nowrap leading-loose mt-[15px]">
              <div className="text-[#4B5565]">
                ΔLY
              </div>
              <div className="text-[#4B5565]">
                ΔMeta
              </div>
            </div>
            <div className="flex items-stretch gap-[19px] whitespace-nowrap mt-1">
              <div className="text-[#4B5565]">
                {deltaLY}
              </div>
              <div className="text-[#B20101]">
                {deltaMeta}
              </div>
            </div>
            <div className="text-[#4B5565] font-light mt-[17px]">
              Receita paga
            </div>
            <div className="text-[#4B5565]">
              {receitaPaga}
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-[#4B5565] font-light leading-loose mt-[38px]">
        <div className="text-[#4B5565]">
          Meta atingida
        </div>
        <img
          src={chartImage}
          alt="Meta atingida chart"
          className="aspect-[1] object-contain w-[75px] mt-[13px]"
        />
      </div>
    </div>
  );
};
