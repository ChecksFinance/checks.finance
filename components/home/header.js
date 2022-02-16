import Image from 'next/image';
import { useEffect, useState, Fragment } from 'react';
import { useTranslation } from "react-i18next";
import { FaTwitter } from "react-icons/fa";
import { 
  Container, 
  Row, 
  Text,
  Link,
  Tooltip,
  Button,
  Spacer,
  Grid,
} from '@nextui-org/react';

import logo from '../../public/images/logo.png'
import styles from '../../styles/Home.module.css'

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

export default function Header() {
  const { t, i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState(i18n.language)
  const changeLanguage = lng => i18n.changeLanguage(lng)
  const hideInXS = {
    display: "none",
    '@sm': {
      display: 'flex'
    },
  }

  useEffect(() => 
    setCurrentLang(i18n.language), [i18n.language])

  return (
    <Container 
      fluid 
      gap={0}
      responsive={false}
      className={styles.header}>
      <header>
        <Grid.Container 
          justify="center">
          <Grid xs={12} sm={6}>
            <Row css={{
              justifyContent: 'center',
              '@sm': {
                justifyContent: 'flex-start',
              }
            }}
              align="center">
              <Image src={logo}
                width={40}
                height={40}
                alt={t('title')} />
              <Text h1
                className={styles.title}
                size={30}>{t('title').toLocaleLowerCase()}</Text>
            </Row>
          </Grid>
          <Grid xs={12} sm={6}>
            <Row 
              css={{
                justifyContent: 'center',
                borderTop: '1px solid #efefef',
                '@sm': {
                  justifyContent: 'flex-end',
                  borderTop: 'none',
                }
              }}
              align="center">
              {
                langsSwitch.map(lang => {
                  return (
                    <Fragment key={lang.lng}>
                      <Link css={{
                        margin: '0px 5px 0',
                        padding: '10px 0',
                        '@sm': {
                          margin: 0,
                          padding: 0
                        }
                      }}
                        onClick={
                        e => changeLanguage(lang.lng)
                      }>
                        <Text b={currentLang === lang.lng}
                          size={14}>{lang.label}</Text>
                      </Link>
                      <Spacer x={1} css={hideInXS} />
                    </Fragment>
                  )
                })
              }
              <Link css={hideInXS}
                target={'_blank'}
                href={'https://twitter.com/checksfinance'}>
                <FaTwitter fill='#444' size={20} />
              </Link>
              <Spacer x={1} css={hideInXS} />
              <Tooltip
                content={t('coming_soon')}
                placement="bottom">
                <Button css={hideInXS}
                  color="gradient" auto>
                  {t('dashboard_btn')}
                </Button>
              </Tooltip>
            </Row>
          </Grid>
        </Grid.Container>
      </header>
    </Container>
  )
}