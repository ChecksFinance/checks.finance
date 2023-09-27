import '@/styles/globals.css'
import '@/styles/prism.css'
import '@/styles/github-markdown-min.css'
import type { AppProps } from 'next/app'
import { appWithI18Next, useSyncLanguage } from 'ni18n'
import { ni18nConfig } from '../ni18n.config'
import { Nav } from '@/components/Nav'
import { Noto_Sans_JP } from 'next/font/google'
import { TooltipProvider } from '@/components/ui/tooltip'

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {
  const locale = typeof window !== 'undefined' && window.localStorage.getItem('SITE_LOCALE')
  useSyncLanguage(locale || undefined)

  return (
    <TooltipProvider>
      <main className={`relative ${notoSansJp.className}`}>
        <Nav />
        <Component {...pageProps} />
      </main>
    </TooltipProvider>
  )
}

export default appWithI18Next(App, ni18nConfig)
