import messages from '@/locales/en.json';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { BaseTemplate } from './BaseTemplate';

describe('Base template', () => {
  describe('Render method', () => {
    it('should have a link to my CV', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BaseTemplate>
            {null}
          </BaseTemplate>
        </NextIntlClientProvider>,
      );

      expect(screen.getAllByTestId('aboutMe').length).toBeGreaterThanOrEqual(1);
    });

    it('should have a link to Aampere website', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BaseTemplate>
            {null}
          </BaseTemplate>
        </NextIntlClientProvider>,
      );

      expect(screen.getAllByTestId('aboutAampere').length).toBeGreaterThanOrEqual(1);
    });
  });
});
