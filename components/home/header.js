import { useEffect, useState, Fragment } from 'react';
import { useTranslation } from "react-i18next";
import { 
  FaTwitter, 
} from "react-icons/fa";

import logo from '../../public/images/logo.png'

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