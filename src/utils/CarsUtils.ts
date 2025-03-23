import json from '../../public/vehicle_data.json';

export const findCars = (brand: string, model: string) => {
  return json.data.filter(item => item.brand === brand && item.model === model);
};
