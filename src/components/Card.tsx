import type { CarsType } from '@/types/global';
import type { FC, PropsWithChildren } from 'react';
import { useTranslations } from 'next-intl';

type CardProps = {
  data: CarsType;
};

export const Card: FC<PropsWithChildren<CardProps>> = ({ data }) => {
  const t = useTranslations('Card');

  return (
    <>
      {t('brand')}
      :
      {data.brand}
    </>
  );
};
