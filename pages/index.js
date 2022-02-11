import Head from 'next/head'
import Image from 'next/image'
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
} from "react-icons/fa";

import styles from '../styles/Home.module.css'
import logo from '../public/images/logo.png'
import backgroundImage from '../public/images/background.png'
import backgroundWaves from '../public/images/wave.png'
import section1 from '../public/images/section1-bg.png'

const _site = {
  title: 'Checks Finance',
  description: 'Bringing unlimited Web3 products for everyone in the real economy',
}

function Header() {
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
                alt={_site.title} />
              <Text h1
                className={styles.title}
                size={30}>{_site.title.toLocaleLowerCase()}</Text>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end" 
              align="center">
              <Link target={'_blank'}
                href={'https://twitter.com/checksfinance'}>
                <FaTwitter fill='#444' size={20} />
              </Link>
              <Spacer x={1} />
              <Tooltip
                content="Coming Soon"
                placement="bottom">
                <Button color="gradient" auto>
                  Dashboard
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
  return (
    <Container 
      className={styles.section}>
      <Row align="center" 
        gap={1}
        justify="center">
        <Col align="center">
          <Text h2
            className={styles.sectionTitle}
            size={38}>Bringing unlimited<br /> Web3 products for everyone<br /> in the real economy</Text>
        </Col>
      </Row>
      <Spacer y={2} />
      <Row align="center" 
        gap={1}
        justify="center">
        <Col align="center">
          <Tooltip
            content="Coming Soon"
            placement="right">
            <Button
              icon={<FaStore />}
              size="lg"
              >
              Create an account
            </Button>
          </Tooltip>
          <Spacer y={.3} />
          <Link target={'_blank'}
            href={'https://twitter.com/checksfinance'}>
            <Button bordered
              color="primary"
              size="lg"
              icon={<FaBell />}>
              Follow us on Twitter
            </Button>
          </Link>
          <Text className={styles.notes}
            size={14}>get to know when we are ready</Text>
        </Col>
      </Row>
      <Grid.Container gap={2} justify="center">
        <Grid md={5.5} xl={4} sm={7} xs={10}>
          <Image src={section1}
            alt="section-banner" />
        </Grid>
      </Grid.Container>

      <Spacer y={1} />

      <Grid.Container gap={2} justify="center">
        <Grid>
          <Card css={{ mw: "330px" }}>
            <Text h4>👩‍💻 Powerful CRM build upon Web3</Text>
            <Text>We offer a CRM that allows any merchant to issue NFT membership cards and points to their customers at zero cost, with all token available on multiple public chains, such as Ethereum and Polygon. It's the web3 way to maintaining customer relationships.</Text>
            <Card.Footer>
              <Link color="primary" href="#crm">
                Find out more
              </Link>
            </Card.Footer>
          </Card>
        </Grid>

        <Grid>
          <Card css={{ mw: "330px" }}>
            <Text h4>🙈 NFT & everything all in one box</Text>
            <Text>We support the issuance of NFT and ERC20 tokens, all basic service suites are available out of the box, whether you want to use NFT to manage your membership system or issue point promotions, we support them right out of the box.</Text>
            <Card.Footer>
              <Link color="primary" href="#nft">
                Find out more
              </Link>
            </Card.Footer>
          </Card>
        </Grid>

        <Grid>
          <Card css={{ mw: "330px" }}>
            <Text h4>📱 The best onboarding experience</Text>
            <Text>Mobile first is our main strategy, through well-designed mobile applications, we are committed to providing our users with a product experience that works like web2. We believe that this will bring everyone into web3.</Text>
            <Card.Footer>
              <Link color="primary" href="#app">
                Find out more
              </Link>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
  )
}

function Footer () {
  return (
    <footer>
      <Container className={ styles.footer }>
        <Grid.Container
          gap={2}>
          <Grid md={6} xs={12}>
            <Row>
              <Col>
                <Text h2
                  className={styles.title}
                  size={30}>{_site.title.toLocaleLowerCase()}</Text>
                <Text>contact@checks.finance</Text>
              </Col>
            </Row>
          </Grid>
          <Grid md={3} xs={12}>
            <Row>
              <Col>
                <Text h4>Keep in touch</Text>
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
                <Text h4>Company</Text>
                <Spacer y={.5} />
                <Text>Checks K.K. is an entity registered in Minato-ku, Tokyo, Japan.</Text>
              </Col>
            </Row>
          </Grid>
        </Grid.Container>
      </Container>
    </footer>
  )
}

function QandA() {
  return (
    <Grid.Container gap={2} 
      justify="center">
      <Grid>
        <Collapse.Group 
          accordion={false}>
          <Collapse title="Q1" expanded>
            <Text>
            </Text>
          </Collapse>
          <Collapse title="Q2" >
            <Text>
            </Text>
          </Collapse>
          <Collapse title="Q3" >
            <Text>
            </Text>
          </Collapse>
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
