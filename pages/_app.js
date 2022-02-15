import { useEffect } from 'react'
import { NextUIProvider } from '@nextui-org/react'

import '../libs/i18n'
import '../styles/globals.css'
import loadFonts from "../libs/fonts"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window) loadFonts(document)
  }, [])

  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
