import { GetStaticProps } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { EnbunIntro } from '@/components/EnbunIntro'
import { ProductIntro } from '@/components/ProductIntro'
import { CompanyIntro } from '@/components/CompanyIntro'
import { Footer } from '@/components/Footer'
import { Page } from '@/components/Page'
import { clientNamespaces, loadTranslations } from 'ni18n'
import { ni18nConfig } from '@/ni18n.config'

export default function Home() {
  return (
    <Page>
      <div
        className={`flex min-h-screen w-screen flex-col items-stretch justify-start overflow-x-hidden overflow-x-clip`}
      >
        <section className="h-screen bg-[rgb(var(--brand))] flex flex-col">
          <HeroSection />
        </section>
        <EnbunIntro />
        <ProductIntro />
        <CompanyIntro />
        <Footer />
      </div>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...clientNamespaces(ni18nConfig, ['translation']),
    },
  }
}
