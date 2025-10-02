import React from 'react';

interface BrandCardProps {
  logoSrc: string;
  logoAlt: string;
  total: string;
  deltaLY: string;
  ly: string;
  deltaMeta: string;
  margemBruta: string;
  receitaPaga: string;
}

export const BrandCard: React.FC<BrandCardProps> = ({
  logoSrc,
  logoAlt,
  total,
  deltaLY,
  ly,
  deltaMeta,
  margemBruta,
  receitaPaga,
}) => {
  return (
    <div className="rounded border shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] bg-white flex flex-col px-3 py-[13px] border-solid border-[#E3E8EF]">
      <img
        src={logoSrc}
        alt={logoAlt}
        className="aspect-[6.1] object-contain w-[122px]"
      />
      <div className="flex w-[94px] items-stretch gap-5 whitespace-nowrap leading-[2.8] justify-between mt-[19px]">
        <div className="text-[#4B5565]">
          Total
        </div>
        <div className="text-[#4B5565]">
          ΔLY
        </div>
      </div>
      <div className="flex items-stretch gap-[30px] font-bold">
        <div className="text-[#4B5565] leading-[2.8]">
          {total}
        </div>
        <div className="text-[#4B5565]">
          {deltaLY}
        </div>
      </div>
      <div className="self-stretch flex items-stretch gap-[11px] mt-[11px]">
        <div className="flex flex-col flex-1">
          <div className="text-[#4B5565]">
            LY
          </div>
          <div className="text-[#4B5565] font-bold">
            {ly}
          </div>
          <div className="text-[#4B5565] leading-[2.8] self-stretch mt-[13px]">
            Margem bruta
          </div>
          <div className="text-[#4B5565] font-bold leading-[2.8]">
            {margemBruta}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-[#4B5565] leading-[2.8]">
            ΔMeta
          </div>
          <div className="text-[#B20101] font-bold">
            {deltaMeta}
          </div>
          <div className="text-[#4B5565] self-stretch mt-3.5">
            Receita paga
          </div>
          <div className="text-[#4B5565] font-bold">
            {receitaPaga}
          </div>
        </div>
      </div>
    </div>
  );
};
