'use client';

import type { CarType } from '@/types/global';
import type { ReactNode } from 'react';
import { CarContext } from 'hooks/useCarContext';
import { useState } from 'react';

export type CarContextType = {
  car: CarType | null;
  saveCar: (car: CarType) => void;
};

export const CarProvider = ({ children }: { children: ReactNode }) => {
  const [car, setCar] = useState<CarType | null>(null);

  const saveCar = (newCar: CarType) => {
    setCar(newCar);
  };

  return (
    <CarContext value={{ car, saveCar }}>
      {children}
    </CarContext>
  );
};
