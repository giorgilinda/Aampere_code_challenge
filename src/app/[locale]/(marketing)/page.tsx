import { ListCards } from '@/components/ListCards';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  /*
  FIXME: do I need it yet?
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });
  */

  return (
    <>
      <div>search and filters</div>
      <ListCards />
    </>
  );
};
