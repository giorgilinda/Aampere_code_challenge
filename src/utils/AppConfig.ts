import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

export const AppConfig = {
  name: 'Aampere_code_challenge',
  locales: ['en'],
  defaultLocale: 'en',
  localePrefix,
};
