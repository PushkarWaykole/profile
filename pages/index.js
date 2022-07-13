import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Head from 'next/head'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

import Image from 'next/image'



const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <>
  <Head>
      <title>Pushkar Waykole</title>
      <meta name='description' content='I hope this tutorial is helpful for you' />
    </Head>
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Web developer based in Mumbai!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pushkar Waykole
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/pushkar.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I have developed many personal projects and have an experaince of over 
          2 years in web development.<br />
          Also I am a full stack MERN developer and have made many full stack applications
          using MERN stack.

        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Mumbai.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed 12th Science from Vartak College.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Btech in Computer Science and Engineering(Data Science)<br />
          Will Graduate from Dwarkadas J. Sanghvi College of Engineering
          
        </BioSection>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://www.instagram.com/pushkar_waykole/" target="_blank">
            Drawing,{' '} 
          </Link>
          <Link href="https://www.instagram.com/pushkar_waykole/" target="_blank">
             Photography
          </Link>
          , Machine Learning,{' '}Anime
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/PushkarWaykole" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @PushkarWaykole
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/waykole_pushkar?t=AdateBv7V_7C-qFgI6AhPw&s=09" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @waykole_pushkar
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="https://www.instagram.com/pushkar_waykole/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @PushkarWaykole
              </Button>
            </Link>
          </ListItem>
        </List>

        

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
  </>
)

export default Home
export { getServerSideProps } from '../components/chakra'
