'use client';

import type { CarType } from '@/types/global';
import React, { useEffect, useState } from 'react';
import json from '../../../../../public/vehicle_data.json';
import { Form } from './Form';
import { ListCards } from './ListCards';

type ClientWrapperProps = {
  translations: {
    [key: string]: string;
  };
};

export const ClientWrapper: React.FC<ClientWrapperProps> = ({ translations }) => {
  const [results, setResults] = useState<CarType[]>(json.data);

  useEffect(() => {
    console.log('🪳', { results });
  }, [results]);

  const handleFormSubmit = (res: CarType[]) => {
    setResults(res);
  };

  return (
    <>
      <Form translations={translations} onSubmit={handleFormSubmit} />
      <ListCards data={results} />
    </>
  );
};
