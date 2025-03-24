'use client';

import type { CarType } from '@/types/global';
import type { ICarsFilters } from '@/utils/CarsUtils';
import type { SyntheticEvent } from 'react';
import { extractValues, findCars, sortCars } from '@/utils/CarsUtils';
import React from 'react';
import { MultiSelectDropdown } from './MultiSelectDropdown';
import { RadioSelectDropdown } from './RadioSelectDropdown';

type FormProps = {
  translations: {
    [key: string]: string;
  };
  onSubmit: (res: CarType[]) => void;
};

export const Form: React.FC<FormProps> = ({ translations, onSubmit }) => {
  const sortOptions = { year: translations.sort_year ?? '', kilometer_count: translations.sort_kilometer_count ?? '', range_km: translations.sort_range_km ?? '' };

  const formSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
      value: { value: string };
    };
    const search = target.search.value;
    const value = target.value.value;

    const filtersObj: ICarsFilters = {};
    if (search.toLowerCase() === 'brand') {
      filtersObj.brand = value;
    } else if (search.toLowerCase() === 'model') {
      filtersObj.model = value;
    } else {
      filtersObj.model = value;
      filtersObj.brand = value;
    }
    onSubmit(findCars(filtersObj));
  };

  const filterChangeHandler = (selectedOptions: string[], fieldName: string) => {
    if (fieldName === 'year') {
      onSubmit(findCars({ years: selectedOptions }));
    } else {
      onSubmit(findCars({ conditions: selectedOptions }));
    }
  };

  // FIXME: it doesn't refresh list
  const sortChangeHandler = (selectedOptions: string) => {
    const res = sortCars(selectedOptions);
    console.log('🪳', { res });
    onSubmit(res);
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={formSubmitHandler}>
      <div>
        <select id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-s-lg focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>{translations.search_all}</option>
          <option>{translations.search_brand}</option>
          <option>{translations.search_model}</option>
        </select>
        <input type="text" id="value" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <button type="submit" className="rounded-e-lg  bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          search
        </button>
      </div>
      <MultiSelectDropdown formFieldName="year" options={extractValues('year')} onChange={filterChangeHandler} prompt={translations.filter_year} />
      <MultiSelectDropdown formFieldName="condition" options={extractValues('condition')} onChange={filterChangeHandler} prompt={translations.filter_condition} />
      <RadioSelectDropdown formFieldName="sort" options={sortOptions} onChange={sortChangeHandler} prompt={translations.sort} />
    </form>
  );
};
