import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from '../themes'
import { UiContext, UiProvider } from '../context'
import useContext from 'react';
import 'animate.css';

// TODO: colocar el tipo NextPage a las páginas

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <UiProvider>
      {/* <ThemeProvider theme={ lightTheme }> */}
        <CssBaseline /> 
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </UiProvider>
  )
}

export default MyApp
