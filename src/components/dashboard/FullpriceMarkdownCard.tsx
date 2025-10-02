import React from 'react';

export const FullpriceMarkdownCard: React.FC = () => {
  return (
    <div className="rounded border shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] bg-white flex w-full max-w-[329px] flex-col items-stretch mt-1.5 px-3 py-4 border-solid border-[#E3E8EF]">
      <div className="flex items-stretch gap-3">
        <div className="flex flex-col text-xs text-[#4B5565] font-bold">
          <div className="text-[rgba(39,62,178,1)] font-semibold leading-loose">
            Fullprice
          </div>
          <div className="text-[#4B5565] text-sm leading-loose self-stretch mt-2.5">
            R$ 3.23MM
          </div>
          <div className="text-[#4B5565] font-light mt-3">
            LY
          </div>
          <div className="text-[#4B5565]">
            R$ 8.50MM
          </div>
        </div>
        <div className="text-[8px] text-[#4B5565] font-light my-auto">
          <div className="text-[#4B5565]">
            % do total
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/a3ef90e7171a5640bc01dfdbeafa5d6e28c181da?placeholderIfAbsent=true"
            alt="Fullprice percentage chart"
            className="aspect-[1] object-contain w-[51px] mt-2.5"
          />
        </div>
        <div className="border w-px shrink-0 h-[70px] border-[rgba(227,232,239,1)] border-solid" />
        <div>
          <div className="flex items-stretch gap-5 justify-between">
            <div className="text-[rgba(39,62,178,1)] text-xs font-semibold leading-loose">
              Markdown
            </div>
            <div className="text-[#4B5565] text-[8px] font-light">
              % do total
            </div>
          </div>
          <div className="flex items-stretch gap-[11px] text-xs text-[#4B5565] font-bold mt-[9px]">
            <div className="flex flex-col">
              <div className="text-[#4B5565] text-sm leading-loose self-stretch">
                R$ 3.23MM
              </div>
              <div className="text-[#4B5565] font-light mt-3">
                LY
              </div>
              <div className="text-[#4B5565]">
                R$ 8.50MM
              </div>
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/dbb0ed5a96e78b9e18dfc80c9c4f892927e9a155?placeholderIfAbsent=true"
              alt="Markdown percentage chart"
              className="aspect-[1] object-contain w-[51px] shrink-0"
            />
          </div>
        </div>
      </div>
      <div className="text-[#3859FF] text-xs font-semibold leading-none self-center mt-[18px]">
        <span className="font-light text-[rgba(75,85,101,1)]">
          A média de desconto corresponde à{" "}
        </span>
        15%
      </div>
    </div>
  );
};
