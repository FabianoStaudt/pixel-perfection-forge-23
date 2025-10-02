import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="items-stretch shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] flex w-full flex-col overflow-hidden text-base text-[#3859FF] font-semibold leading-7 justify-center bg-white px-4 py-2">
      <div className="flex w-full items-center">
        <div className="items-center rounded self-stretch flex gap-2 flex-1 shrink basis-[0%] bg-white my-auto">
          <div className="self-stretch flex w-full items-center gap-2 flex-1 shrink basis-[0%] my-auto">
            <div className="text-[#3859FF] self-stretch my-auto">
              Vendas E-commerce
            </div>
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/20b8fe7c2e88ef2f9ec23986263c3213039caf41?placeholderIfAbsent=true"
          alt="Company Logo"
          className="aspect-[4.13] object-contain w-[132px] self-stretch shrink-0 my-auto"
        />
      </div>
    </header>
  );
};
