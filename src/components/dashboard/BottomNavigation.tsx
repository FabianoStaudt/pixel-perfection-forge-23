import React from 'react';

interface NavItemProps {
  icon: string;
  label: string;
  alt: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, alt }) => {
  return (
    <div className="items-center flex flex-col text-xs text-[#78849E] font-medium whitespace-nowrap text-center leading-[1.2] bg-white py-[11px]">
      <img
        src={icon}
        alt={alt}
        className="aspect-[1] object-contain w-6"
      />
      <div className="text-[#78849E] mt-1">
        {label}
      </div>
    </div>
  );
};

export const BottomNavigation: React.FC = () => {
  return (
    <nav className="bg-white flex items-stretch gap-px mt-3 px-px py-2 max-w-[329px] w-full" role="navigation" aria-label="Bottom navigation">
      <NavItem
        icon="https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/c3b236b53d700faab0c98c5e15dff62fac115254?placeholderIfAbsent=true"
        label="Filtros"
        alt="Filtros icon"
      />
      <NavItem
        icon="https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/6ce04a5905b60bdf93c9f9beb4d7f0143b09e7b9?placeholderIfAbsent=true"
        label="Personalizar"
        alt="Personalizar icon"
      />
      <div className="items-center flex min-h-16 flex-col bg-white py-[9px]">
        <div className="flex min-h-7 w-[33px] gap-1">
          <img
            src="https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/aaf37211376020793368e95e3937cc5d1da8022f?placeholderIfAbsent=true"
            alt="Notificações icon"
            className="aspect-[1.18] object-contain w-[33px]"
          />
        </div>
        <div className="text-[#78849E] text-center text-xs font-medium leading-[1.2] mt-1">
          Notificações
        </div>
      </div>
      <NavItem
        icon="https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/539d36c697b12a838622beb85cc46147b193dbf5?placeholderIfAbsent=true"
        label="Mais"
        alt="Mais icon"
      />
    </nav>
  );
};
