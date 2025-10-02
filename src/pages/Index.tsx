import React from 'react';
import { Header } from '@/components/dashboard/Header';
import { PeriodSelector } from '@/components/dashboard/PeriodSelector';
import { MenuIcon } from '@/components/dashboard/MenuIcon';
import { SelloutCard } from '@/components/dashboard/SelloutCard';
import { BrandCard } from '@/components/dashboard/BrandCard';
import { HourlySalesChart } from '@/components/dashboard/HourlySalesChart';
import { FullpriceMarkdownCard } from '@/components/dashboard/FullpriceMarkdownCard';
import { ProductRanking } from '@/components/dashboard/ProductRanking';
import { BottomNavigation } from '@/components/dashboard/BottomNavigation';

const Index = () => {
  const brandData = [
    {
      logoSrc: "https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/cdde2bcc2eca3d2fdf473186e7fa5a9af96b2cb4?placeholderIfAbsent=true",
      logoAlt: "Brand 1 logo",
      total: "R$ 1.8MM",
      deltaLY: "36%",
      ly: "R$ 4.5MM",
      deltaMeta: "-7%",
      margemBruta: "60%",
      receitaPaga: "R$ 4.5MM",
    },
    {
      logoSrc: "https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/83868a97964b2c938fcb8bdb7a9ca05f1ba01aa1?placeholderIfAbsent=true",
      logoAlt: "Brand 2 logo",
      total: "R$ 1.8MM",
      deltaLY: "36%",
      ly: "R$ 4.5MM",
      deltaMeta: "-7%",
      margemBruta: "70%",
      receitaPaga: "R$ 4.5MM",
    },
    {
      logoSrc: "https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/75e088854a54d51d02cbf978a48da1ecfd9990bc?placeholderIfAbsent=true",
      logoAlt: "Brand 3 logo",
      total: "R$ 1.8MM",
      deltaLY: "36%",
      ly: "R$ 4.5MM",
      deltaMeta: "-7%",
      margemBruta: "60%",
      receitaPaga: "R$ 4.5MM",
    },
    {
      logoSrc: "https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/37f5777cadf02e300a48fbf266e522a52fc7626b?placeholderIfAbsent=true",
      logoAlt: "Brand 4 logo",
      total: "R$ 1.8MM",
      deltaLY: "36%",
      ly: "R$ 4.5MM",
      deltaMeta: "-7%",
      margemBruta: "70%",
      receitaPaga: "R$ 4.5MM",
    },
    {
      logoSrc: "https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/0f6e6067d90da97eeac5a75f2bdf542312fcc003?placeholderIfAbsent=true",
      logoAlt: "Brand 5 logo",
      total: "R$ 1.8MM",
      deltaLY: "36%",
      ly: "R$ 4.5MM",
      deltaMeta: "-7%",
      margemBruta: "60%",
      receitaPaga: "R$ 4.5MM",
    },
    {
      logoSrc: "https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/e5e8c55f9a85bcc28468a9e5198ef4deba984cf2?placeholderIfAbsent=true",
      logoAlt: "Brand 6 logo",
      total: "R$ 1.8MM",
      deltaLY: "36%",
      ly: "R$ 4.5MM",
      deltaMeta: "-7%",
      margemBruta: "70%",
      receitaPaga: "R$ 4.5MM",
    },
    {
      logoSrc: "",
      logoAlt: "Brand 7 logo",
      total: "R$ 1.8MM",
      deltaLY: "36%",
      ly: "R$ 4.5MM",
      deltaMeta: "-7%",
      margemBruta: "60%",
      receitaPaga: "R$ 4.5MM",
    },
    {
      logoSrc: "https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/3688b3d874cbec86c5c49db50f488de88bdb0eea?placeholderIfAbsent=true",
      logoAlt: "Brand 8 logo",
      total: "R$ 1.8MM",
      deltaLY: "36%",
      ly: "R$ 4.5MM",
      deltaMeta: "-7%",
      margemBruta: "70%",
      receitaPaga: "R$ 4.5MM",
    },
  ];

  return (
    <div className="flex max-w-[480px] w-full flex-col mx-auto pl-20">
      <Header />
      
      <main className="flex flex-col">
        <PeriodSelector />
        
        <MenuIcon />
        
        <section>
          <div className="flex items-stretch gap-1.5 text-sm text-[#3859FF] font-semibold whitespace-nowrap leading-7 mt-2">
            <div className="text-[#3859FF]">
              Canais
            </div>
            <div className="border w-[248px] shrink-0 h-px my-auto border-[rgba(227,232,239,1)] border-solid" />
            <img
              src="https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/9cfb3dc0e9449b3aeda134e6e39803302d3d0395?placeholderIfAbsent=true"
              alt="Channels icon"
              className="aspect-[0.8] object-contain w-5 shrink-0 rounded-[5px]"
            />
          </div>
          
          <SelloutCard
            title="Sellout total"
            total="R$ 3.23MM"
            metaProporcional="R$ 9.55MM"
            ly="R$ 8.50MM"
            deltaLY="36%"
            deltaMeta="-7%"
            margemBruta="60%"
            receitaPaga="R$ 4.5MM"
            chartImage="https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/2648d17987e46051017e8bca4c43163fbfdf1f70?placeholderIfAbsent=true"
          />
          
          <div className="rounded border shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] bg-white flex gap-2.5 text-xs font-light mt-[13px] px-[17px] py-[13px] border-solid border-[#E3E8EF]">
            <div className="self-stretch flex flex-col text-[#4B5565]">
              <div className="text-[#3859FF] text-lg font-semibold leading-loose">
                ZZMall
              </div>
              <div className="text-[#4B5565] leading-loose mt-[11px]">
                Total
              </div>
              <div className="text-[#4B5565] text-base font-bold leading-loose self-stretch mt-[7px]">
                R$ 3.23MM
              </div>
              <div className="text-[#4B5565] mt-[15px]">
                LY
              </div>
              <div className="text-[#4B5565] font-bold">
                R$ 8.50MM
              </div>
              <div className="text-[#4B5565] leading-loose mt-[17px]">
                Margem bruta
              </div>
              <div className="text-[#4B5565] font-bold leading-loose">
                60%
              </div>
            </div>
            <div className="flex flex-col mt-[38px]">
              <div className="text-[#4B5565] leading-loose self-stretch">
                Meta proporcional
              </div>
              <div className="text-[#4B5565] text-base font-bold leading-loose mt-[5px]">
                R$ 9.55MM
              </div>
              <div className="flex items-stretch gap-[23px] text-[#4B5565] whitespace-nowrap leading-loose mt-[15px]">
                <div className="text-[#4B5565]">
                  ΔLY
                </div>
                <div className="text-[#4B5565]">
                  ΔMeta
                </div>
              </div>
              <div className="flex items-stretch gap-[19px] font-bold whitespace-nowrap mt-1">
                <div className="text-[#4B5565]">
                  36%
                </div>
                <div className="text-[#B20101]">
                  -7%
                </div>
              </div>
              <div className="text-[#4B5565] mt-[17px]">
                Receita paga
              </div>
              <div className="text-[#4B5565] font-bold">
                R$ 4.5MM
              </div>
            </div>
            <div className="text-[#4B5565] leading-loose mt-[38px]">
              <div className="text-[#4B5565]">
                Meta atingida
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/596cae79151343ccbce7af8efaebec04/68f545fe9038c4bddbaf3282946c528dbd0881eb?placeholderIfAbsent=true"
                alt="Meta atingida chart"
                className="aspect-[1] object-contain w-[75px] mt-[15px]"
              />
            </div>
          </div>
        </section>
        
        <section>
          <div className="flex items-stretch gap-1.5 text-sm text-[#3859FF] font-semibold leading-7 mt-3">
            <div className="text-[#3859FF]">
              Por marca
            </div>
            <div className="border w-[253px] shrink-0 max-w-full h-px my-auto border-[rgba(227,232,239,1)] border-solid" />
          </div>
          
          <div className="flex items-stretch gap-3 text-[10px] text-[#4B5565] font-light mt-1.5">
            <BrandCard {...brandData[0]} />
            <BrandCard {...brandData[1]} />
          </div>
          
          <div className="flex items-stretch gap-3 text-[10px] text-[#4B5565] font-light mt-3">
            <BrandCard {...brandData[2]} />
            <BrandCard {...brandData[3]} />
          </div>
          
          <div className="flex items-stretch gap-3 text-[10px] text-[#4B5565] font-light mt-3">
            <BrandCard {...brandData[4]} />
            <BrandCard {...brandData[5]} />
          </div>
          
          <div className="flex items-stretch gap-3 text-[10px] text-[#4B5565] font-light mt-3">
            <div className="rounded border shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] bg-white flex flex-col pt-[51px] pb-3.5 px-3 border-solid border-[#E3E8EF]">
              <div className="flex w-[94px] items-stretch gap-5 whitespace-nowrap leading-[2.8] justify-between">
                <div className="text-[#4B5565]">
                  Total
                </div>
                <div className="text-[#4B5565]">
                  ΔLY
                </div>
              </div>
              <div className="flex items-stretch gap-[30px] font-bold">
                <div className="text-[#4B5565] leading-[2.8]">
                  R$ 1.8MM
                </div>
                <div className="text-[#4B5565]">
                  36%
                </div>
              </div>
              <div className="self-stretch flex items-stretch gap-[11px] mt-[11px]">
                <div className="flex flex-col flex-1">
                  <div className="text-[#4B5565]">
                    LY
                  </div>
                  <div className="text-[#4B5565] font-bold">
                    R$ 4.5MM
                  </div>
                  <div className="text-[#4B5565] leading-[2.8] self-stretch mt-[13px]">
                    Margem bruta
                  </div>
                  <div className="text-[#4B5565] font-bold leading-[2.8]">
                    60%
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-[#4B5565] leading-[2.8]">
                    ΔMeta
                  </div>
                  <div className="text-[#B20101] font-bold">
                    -7%
                  </div>
                  <div className="text-[#4B5565] self-stretch mt-3.5">
                    Receita paga
                  </div>
                  <div className="text-[#4B5565] font-bold">
                    R$ 4.5MM
                  </div>
                </div>
              </div>
            </div>
            <BrandCard {...brandData[7]} />
          </div>
        </section>
        
        <section>
          <div className="flex items-stretch gap-1.5 text-sm text-[#3859FF] font-semibold leading-7 mt-3">
            <div className="text-[#3859FF] grow">
              Vendas por hora
            </div>
            <div className="border w-[210px] shrink-0 h-px my-auto border-[rgba(227,232,239,1)] border-solid" />
          </div>
          
          <HourlySalesChart />
        </section>
        
        <section>
          <div className="flex items-stretch gap-1.5 text-sm text-[#3859FF] font-semibold leading-7 mt-3">
            <div className="text-[#3859FF] grow">
              Fullprice vs. Markdown
            </div>
            <div className="border w-[166px] shrink-0 h-px my-auto border-[rgba(227,232,239,1)] border-solid" />
          </div>
          
          <FullpriceMarkdownCard />
        </section>
        
        <section>
          <div className="flex items-stretch gap-1.5 text-sm text-[#3859FF] font-semibold leading-7 mt-3">
            <div className="text-[#3859FF] grow">
              Ranking de produtos
            </div>
            <div className="border w-[182px] shrink-0 h-px my-auto border-[rgba(227,232,239,1)] border-solid" />
          </div>
          
          <ProductRanking />
        </section>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
