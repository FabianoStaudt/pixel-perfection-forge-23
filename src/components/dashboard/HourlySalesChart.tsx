import React from 'react';

interface HourlyBarProps {
  hour: string;
  height: number;
  hasMarkdown?: boolean;
}

const HourlyBar: React.FC<HourlyBarProps> = ({ hour, height, hasMarkdown = true }) => {
  return (
    <div className="flex flex-col items-center w-[29px]">
      <div className="flex w-full max-w-6 gap-[40px_43px] justify-center">
        <div
          className="rotate-[-1.5707963267948966rad] flex w-6 items-stretch gap-2.5 justify-center"
          style={{ minHeight: `${height}px` }}
        >
          <div className="justify-center items-center flex w-6 gap-2.5 h-full bg-[#E3E8EF]">
            {hasMarkdown && (
              <div className="self-stretch flex min-h-[95px] w-3 items-stretch gap-2.5 justify-center my-auto">
                <div className="flex min-h-[95px] w-3 gap-2.5 bg-[#3859FF]" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="rotate-[6.617444900424222e-24rad] flex w-[29px] flex-col items-center text-xs text-[#364152] font-semibold whitespace-nowrap text-center justify-center mt-1">
        <div className="text-[#364152]">
          {hour}
        </div>
      </div>
    </div>
  );
};

export const HourlySalesChart: React.FC = () => {
  const hourlyData = [
    { hour: '00:00', height: 106 },
    { hour: '01:00', height: 64 },
    { hour: '02:00', height: 139 },
    { hour: '03:00', height: 32 },
    { hour: '04:00', height: 82 },
    { hour: '05:00', height: 107 },
    { hour: '06:00', height: 172 },
    { hour: '07:00', height: 82 },
    { hour: '08:00', height: 82 },
    { hour: '09:00', height: 112, hasMarkdown: false },
    { hour: '10:00', height: 82, hasMarkdown: false },
    { hour: '11:00', height: 70, hasMarkdown: false },
    { hour: '12:00', height: 59, hasMarkdown: false },
    { hour: '13:00', height: 54, hasMarkdown: false },
    { hour: '14:00', height: 120, hasMarkdown: false },
    { hour: '15:00', height: 82, hasMarkdown: false },
    { hour: '16:00', height: 57, hasMarkdown: false },
    { hour: '17:00', height: 58, hasMarkdown: false },
    { hour: '18:00', height: 58, hasMarkdown: false },
    { hour: '19:00', height: 82, hasMarkdown: false },
    { hour: '20:00', height: 50, hasMarkdown: false },
    { hour: '21:00', height: 8, hasMarkdown: false },
    { hour: '22:00', height: 82, hasMarkdown: false },
    { hour: '23:00', height: 82, hasMarkdown: false },
  ];

  return (
    <div className="rounded border shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] bg-white flex w-full flex-col items-center justify-center aspect-[1] mt-1.5 px-3 border-solid border-[#E3E8EF]">
      <div>
        <div className="w-full">
          <div className="flex w-full flex-col items-stretch">
            <div className="overflow-x-auto relative flex min-h-[217px] w-full gap-4 overflow-hidden">
              <div className="z-0 flex min-w-60 min-h-[195px] flex-col overflow-hidden items-stretch justify-center w-[1096px]">
                <div className="rotate-[-1.5707963267948966rad] flex w-full max-w-[1096px] flex-col items-stretch justify-center flex-1 pt-0.5">
                  <div className="rotate-[-1.5707963267948966rad] flex min-h-[195px] w-full" />
                  <div className="flex min-h-[195px] w-full bg-[#EEF2F6] mt-1" />
                  <div className="flex min-h-[195px] w-full flex-1 mt-1" />
                </div>
              </div>
              <div className="overflow-x-auto absolute z-0 flex min-w-60 gap-2 overflow-hidden justify-center right-[-315px] w-[593px] bottom-0">
                {hourlyData.map((data, index) => (
                  <HourlyBar
                    key={index}
                    hour={data.hour}
                    height={data.height}
                    hasMarkdown={data.hasMarkdown}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center text-xs text-[#364152] font-semibold whitespace-nowrap text-center mt-4">
              <div className="self-stretch flex flex-col items-stretch justify-center w-[60px] my-auto">
                <div className="flex min-h-[13px] w-[60px] bg-[#3859FF]" />
                <div className="text-[#364152] mt-[5px]">
                  Hoje
                </div>
              </div>
              <div className="self-stretch flex flex-col items-stretch justify-center w-[60px] my-auto">
                <div className="bg-[rgba(205,213,223,1)] flex min-h-[13px] w-[60px]" />
                <div className="text-[#364152] mt-[5px]">
                  Ontem
                </div>
              </div>
              <div className="self-stretch flex flex-col items-stretch justify-center w-[60px] my-auto">
                <div className="bg-[rgba(30,48,138,1)] flex min-h-[13px] w-[60px]" />
                <div className="text-[#364152] mt-[5px]">
                  Projeção
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#9AA4B2] text-right text-sm font-normal leading-none underline decoration-solid decoration-auto underline-offset-auto underline mt-4">
            Exibir Histórico de horas
          </div>
        </div>
      </div>
    </div>
  );
};
