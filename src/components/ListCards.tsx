'use client';

import type { CarsType } from '@/types/global';
import { useEffect, useState } from 'react';
import data from '../../public/vehicle_data.json' assert { type: 'json' };
import { Card } from './Card';

export const ListCards = () => {
  const [carList, setCarList] = useState<CarsType[]>([]);

  useEffect(() => {
    setCarList(data.data);
  }, []);

  return (
    <>
      {carList.map((car, index) => (<Card key={index} data={car} />))}
    </>
  );
};
