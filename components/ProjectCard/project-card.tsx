// import { type Project } from 'contentlayer/generated';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { DescriptionList } from '@/components/DescriptionItem/description-item';
import LinkItem from '@/components/Icons/link-item';
import { GithubIcon, WebsiteIcon } from '@/components/Icons/social-icons';
import ViewMore from '../Viewmore/view-more';

type ProjectCardProps = {
  data: any;
};

export default function ProjectCard(props: ProjectCardProps) {
  const { data: project } = props;
  // const Component = useMDXComponent(project.code);

  // console.log('project', project);

  return (
    <Flex gap="20" direction={{ base: 'column', md: 'row' }}>
      <Box maxWidth={{ md: '27.5rem' }} flex="1">
        <Stack spacing="6">
          <Heading as="h3" color="_blue.main" letterSpacing="tight">
            {project.title}
          </Heading>
          <Text mt="10px !important" as="h6" color="#fff" letterSpacing="tight" fontWeight="bold">
            {project.specialized}
          </Text>
          {(project.github || project.website) && (
            <HStack spacing="12">
              {project.github && (
                <LinkItem icon={GithubIcon} href={project.github} iconColor="whiteAlpha.600">
                  Github
                </LinkItem>
              )}
              {project.website && (
                <LinkItem icon={WebsiteIcon} href={project.website} iconColor="whiteAlpha.600">
                  Website
                </LinkItem>
              )}
              {project.app && (
                <LinkItem icon={WebsiteIcon} href={project.app} iconColor="whiteAlpha.600">
                  App
                </LinkItem>
              )}
              {project.cms && (
                <LinkItem icon={WebsiteIcon} href={project.cms} iconColor="whiteAlpha.600">
                  Cms
                </LinkItem>
              )}
            </HStack>
          )}
          <Box fontSize="lg">
            <Text>{project.content}</Text>
          </Box>
          <Box marginTop="2rem !important">
            <DescriptionList data={project.metadata} />
          </Box>
        </Stack>
      </Box>

      <ProjectImageCard src={project.image} alt={project.title} />
    </Flex>
  );
}

type ProjectImageCardProps = {
  src?: string;
  alt: string;
  objectPosition?: string;
};

function ProjectImageCard(props: ProjectImageCardProps) {
  const { src, alt, objectPosition = '-16%' }: any = props;

  // console.log('src', src);

  return (
    <Box
      flex={{ md: '1' }}
      position="relative"
      height="25rem"
      width="100%"
      overflow="hidden"
      bg="linear-gradient(248.57deg, #56CCF2 19.87%, #2F80ED 97.33%)"
      boxShadow="0px 20px 25px rgba(0, 0, 0, 0.1)"
      rounded="2xl"
    >
      <Box
        position="absolute"
        left="10"
        top="10"
        width="56.25rem"
        height="31.25rem"
        bg="white"
        rounded="lg"
        overflow="hidden"
        boxShadow="xl"
        sx={{
          ' > span': {
            transform: 'scale(1.01)',
          },
        }}
      >
        <Image alt={'EdricPhan'} src={src} fill style={{ objectFit: 'cover', objectPosition }} />
      </Box>
    </Box>
  );
}
