'use client';
import { ThemeProvider } from '@mui/material/styles';
import { baselightTheme } from '@/lib/theme/DefaultColors';

export function StyledRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={baselightTheme}>{children}</ThemeProvider>;
}
