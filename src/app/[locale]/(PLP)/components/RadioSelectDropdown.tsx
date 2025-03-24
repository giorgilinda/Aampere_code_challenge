'use client';

import type { ChangeEvent } from 'react';
import { useRef } from 'react';

type RadioSelectDropdownProps = {
  formFieldName: string;
  options: {
    year: string;
    kilometer_count: string;
    range_km: string;
  };
  onChange: (selectedOptions: string) => void;
  prompt?: string;
};

export const RadioSelectDropdown: React.FC<RadioSelectDropdownProps> = ({ formFieldName, options, onChange, prompt = 'Select one or more options' }) => {
  const optionsListRef = useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const option = e.target.value;
    onChange(option);
  };

  return (
    <div>
      <label className="relative">
        <input type="checkbox" className="hidden peer" />

        <div className="cursor-pointer after:content-['▼'] after:text-xs after:ml-1 after:inline-flex after:items-center peer-checked:after:-rotate-180 after:transition-transform inline-flex border border-gray-200 rounded-sm px-5 py-2">
          {prompt}
        </div>

        <div className="absolute bg-white border border-gray-200 transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto w-full max-h-60 overflow-y-scroll z-1000">
          <ul ref={optionsListRef}>
            {Object.entries(options).map(([key, value]) => {
              return (
                <li key={key}>
                  <label
                    className="flex whitespace-nowrap cursor-pointer px-2 py-1 transition-colors hover:bg-blue-100 [&:has(input:checked)]:bg-blue-200"
                  >
                    <input
                      type="radio"
                      name={formFieldName}
                      value={key}
                      className="cursor-pointer"
                      onChange={handleChange}
                    />
                    <span className="ml-1">{value}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </label>
    </div>
  );
};
