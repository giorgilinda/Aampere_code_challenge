import json from '../../public/vehicle_data.json';

export type ICarsFilters = {
  brand?: string;
  model?: string;
  years?: string[];
  conditions?: string[];

};

export const findCars = (filters: ICarsFilters) => {
  if (!filters.brand && !filters.model && (!filters.years || filters.years.length === 0) && (!filters.conditions || filters.conditions.length === 0)) {
    return json.data;
  }

  return json.data.filter(item => (
    (filters.brand && item.brand.toLowerCase().startsWith(filters.brand.toLowerCase()))
    || (filters.model && item.model.toLowerCase().startsWith(filters.model.toLowerCase()))
    || (filters.years && filters.years.includes(`${item.year}`))
    || (filters.conditions && filters.conditions.includes(`${item.condition}`))
  ),
  );
};

export const extractValues = (key: string) => {
  // @ts-expect-error TS7053
  const set = new Set(json.data.map(d => d[key]));
  return Array.from(set).sort((prev, next) => prev - next);
};

export const sortCars = (sortCondition: string) => {
  // @ts-expect-error TS7053
  return json.data.sort((a, b) => a[sortCondition] - b[sortCondition]);
};
