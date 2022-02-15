import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, Fragment } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Grid,
  Text,
  Link,
  Spacer,
  Card,
  Button,
  Tooltip,
  Collapse,
} from '@nextui-org/react';
import { 
  FaTwitter, 
  FaBell,
  FaStore,
  FaQuestion,
} from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";

import styles from '../styles/Home.module.css'
import logo from '../public/images/logo.png'
import backgroundImage from '../public/images/background.png'
import backgroundWaves from '../public/images/wave.png'
import section1 from '../public/images/section1-bg.png'

const _site = {
  title: 'Checks Finance',
  description: 'Bringing unlimited Web3 products for everyone in the real economy',
}

const langsSwitch = [{
  lng: 'en',
  label: 'English',
}, {
  lng: 'zh-CN',
  label: '中文',
}, {
  lng: 'ja',
  label: '日本語',
}]

function Header() {
  const { t, i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState(i18n.language)
  const changeLanguage = lng => i18n.changeLanguage(lng)

  useEffect(() => 
    setCurrentLang(i18n.language), [i18n.language])

  return (
    <Container 
      fluid 
      gap={0}
      responsive={false}
      className={styles.header}>
      <header>
        <Row 
          justify="center"
          align="center">
          <Col>
            <Row align="center">
              <Image src={logo}
                width={40}
                height={40}
                alt={t('title')} />
              <Text h1
                className={styles.title}
                size={30}>{t('title').toLocaleLowerCase()}</Text>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end" 
              align="center">
                {
                  langsSwitch.map(lang => {
                    return (
                      <Fragment key={lang.lng}>
                        <Link onClick={
                          e => changeLanguage(lang.lng)
                        }>
                          <Text b={currentLang === lang.lng}
                            size={14}>{lang.label}</Text>
                        </Link>
                        <Spacer x={1} />
                      </Fragment>
                    )
                  })
                }
              <Link target={'_blank'}
                href={'https://twitter.com/checksfinance'}>
                <FaTwitter fill='#444' size={20} />
              </Link>
              <Spacer x={1} />
              <Tooltip
                content={ t('coming_soon') }
                placement="bottom">
                <Button color="gradient" auto>
                  {t('dashboard_btn')}
                </Button>
              </Tooltip>
            </Row>
          </Col>
        </Row>
      </header>
    </Container>
  )
}

function Section() {
  const { t } = useTranslation();
  const cards = t('feature_cards', {
    returnObjects: true
  })

  return (
    <Container 
      className={styles.section}>
      <Row align="center" 
        gap={1}
        justify="center">
        <Col align="center">
          <Text h2
            className={styles.sectionTitle}
            size={38}>
              <Trans i18nKey="heading_text">
              Bringing unlimited<br /> Web3 products for everyone<br /> in the real economy
              </Trans>
            </Text>
        </Col>
      </Row>
      <Spacer y={2} />
      <Row align="center" 
        gap={1}
        justify="center">
        <Col align="center">
          <Tooltip
            content={t('coming_soon')}
            placement="right">
            <Button
              icon={<FaStore />}
              size="lg"
              >
              {t('create_account_btn')}
            </Button>
          </Tooltip>
          <Spacer y={.3} />
          <Link target={'_blank'}
            href={'https://twitter.com/checksfinance'}>
            <Button bordered
              color="primary"
              size="lg"
              icon={<FaBell />}>
              {t('follow_us_btn')}
            </Button>
          </Link>
          <Text className={styles.notes}
            size={14}>{t('follow_us_text')}</Text>
        </Col>
      </Row>
      <Grid.Container gap={2} justify="center">
        <Grid md={5.5} xl={4} sm={7} xs={10}>
          <Image src={section1}
            alt="section-banner" />
        </Grid>
      </Grid.Container>

      <Spacer y={1} />

      <Grid.Container gap={2} 
        justify="center">
        {
          cards.map((card, idx) => {
            return (
              <Grid key={idx}>
                <Card css={{ mw: "330px" }}>
                  <Text h4>{card.title}</Text>
                  <Text>{card.description}</Text>
                  <Card.Footer>
                    <Link color="primary" href="#crm">
                      {t('find_out_more_btn')}
                    </Link>
                  </Card.Footer>
                </Card>
              </Grid>
            )
          })
        }
      </Grid.Container>
    </Container>
  )
}

function Footer () {
  const { t } = useTranslation();

  return (
    <footer>
      <Container className={ styles.footer }>
        <Grid.Container
          gap={2}>
          <Grid md={6} xs={12}>
            <Row>
              <Col>
                <Text h4
                  className={styles.title}
                  size={26}>{_site.title.toLocaleLowerCase()}</Text>
                <Text>contact@checks.finance</Text>
              </Col>
            </Row>
          </Grid>
          <Grid md={3} xs={12}>
            <Row>
              <Col>
                <Text h4>{ t('keep_in_touch_text')}</Text>
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
                <Text h4>{ t('company_text')}</Text>
                <Spacer y={.5} />
                <Text>{ t('company_desc') }</Text>
              </Col>
            </Row>
          </Grid>
        </Grid.Container>
      </Container>
    </footer>
  )
}

function QandA() {
  const { t } = useTranslation();
  const qa = t('qa', {
    returnObjects: true
  })

  return (
    <Grid.Container gap={2} 
      justify="center">
      <Grid>
        <Collapse.Group 
          accordion={false}>
            {
              qa.map((q, idx) => {
                return (
                  <Collapse 
                    key={idx}
                    title={q.question} 
                    expanded={idx===0}>
                    <Text>
                      {q.answer}
                    </Text>
                  </Collapse>
                )
              })
            }
        </Collapse.Group>
      </Grid>
    </Grid.Container>
  )
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
          objectPosition="center top"
          quality={100}
        />
        <Header />
        <Section />
      </Container>

      <Container 
        gap={0}>
        <QandA />
      </Container>

      <Container 
        gap={0}
        className={ styles.backgroundWrapper }
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
        <Footer />
      </Container>
    </>
  )
}
