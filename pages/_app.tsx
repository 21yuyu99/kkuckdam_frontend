import { theme } from '@/public/theme'
import GlobalStyle from '@/styles/global.style'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import {Provider} from 'react-redux';
import {store} from '../store/store';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
      </Provider>
    </>
  )
}