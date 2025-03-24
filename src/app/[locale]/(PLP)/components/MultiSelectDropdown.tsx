'use client';

import type { ChangeEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

type MultiSelectDropdownProps = {
  formFieldName: string;
  options: any[];
  onChange: (selectedOptions: string[], fieldName: string) => void;
  prompt?: string;
};

export const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ formFieldName, options, onChange, prompt = 'Select one or more options' }) => {
  const [isJsEnabled, setIsJsEnabled] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const optionsListRef = useRef(null);

  useEffect(() => {
    setIsJsEnabled(true);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const option = e.target.value;

    const selectedOptionSet = new Set(selectedOptions);

    if (isChecked) {
      selectedOptionSet.add(option);
    } else {
      selectedOptionSet.delete(option);
    }
    const selectedOptionsArr = Array.from(selectedOptionSet);

    setSelectedOptions(selectedOptionsArr);
    onChange(selectedOptionsArr, formFieldName);
  };

  return (
    <div>
      <label className="relative">
        <input type="checkbox" className="hidden peer" />

        <div className="cursor-pointer after:content-['▼'] after:text-xs after:ml-1 after:inline-flex after:items-center peer-checked:after:-rotate-180 after:transition-transform inline-flex border border-gray-200 rounded-sm px-5 py-2">
          {prompt}
          {isJsEnabled && selectedOptions.length > 0 && (
            <span className="ml-1 text-blue-500">{`(${selectedOptions.length} selected)`}</span>
          )}
        </div>

        <div className="absolute bg-white border border-gray-200 transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto w-full max-h-60 overflow-y-scroll z-1000">
          <ul ref={optionsListRef}>
            {options.map((option) => {
              return (
                <li key={option}>
                  <label
                    className="flex whitespace-nowrap cursor-pointer px-2 py-1 transition-colors hover:bg-blue-100 [&:has(input:checked)]:bg-blue-200"
                  >
                    <input
                      type="checkbox"
                      name={formFieldName}
                      value={option}
                      className="cursor-pointer"
                      onChange={handleChange}
                    />
                    <span className="ml-1">{option}</span>
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
