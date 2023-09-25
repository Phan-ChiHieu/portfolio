// import { type Project } from 'contentlayer/generated';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { DescriptionList } from '@/components/DescriptionItem/description-item';
import LinkItem from '@/components/Icons/link-item';
import { GithubIcon, WebsiteIcon } from '@/components/Icons/social-icons';
import ViewMore from '../Viewmore/view-more';

type CerticationsProps = {
  data: any;
};

export default function Certications(props: CerticationsProps) {
  const { data: project } = props;
  // const Component = useMDXComponent(project.code);

  // console.log('project', project);

  return (
    <Flex gap="20" direction={{ base: 'column', md: 'row' }}>
      <Box maxWidth={{ md: '27.5rem' }} flex="1">
        <Stack spacing="6">
          <Heading
            color="_blue.main"
            letterSpacing="tight"
            as="a"
            href={project._link}
            rel="noopener"
            target="_blank"
          >
            {project.skill}
          </Heading>
          <Text mt="10px !important" as="h6" color="#fff" letterSpacing="tight" fontWeight="bold">
            {project.company}
          </Text>
          <Box as="a" fontSize="lg" href={project._link} rel="noopener" target="_blank">
            <Text display={'flex'} align="center" gap={'6px'}>
              Credential ID:{' '}
              <Text
                as="strong"
                color="_blue.main"
                textOverflow={'ellipsis'}
                maxW="120px"
                display={'inline-block'}
                overflow={'hidden'}
                whiteSpace={'nowrap'}
              >
                {project.id}
              </Text>
            </Text>
          </Box>
          <Box fontSize="lg">
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
          </Box>
        </Stack>
      </Box>
      <ProjectImageCard src={project.image} alt={project.skill} href={project._link} />
    </Flex>
  );
}

type ProjectImageCardProps = {
  src?: string;
  href?: string;
  alt: string;
  objectPosition?: string;
};

function ProjectImageCard(props: ProjectImageCardProps) {
  const { href, src, alt, objectPosition = '-16%' }: any = props;

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
      as="a"
      href={href}
      rel="noopener"
      target="_blank"
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
