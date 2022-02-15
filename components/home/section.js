import { 
  Container, 
  Row, 
  Col, 
  Grid,
  Text,
  Link,
  Spacer,
} from '@nextui-org/react';
import { useTranslation, Trans } from "react-i18next";
import { 
  FaBell,
  FaStore,
} from "react-icons/fa";

import styles from '../../styles/Home.module.css'
import section1 from '../../public/images/section1-bg.png'

const anchors = ['crm', 'nft', 'mobile-first']

export default function Section() {
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
      <Grid.Container gap={2} 
        justify="center">
        {
          cards.map((card, idx) => {
            return (
              <Grid key={idx}>
                <Card css={{ mw: "350px", minHeight: "290px" }}>
                  <Text h4>{card.title}</Text>
                  <Spacer y={.5} />
                  <Text>{card.description}</Text>
                  <Card.Footer>
                    <Link color="primary" href={ `#` + anchors[idx]}>
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
      