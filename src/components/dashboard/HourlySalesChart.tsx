import React from 'react';

interface HourlyBarProps {
  hour: string;
  height: number;
  hasMarkdown?: boolean;
}

const HourlyBar: React.FC<HourlyBarProps> = ({ hour, height, hasMarkdown = true }) => {
  const maxHeight = 172;
  const barHeight = (height / maxHeight) * 100;
  
  return (
    <div className="flex flex-col items-center gap-2 min-w-[24px]">
      <div className="h-[150px] flex items-end justify-center w-full">
        <div className="w-6 bg-[#E3E8EF] flex items-end justify-center" style={{ height: `${barHeight}%` }}>
          {hasMarkdown && (
            <div className="w-3 bg-[#3859FF] h-[55%]" />
          )}
        </div>
      </div>
      <div className="text-xs text-[#364152] font-semibold whitespace-nowrap text-center">
        {hour}
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
    <div className="rounded border shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] bg-white flex w-full flex-col mt-1.5 px-3 py-4 border-solid border-[#E3E8EF]">
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-2 min-w-max">
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
      
      <div className="flex items-center gap-4 text-xs text-[#364152] font-semibold whitespace-nowrap text-center mt-4 pt-4 border-t border-[#E3E8EF]">
        <div className="flex flex-col items-center gap-1">
          <div className="flex min-h-[13px] w-[60px] bg-[#3859FF]" />
          <div className="text-[#364152]">Hoje</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-[#CDD5DF] flex min-h-[13px] w-[60px]" />
          <div className="text-[#364152]">Ontem</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-[#1E308A] flex min-h-[13px] w-[60px]" />
          <div className="text-[#364152]">Projeção</div>
        </div>
      </div>
      
      <div className="text-[#9AA4B2] text-right text-sm font-normal underline mt-4">
        Exibir Histórico de horas
      </div>
    </div>
  );
};
