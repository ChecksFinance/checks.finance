import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Nav } from '@/components/Nav'
function App({ Component, pageProps }: AppProps) {
  return (
    <main className=" relative">
      <Nav />
      <Component {...pageProps} />
    </main>
  )
}

export default appWithTranslation(App)
