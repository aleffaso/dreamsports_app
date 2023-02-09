import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../hooks/use-theme';
import GlobalStyles from '../view/enviroments/styles.globals';

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
