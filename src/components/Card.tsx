import type { CarType } from '@/types/global';
import type { FC, PropsWithChildren } from 'react';
import { useCarContext } from 'contexts/carContext';
import { useFormatter } from 'next-intl';
import Link from 'next/link';

type CardProps = {
  data: CarType;
};

export const Card: FC<PropsWithChildren<CardProps>> = ({ data }) => {
  const format = useFormatter();
  const { saveCar } = useCarContext();

  const onLinkClick = () => {
    saveCar(data);
  };

  return (
    <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
      <Link
        className="block relative h-48 rounded overflow-hidden"
        href={`${data.brand}/${data.model}`}
        onClick={onLinkClick}
      >
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={data.images[0] ?? ''} />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{data.brand.toUpperCase()}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{data.model}</h2>
        <p className="mt-1">{format.number(data.price, { style: 'currency', currency: 'EUR' })}</p>
      </div>
    </div>
  );
};
