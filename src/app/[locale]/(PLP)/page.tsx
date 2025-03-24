import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ClientWrapper } from './components/ClientWrapper';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'List',
  });

  const translations = {
    search_all: t('search_all'),
    search_brand: t('search_brand'),
    search_model: t('search_model'),
    filter_year: t('filter_year'),
    filter_condition: t('filter_condition'),
    sort: t('sort'),
    sort_year: t('sort_year'),
    sort_range_km: t('sort_range_km'),
    sort_kilometer_count: t('sort_kilometer_count'),
  };

  return <ClientWrapper translations={translations} />;
}
