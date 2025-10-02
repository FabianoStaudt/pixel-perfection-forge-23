import React, { useState } from 'react';

interface ProductItemProps {
  imageSrc: string;
  productCode: string;
  receita: string;
  volume: string;
  giro: string;
  margem: string;
  isFirst?: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({
  imageSrc,
  productCode,
  receita,
  volume,
  giro,
  margem,
  isFirst = false,
}) => {
  return (
    <div className="flex items-stretch gap-3.5 text-[10px] text-[rgba(75,85,101,1)] font-semibold leading-[2.8] mt-3">
      <div className="relative">
        <img
          src={imageSrc}
          alt={`Product ${productCode}`}
          className="aspect-[1.33] object-contain w-[168px] min-h-[126px] shrink-0 max-w-full"
        />
        {isFirst && (
          <div className="absolute top-0 left-0 justify-center items-center bg-[#3859FF] flex w-[76px] flex-col p-1.5 text-[10px] text-white font-normal leading-loose">
            <div>Mais vendido</div>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="text-xs leading-loose self-stretch">
          {productCode}
        </div>
        <div className="font-light mt-3">
          Receita
        </div>
        <div className="text-sm leading-none">
          {receita}
        </div>
        <div className="font-light mt-[9px]">
          Volume
        </div>
        <div className="text-sm leading-none">
          {volume}
        </div>
        <div className="flex items-stretch gap-[27px] font-light whitespace-nowrap mt-[7px]">
          <div>Giro</div>
          <div>Margem</div>
        </div>
        <div className="flex items-stretch gap-4 text-sm whitespace-nowrap leading-none">
          <div>{giro}</div>
          <div>{margem}</div>
        </div>
      </div>
    </div>
  );
};

export const ProductRanking: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Última hora');

  const products = [
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/7be009bce3bbfce3cf43de5dbb0f8228cb0b6697?placeholderIfAbsent=true",
      productCode: "1069300150004U",
      receita: "R$ 399.900",
      volume: "521578",
      giro: "75%",
      margem: "22%",
    },
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/058b4f304a702af7dc0c8c0cedade190b8886dfe?placeholderIfAbsent=true",
      productCode: "1069300150004U",
      receita: "R$ 399.900",
      volume: "521578",
      giro: "75%",
      margem: "22%",
    },
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/058b4f304a702af7dc0c8c0cedade190b8886dfe?placeholderIfAbsent=true",
      productCode: "1069300150004U",
      receita: "R$ 399.900",
      volume: "521578",
      giro: "75%",
      margem: "22%",
    },
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/058b4f304a702af7dc0c8c0cedade190b8886dfe?placeholderIfAbsent=true",
      productCode: "1069300150004U",
      receita: "R$ 399.900",
      volume: "521578",
      giro: "75%",
      margem: "22%",
    },
    {
      imageSrc: "https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/058b4f304a702af7dc0c8c0cedade190b8886dfe?placeholderIfAbsent=true",
      productCode: "1069300150004U",
      receita: "R$ 399.900",
      volume: "521578",
      giro: "75%",
      margem: "22%",
    },
  ];

  return (
    <div className="rounded border shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] bg-white flex w-full max-w-[328px] flex-col items-stretch mt-1.5 px-3 py-2.5 border-solid border-[#E3E8EF]">
      <div className="flex items-stretch gap-3.5">
        <div>
          <div className="text-[rgba(75,85,101,1)] text-xs font-light leading-7">
            Top produtos da última hora
          </div>
          <div className="flex flex-col overflow-hidden relative aspect-[1.333] min-h-[126px] w-[168px] text-[10px] text-white font-normal leading-loose mt-[11px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/7be009bce3bbfce3cf43de5dbb0f8228cb0b6697?placeholderIfAbsent=true"
              alt="Top product"
              className="absolute h-full w-full object-cover inset-0"
            />
            <div className="relative justify-center items-center bg-[#3859FF] flex w-[76px] flex-col p-1.5">
              <div>Mais vendido</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="self-stretch w-full">
            <div className="items-center rounded border flex h-6 w-full gap-2 overflow-hidden bg-white pl-4 pr-2 border-solid border-[#E3E8EF]">
              <div className="text-[#4B5565] text-[10px] font-semibold leading-5 self-stretch flex-1 shrink basis-3 my-auto">
                {selectedPeriod}
              </div>
              <div className="rounded self-stretch flex items-center gap-2 overflow-hidden justify-center w-8 my-auto p-1.5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/21451d456f700c2d2f8c883836584be64831a130?placeholderIfAbsent=true"
                  alt="Dropdown arrow"
                  className="aspect-[1] object-contain w-5 self-stretch my-auto"
                />
              </div>
            </div>
          </div>
          <div className="text-[rgba(75,85,101,1)] text-xs font-semibold leading-loose mt-3.5">
            1069300150004U
          </div>
          <div className="text-[rgba(75,85,101,1)] text-[10px] font-light leading-[2.8] mt-2">
            Receita
          </div>
          <div className="text-[rgba(75,85,101,1)] text-sm font-semibold leading-none">
            R$ 399.900
          </div>
          <div className="text-[rgba(75,85,101,1)] text-[10px] font-light leading-[2.8] mt-[11px]">
            Volume
          </div>
          <div className="text-[rgba(75,85,101,1)] text-sm font-semibold leading-none">
            521578
          </div>
          <div className="flex items-stretch gap-[27px] text-[10px] text-[rgba(75,85,101,1)] font-light whitespace-nowrap leading-[2.8] mt-[9px]">
            <div>Giro</div>
            <div>Margem</div>
          </div>
          <div className="flex items-stretch gap-4 text-sm text-[rgba(75,85,101,1)] font-semibold whitespace-nowrap leading-none">
            <div>75%</div>
            <div>22%</div>
          </div>
        </div>
      </div>
      
      {products.map((product, index) => (
        <React.Fragment key={index}>
          <div className="border shrink-0 h-px mt-2 border-[rgba(227,232,239,1)] border-solid" />
          <ProductItem
            imageSrc={product.imageSrc}
            productCode={product.productCode}
            receita={product.receita}
            volume={product.volume}
            giro={product.giro}
            margem={product.margem}
            isFirst={index === 0}
          />
          {index === products.length - 1 && (
            <div className="text-[#9AA4B2] text-right text-[10px] font-normal leading-5 underline decoration-solid decoration-auto underline-offset-auto underline mt-[7px]">
              Exibir Todo o ranking
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
