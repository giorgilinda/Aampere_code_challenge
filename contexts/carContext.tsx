'use client';

import type { CarType } from '@/types/global';
import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

type CarContextType = {
  car: CarType | null;
  saveCar: (car: CarType) => void;
};

const CarContext = createContext<CarContextType | undefined>(undefined);

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

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('useCarContext must be used within a CarProvider');
  }
  return context;
};
