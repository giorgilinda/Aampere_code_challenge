import ClientCarPage from '@/app/[locale]/(PDP)/components/ClientCarPage';
import { getTranslations } from 'next-intl/server';
import React from 'react';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Card',
  });

  const translations = {
    meta_title: t('meta_title'),
    brand: t('brand'),
    model: t('model'),
    year: t('year'),
    range_km: t('range_km'),
    color: t('color'),
    condition: t('condition'),
    battery_capacity_kWh: t('battery_capacity_kWh'),
    charging_speed_kW: t('charging_speed_kW'),
    seats: t('seats'),
    drivetrain: t('drivetrain'),
    location: t('location'),
    autopilot: t('autopilot'),
    kilometer_count: t('kilometer_count'),
    accidents: t('accidents'),
    submit_button: t('submit_button'),
    back: t('back'),
  };

  return <ClientCarPage translations={translations} />;
}
