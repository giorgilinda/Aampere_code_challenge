'use client';
import { BaseTemplate } from '@/templates/BaseTemplate';
import { ThemeProvider } from '@material-tailwind/react';

export default function Layout(props: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider>
        <BaseTemplate>
          {props.children}
        </BaseTemplate>
      </ThemeProvider>
    </>
  );
}
