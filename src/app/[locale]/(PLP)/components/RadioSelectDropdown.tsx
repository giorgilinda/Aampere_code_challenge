'use client';

import type { ChangeEvent } from 'react';
import { useRef, useState } from 'react';

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
// FIXME: width of the dropdown

export const RadioSelectDropdown: React.FC<RadioSelectDropdownProps> = ({ formFieldName, options, onChange, prompt = 'Select one option' }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const optionsListRef = useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const option = e.target.value;
    setSelectedOption(e.target.getAttribute('data-label') ?? '');
    onChange(option);
  };

  return (
    <label className="relative mx-2">
      <input type="checkbox" className="hidden peer" />

      <div className="cursor-pointer after:content-['▼'] after:text-xs after:ml-1 after:inline-flex after:items-center peer-checked:after:-rotate-180 after:transition-transform inline-flex px-5 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {prompt}
        {selectedOption && (
          <span className="ml-1 text-blue-500">{`${selectedOption} selected`}</span>
        )}

      </div>

      <div className="absolute transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto w-full max-h-60 overflow-y-scroll z-1000 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 inline-block left-0 top-[36px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                    data-label={value}
                    checked={selectedOption === value}
                  />
                  <span className="ml-1">{value}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </label>
  );
};
