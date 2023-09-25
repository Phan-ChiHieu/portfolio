import { Box, Flex, GridItem, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import siteConfig from 'site.config';
import LinkItem from '../link-item';
import { EmailIcon, GithubIcon, LinkedInIcon } from '../Icons/social-icons';

function FooterLink({ href, children }: any) {
  return (
    <Box as={Link} href={href}>
      {children}
    </Box>
  );
}

export default function Footer() {
  return (
    <Box as="footer" position="relative" paddingY="20">
      <Box maxWidth="6xl" marginX="auto" paddingX="6">
        <SimpleGrid columns={{ base: 4, md: 12 }} spacing="16">
          <GridItem colSpan={6}>
            <Box>
              <Heading marginBottom="6" size="lg">
                Edric Phan
              </Heading>
              <Text fontSize="lg">
                A passionate UI engineer bridging design and code with zeal.
              </Text>
            </Box>

            <HStack marginTop="9" spacing={{ base: '8', md: '10' }}>
              <LinkItem href={siteConfig.profiles.linkedin} icon={LinkedInIcon}>
                LinkedIn
              </LinkItem>
              <LinkItem href={siteConfig.profiles.github} icon={GithubIcon}>
                GitHub
              </LinkItem>
              <LinkItem href={siteConfig.profiles.email} icon={EmailIcon}>
                Email
              </LinkItem>
            </HStack>
          </GridItem>

          <GridItem colSpan={3}>
            <Heading as="h2" marginBottom="6" size="lg">
              Contact
            </Heading>
            <Flex direction="column" gap="4">
              <FooterLink href={siteConfig.profiles.email}>Email Edric</FooterLink>
              <FooterLink href="https://t.me/EdricPhan1997">Chat with Edric</FooterLink>
              <FooterLink href={siteConfig.profiles.email}>Join Discord</FooterLink>
            </Flex>
          </GridItem>

          <GridItem colSpan={3}>
            <Heading as="h2" marginBottom="6" size="lg">
              General
            </Heading>
            <Flex direction="column" gap="4">
              <FooterLink href="/">My Mission</FooterLink>
              <FooterLink href="/">My Story</FooterLink>
              <FooterLink href="/">My Family</FooterLink>
            </Flex>
          </GridItem>
        </SimpleGrid>

        <Text marginTop="20">All rights reserved &copy; Edric Phan {new Date().getFullYear()}</Text>
      </Box>
    </Box>
  );
}
