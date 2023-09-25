import React from 'react';
import Container from '@/components/Layout/container';
import { Heading, Box, Text, Stack } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ProjectCard from '@/components/ProjectCard/project-card';
import {
  allFeaturedBlockchain,
  allFeaturedCompany,
  allFeaturedOutsource,
  allFeaturedSupport,
} from '@/components/Tools/tools';
const Project = () => {
  return (
    <Container>
      <Box py="vGutter">
        <Box>
          <Heading size="3xl" marginBottom="6" as="h1" color="white">
            Projects
          </Heading>
          <Text fontSize="lg" maxW="560px">
            Here's a list of projects I have developed throughout my years of programming.
          </Text>
        </Box>
      </Box>
      <Tabs isLazy>
        <TabList overflowX={['auto', 'auto', 'hidden', 'hidden']} overflowY="hidden">
          <Tab whiteSpace="nowrap">Blockchain</Tab>
          <Tab whiteSpace="nowrap">Company Website</Tab>
          <Tab whiteSpace="nowrap">Outsourcing Project</Tab>
          <Tab whiteSpace="nowrap">Support</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box marginTop="vGutter">
              <Stack spacing="20">
                {allFeaturedBlockchain.map((project) => (
                  <ProjectCard key={project.title} data={project} />
                ))}
              </Stack>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box marginTop="vGutter">
              <Stack spacing="20">
                {allFeaturedCompany.map((project) => (
                  <ProjectCard key={project.title} data={project} />
                ))}
              </Stack>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box marginTop="vGutter">
              <Stack spacing="20">
                {allFeaturedOutsource.map((project) => (
                  <ProjectCard key={project.title} data={project} />
                ))}
              </Stack>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box marginTop="vGutter">
              <Stack spacing="20">
                {allFeaturedSupport.map((project) => (
                  <ProjectCard key={project.title} data={project} />
                ))}
              </Stack>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Project;
