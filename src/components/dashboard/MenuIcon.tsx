import React from 'react';

export const MenuIcon: React.FC = () => {
  return (
    <div className="rounded border shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] bg-white flex w-[326px] max-w-full flex-col justify-center mt-3 px-[65px] py-2 border-solid border-[#E3E8EF]">
      <div className="flex h-5 w-[19px] flex-col items-center justify-center">
        <img
          src="https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/872335e85d8bd3a48316351c81e3c71cb79fce62?placeholderIfAbsent=true"
          alt="Menu"
          className="aspect-[1] object-contain w-full"
        />
      </div>
    </div>
  );
};
