import Image from 'next/image'
import { 
  Container, 
  Row, 
  Col, 
  Grid,
  Text,
  Link,
  Spacer,
} from '@nextui-org/react';
import { useTranslation } from "react-i18next";

import styles from '../../styles/Home.module.css'
import backgroundWaves from '../../public/images/wave.png'

export default function Footer () {
  const { t } = useTranslation();

  return (
    <Container
      gap={0}
      className={styles.backgroundWrapper}
      responsive={false}
      fluid>
      <Image
        alt="backrgound footer"
        src={backgroundWaves}
        layout="fill"
        objectFit="cover"
        objectPosition="center bottom"
        quality={100}
      />
      <Spacer y={3} />

      <footer>
        <Container className={styles.footer}>
          <Grid.Container gap={2}>
            <Grid md={6} xs={12}>
              <Row>
                <Col>
                  <Text h4
                    className={styles.title}
                    size={26}>{_site.title.toLocaleLowerCase()}</Text>
                  <Text>contact@checks.finance</Text>
                  <Spacer y={10} />
                  <Text color='#efefef'>&copy; 2022 Checks Finance K.K.</Text>
                </Col>
              </Row>
            </Grid>
            <Grid md={3} xs={12}>
              <Row>
                <Col>
                  <Text h4>{t('keep_in_touch_text')}</Text>
                  <Spacer y={.5} />
                  <Link target={'_blank'}
                    href={'https://twitter.com/checksfinance'}>
                    <FaTwitter fill='#444' size={20} />
                    <Text>@checksfinance</Text>
                  </Link>
                </Col>
              </Row>
            </Grid>
            <Grid md={3} xs={12}>
              <Row>
                <Col>
                  <Text h4>{t('company_text')}</Text>
                  <Spacer y={.5} />
                  <Text>{t('company_desc')}</Text>
                </Col>
              </Row>
            </Grid>
          </Grid.Container>
        </Container>
      </footer>
    </Container>

  )
}
