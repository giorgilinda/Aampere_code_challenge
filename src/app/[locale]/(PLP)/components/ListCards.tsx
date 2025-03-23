'use client';

import type { CarType } from '@/types/global';
import { useEffect, useState } from 'react';
import data from '../../../../../public/vehicle_data.json' assert { type: 'json' };
import { Card } from '../../../../components/Card';

export const ListCards = () => {
  const [carList, setCarList] = useState<CarType[]>([]);

  useEffect(() => {
    setCarList(data.data);
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {carList.map((car, index) => (<Card key={index} data={car} />))}
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
              <p className="mt-1">$18.40</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
