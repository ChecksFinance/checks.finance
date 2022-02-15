import Image from 'next/image';
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

export default function Features() {
  const { t } = useTranslation();

  return (
    <Container gap={0}>

    <Grid.Container gap={6}
      id="nft"
      className={styles.featureSection}
      alignItems="center"
      justify="center">
        <Grid sm={5}>
          <Image src={banner1}
            alt="section-banner-2" />
        </Grid>
        <Grid sm={6}>
          <Card bordered shadow={false}>
            <Text h3 size={30} className={styles.sectionTitle}>{t('banner1.title')}</Text>
            <Spacer y={.8} />
            <Text>
              <Trans i18nKey="banner1.description">
              </Trans>
            </Text>
          </Card>
        </Grid>
    </Grid.Container> 

    <Grid.Container gap={8} 
      id="crm"
      className={styles.featureSection}
      alignItems="center"
      justify="center">
      <Grid sm={6}>
          <Card bordered shadow={false}>
            <Text h3 size={30} className={styles.sectionTitle}>{t('banner2.title')}</Text>
            <Spacer y={.8} />
            <Text>
              <Trans i18nKey="banner2.description">
              </Trans>
            </Text>
          </Card>
      </Grid>
      <Grid sm={5}>
        <Image src={banner2}
          alt="section-banner-3" />
      </Grid>
    </Grid.Container> 

    <Grid.Container gap={8} 
        id="mobile-first"
      className={styles.featureSection}
      alignItems="center"
      justify="center">
      <Grid sm={5}>
        <Image src={banner3}
          alt="section-banner-4" />
      </Grid>
      <Grid sm={6}>
          <Card bordered shadow={false}>
            <Text h3 size={30} className={styles.sectionTitle}>{t('banner3.title')}</Text>
            <Spacer y={.8} />
            <Text>
              <Trans i18nKey="banner3.description">
              </Trans>
            </Text>
          </Card>
        </Grid>
    </Grid.Container> 

    <Grid.Container gap={8}
        id="public-networks"
        className={styles.featureSection}
        alignItems="center"
        justify="center">
        <Grid sm={6}>
          <Card bordered shadow={false}>
            <Text h3 size={30} className={styles.sectionTitle}>{t('banner4.title')}</Text>
            <Spacer y={.8} />
            <Text>
              <Trans i18nKey="banner4.description">
              </Trans>
            </Text>
          </Card>
        </Grid>
        <Grid sm={5}>
          <Image src={banner3}
            alt="section-banner-4" />
        </Grid>
      </Grid.Container> 

      <Spacer y={3} />
    </Container>
  )
}