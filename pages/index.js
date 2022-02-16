import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

import Header from '../components/home/header';
import Section from '../components/home/section';
import Features from '../components/home/features';
import QA from '../components/home/qa';
import Footer from '../components/home/footer';

import styles from '../styles/Home.module.css'
import backgroundImage from '../public/images/background.png'

const _site = {
  title: 'Checks Finance',
  description: 'Bringing unlimited Web3 products for everyone in the real economy',
}

export default function Home() {
  const { t, i18n } = useTranslation()
  const [siteMeta, setSiteMeta] = useState(_site)

  useEffect(() => {
    setSiteMeta({
      title: t('title'),
      description: t('description'),
    })
  }, [i18n.language])

  return (
    <>
      <Head>
        <title>{siteMeta.title} - {siteMeta.description}</title>
        <meta name="description" content={siteMeta.description} />
        <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0" /> 
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="HandheldFriendly" content="true" /> 
        <link rel="apple-touch-icon" href="/images/favicons/apple-touch-icon.png" /> 
        <link rel="icon" href="/images/favicons/favicon.ico" />
      </Head>

      <Container 
        gap={0}
        responsive={false}
        className={ styles.backgroundWrapper }
        fluid>
        <Image
          alt="backrgound"
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          objectPosition="left top"
          quality={100}
        />
        <Header />
        <Section />
      </Container>

      <Features />
      <QA />
      <Footer />
    </>
  )
}
