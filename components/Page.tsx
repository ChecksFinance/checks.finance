import Head from 'next/head'
import { ComponentProps } from 'react'
import siteConfig from '@/data/siteConfig'

type Props = {
  title?: string
  description?: string
} & ComponentProps<'div'>

export const Page: React.FC<Props> = ({ title, description, children }) => {
  const siteTitle = title
    ? `${title} - ${siteConfig.siteName}`
    : `${siteConfig.siteName} - ${siteConfig.siteDescription}`
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        {/* SEO tags */}
        <meta name="title" content={siteTitle} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={siteConfig.siteThumbnail} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteConfig.siteUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={siteConfig.siteThumbnail} />
        {/* Misc tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#27B98B" />
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      {children}
    </>
  )
}
