import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@nextui-org/react';

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
  return (
    <>
      <Head>
        <title>{ _site.title }</title>
        <meta name="description" content={_site.description} />
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
