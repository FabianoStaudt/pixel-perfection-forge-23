import React, { useState } from 'react';

interface PeriodOption {
  id: string;
  label: string;
}

const periods: PeriodOption[] = [
  { id: 'hoje', label: 'Hoje' },
  { id: 'semana', label: 'Semana' },
  { id: 'quinzena', label: 'Quinzena' },
  { id: 'mes', label: 'Mês' },
];

export const PeriodSelector: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('hoje');

  return (
    <section className="flex w-full max-w-[329px] items-center gap-[3px] overflow-hidden text-xs text-[#515C6F] font-semibold leading-[1.2] justify-center mt-2">
      {periods.map((period) => (
        <button
          key={period.id}
          onClick={() => setSelectedPeriod(period.id)}
          className={`justify-center items-center rounded border self-stretch flex min-h-8 gap-2 whitespace-nowrap w-20 my-auto px-2.5 py-[9px] border-solid transition-colors ${
            selectedPeriod === period.id
              ? 'text-[#3859FF] bg-white border-[#3859FF]'
              : 'text-[#515C6F] border-[#D6DAE2]'
          }`}
          aria-pressed={selectedPeriod === period.id}
        >
          <div className="self-stretch my-auto">
            {period.label}
          </div>
        </button>
      ))}
    </section>
  );
};
