'use client';

import type { CarType } from '@/types/global';
import { Card } from '../../../../components/Card';

type ListCardsProps = {
  data: CarType[];
};

export const ListCards: React.FC<ListCardsProps> = ({ data }) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((car, index) => (<Card key={index} data={car} />))}
          </div>
        </div>
      </section>
    </>
  );
};
