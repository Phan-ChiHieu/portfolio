import React from 'react';
import {
  Box,
  Circle,
  Flex,
  HStack,
  Heading,
  HeadingProps,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useMediaQuery,
} from '@chakra-ui/react';
import Image from 'next/image';
import Container from '@/components/Layout/container';
import Emoji from '@/components/Emoji/emoji';
import GithubStarIcon from '@/components/Icons/github-star';
import ChakraLogo from '@/components/Icons/chakra-logo';
import LinkItem from '@/components/LinkItem/link-item';
import {
  EmailIcon,
  FileIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/Icons/social-icons';
import siteConfig from 'site.config';
import tools, {
  allFeaturedHot,
  allFeaturedProjects,
  featuredCertificates,
} from '@/components/Tools/tools';
import Canvas from './Canvas';
import ProjectCard from '@/components/ProjectCard/project-card';
import ViewMore from '@/components/Viewmore/view-more';
import Link from 'next/link';
import SubscribeForm from '@/components/Subscribe/subscribe-form';
import Certications from '@/components/Certications/certications-card';

function MainHeading(props: HeadingProps) {
  return (
    <Heading
      as="h1"
      width="full"
      fontFamily="heading"
      fontSize={{ base: '4rem', md: '7rem' }}
      letterSpacing="tight"
      lineHeight="1"
      userSelect="none"
      color="white"
      marginBottom="4"
      whiteSpace="nowrap"
      {...props}
    />
  );
}

function AchievementItem({ icon, children }: any) {
  return (
    <HStack spacing="3">
      <Icon as={icon} fontSize="4xl" />
      <Text fontFamily="heading" fontSize="xl">
        {children}
      </Text>
    </HStack>
  );
}

const HomePage = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 835px)');
  return (
    <Container>
      <Stack align={'center'} direction={{ base: 'column', md: 'row' }}>
        <Flex direction="column" paddingY="24">
          <MainHeading>Edric Phan</MainHeading>
          <Text
            color="_blue.main"
            display="block"
            fontSize="4xl"
            fontFamily="heading"
            fontWeight="500"
            lineHeight="1.2"
          >
            UI engineer &amp; product designer
          </Text>

          {/* I'm passionate about... */}
          <Text
            marginTop="14"
            fontFamily="body"
            maxWidth="40rem"
            fontSize={{ base: 'lg', md: '2xl' }}
          >
            My passions lie in <Emoji label="design system">🎨</Emoji> design systems,{' '}
            <Emoji label="accessibility">♿️</Emoji> accessibility,{' '}
            <Emoji label="state machine">⚙️</Emoji> state machines, and{' '}
            <Emoji label="love">😍 </Emoji> user experience
          </Text>

          {/* Github star and Chakra brag */}
          <Box marginTop={{ base: '8', md: '14' }} width="full">
            <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '5', md: '10' }}>
              <AchievementItem icon={GithubStarIcon}>Github Star</AchievementItem>
              <AchievementItem icon={ChakraLogo}> Framework UI</AchievementItem>
            </Flex>
          </Box>
        </Flex>
        <Box>
          <Image alt={'EdricPhan'} width="428" height="428" src={'/static/images/mascot.png'} />
        </Box>
        {/* {!isLargerThan800 ? (
          <Box position={'relative'} w="100%" h="100%">
            <Image alt={'EdricPhan'} width="428" height="428" src={'/static/images/mascot.png'} />
          </Box>
        ) : (
          <Canvas />
        )} */}
      </Stack>
      <Flex
        paddingY="vGutter"
        gap={{ base: '5', lg: '20' }}
        justify="space-between"
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box maxWidth={{ lg: '36rem' }}>
          {/* Circular Headshot */}
          <Circle
            display={{ base: 'none', lg: 'flex' }}
            position={'relative'}
            size="6.25rem"
            float="left"
            marginRight="6"
            overflow="hidden"
          >
            <Image
              alt="EdricPhan"
              src="/static/images/avatar100-1.png"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Circle>

          <Heading
            lineHeight="1"
            fontSize={{ base: '3rem', md: '5rem', lg: '6.25rem' }}
            letterSpacing="tight"
            color="#fff"
          >
            I design{' '}
            <Box as="span" color="_blue.main">
              component systems
            </Box>
          </Heading>
        </Box>

        <Box maxWidth={{ lg: '27.5rem' }} marginTop="4">
          <Text fontSize={{ base: 'lg', md: '2xl' }}>
            A design-oriented engineer specializing in design systems, accessibility, and interface
            design for digital products.
          </Text>

          {/* Profile links */}
          <SimpleGrid columns={2} marginTop="10" spacing="10" maxWidth="16rem">
            <LinkItem icon={LinkedInIcon} href={siteConfig.profiles.linkedin}>
              LinkedIn
            </LinkItem>
            <LinkItem icon={GithubIcon} href={siteConfig.profiles.github}>
              Github
            </LinkItem>
            <LinkItem icon={EmailIcon} href={siteConfig.profiles.email}>
              Email
            </LinkItem>
            <LinkItem icon={FileIcon} href={'https://gitlab.com/devpch.wwp'}>
              Gitlab
            </LinkItem>
          </SimpleGrid>
        </Box>
      </Flex>

      {/* Featured projects */}
      <Box as="section" py="vGutter">
        <Heading size="3xl" letterSpacing="tight" color="#fff">
          Featured Projects
        </Heading>
        <Box marginTop="vGutter">
          <Stack spacing="20">
            {allFeaturedHot.map((project) => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </Stack>
        </Box>
        <Box pt="2.5rem">
          <Link href="/projects">
            <ViewMore as="div">View all Project</ViewMore>
          </Link>
        </Box>
      </Box>

      {/* Licenses & certifications */}
      <Box as="section" py="vGutter">
        <Heading size="3xl" letterSpacing="tight" color="#fff">
          Certifications
        </Heading>
        <Box marginTop="vGutter">
          <Stack spacing="20">
            {featuredCertificates.map((project) => (
              <Certications key={project.skill} data={project} />
            ))}
          </Stack>
        </Box>
      </Box>
      {/* Tools & Softwares */}
      <Box as="section" py="vGutter">
        <Box marginBottom="16">
          <Heading size="3xl" letterSpacing="tight" color="#fff">
            Tools &amp; Softwares
          </Heading>
          <Text marginTop="5" fontSize="lg" maxWidth={{ md: '45rem' }}>
            Over the years, I had the opportunity to work with various software, tools and
            frameworks. Here are some of them:
          </Text>
        </Box>

        {/* ToolList */}
        <Wrap spacing="10">
          {tools.map((tool) => (
            <WrapItem fontFamily="heading" fontSize="3xl" color="_blue.main" key={tool}>
              {tool}
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      {/* Subscribe callout */}
      <Box as="hr" borderColor="whiteAlpha.300" />
      <SubscribeForm />
      <Box as="hr" borderColor="whiteAlpha.300" />
    </Container>
  );
};

export default HomePage;
