import '../app/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useTheme } from '../hooks/use-theme';

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
