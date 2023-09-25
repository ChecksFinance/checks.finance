import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { GetStaticProps } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { EnbunIntro } from '@/components/EnbunIntro'
import { ProductIntro } from '@/components/ProductIntro'
import { CompanyIntro } from '@/components/CompanyIntro'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div
      className={`flex min-h-screen w-screen flex-col items-stretch justify-start overflow-x-hidden overflow-x-clip`}
    >
      <section className="sm:h-screen bg-[rgb(var(--brand))] flex flex-col">
        <HeroSection />
      </section>
      <EnbunIntro />
      <ProductIntro />
      <CompanyIntro />
      <Footer />
    </div>
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
