import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  Grid,
  Text,
  Spacer,
  Card,
  Container,
} from '@nextui-org/react';
import { useTranslation, Trans } from "react-i18next";

import styles from '../../styles/Home.module.css'
import banner1 from '../../public/images/banner1.png'
import banner2 from '../../public/images/banner2.png'
import banner3 from '../../public/images/banner3.png'
import banner4 from '../../public/images/banner4.png'

export default function Features() {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language)

  useEffect(() => 
    setCurrentLang(i18n.language), [i18n.language])

  return (
    <Container 
      md
      gap={0}>
      <Container 
        className={styles.featureSection}>
        <Grid.Container 
          id="nft"
          alignItems="center"
          justify="center">
          <Grid xs={9} sm={5}>
            <Image src={banner1}
              alt="section-banner-2" />
          </Grid>
          <Grid sm={.5}></Grid>
          <Grid xs={11} sm={5}>
            <Card shadow={false}>
              <Text h3 
                size={38} 
                className={currentLang !== 'zh-CN' ? styles.sectionTitle: ''}
              >{t('banner1.title')}</Text>
              <Spacer y={.8} />
              <Text>
                <Trans i18nKey="banner1.description">
                </Trans>
              </Text>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>

      <Container className={styles.featureSection}>
        <Grid.Container 
          id="crm"
          alignItems="center"
          justify="center">
          <Grid sm={5} xs={11} >
            <Card shadow={false}>
              <Text h3 size={38} 
                className={currentLang !== 'zh-CN' ? styles.sectionTitle : ''}
              >{t('banner2.title')}</Text>
              <Spacer y={.8} />
              <Text>
                <Trans i18nKey="banner2.description">
                </Trans>
              </Text>
            </Card>
          </Grid>
          <Grid sm={.5}></Grid>
          <Grid sm={5} xs={10}>
            <Image src={banner2}
              alt="section-banner-3" />
          </Grid>
        </Grid.Container>
      </Container>

      <Container className={styles.featureSection}> 
        <Grid.Container 
          id="mobile-first"
          alignItems="center"
          justify="center">
          <Grid sm={5} xs={11}>
            <Image src={banner3}
              alt="section-banner-4" />
          </Grid>
          <Grid sm={.5}></Grid>
          <Grid sm={5} xs={11}>
            <Card shadow={false}>
              <Text h3 size={38} 
                className={currentLang !== 'zh-CN' ? styles.sectionTitle : ''}
                >{t('banner3.title')}</Text>
              <Spacer y={.8} />
              <Text>
                <Trans i18nKey="banner3.description">
                </Trans>
              </Text>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>

      <Container className={styles.featureSection}>
        <Grid.Container gap={0}
          id="public-networks"
          alignItems="center"
          justify="center">
          <Grid sm={5} xs={11}>
            <Card shadow={false}>
              <Text h3 size={38} 
                className={currentLang !== 'zh-CN' ? styles.sectionTitle : ''}
              >{t('banner4.title')}</Text>
              <Spacer y={.8} />
              <Text>
                <Trans i18nKey="banner4.description">
                </Trans>
              </Text>
            </Card>
          </Grid>
          <Grid sm={.5}></Grid>
          <Grid sm={5} xs={10}>
            <Image src={banner4}
              alt="section-banner-4" />
          </Grid>
        </Grid.Container>
      </Container>

      <Spacer y={3} />
    </Container>
  )
}