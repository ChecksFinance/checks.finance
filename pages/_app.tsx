import '@/styles/globals.css'
import '@/styles/prism.css'
import '@/styles/github-markdown-min.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Nav } from '@/components/Nav'
import { Noto_Sans_JP } from 'next/font/google'

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`relative ${notoSansJp.className}`}>
      <Nav />
      <Component {...pageProps} />
    </main>
  )
}

export default appWithTranslation(App)
