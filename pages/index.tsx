import Image from 'next/image'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import { FC, ReactNode } from 'react'
import MdxPage from './mdx.mdx'
import { Nav } from '@/components/Nav'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetStaticProps, GetStaticPropsResult } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { EnbunIntro } from '@/components/EnbunIntro'

const inter = Inter({ subsets: ['latin'] })
const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen w-screen flex-col items-stretch justify-start ${notoSansJp.className}`}>
      <section className="h-screen bg-[rgb(var(--brand))] flex flex-col">
        <Nav />
        <HeroSection />
      </section>
      <EnbunIntro />
      <section className="bg-white h-screen"></section>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en')),
      // Will be passed to the page component as props
    },
  }
}
