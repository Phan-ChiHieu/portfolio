import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';

type DescriptionItem = {
  title: string;
  content: string;
  url: string;
};

export function DescriptionList({ data }: { data: DescriptionItem[] }) {
  return (
    <Flex rowGap="4" columnGap="16" flexWrap="wrap">
      {data?.map((item) => (
        <Link key={item.title} href={item.url} target="_blank">
          <Box as="dl">
            <Box
              as="dt"
              color="_blue.main"
              fontSize="sm"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="widest"
              transition="0.2s ease"
              _hover={{ color: 'brown.600' }}
            >
              {item.title}
            </Box>
            <Box
              as="dd"
              fontSize="2xl"
              fontFamily="heading"
              fontWeight="bold"
              transition="0.2s ease"
              _hover={{ color: '#fff' }}
            >
              {item.content}
            </Box>
          </Box>
        </Link>
      ))}
    </Flex>
  );
}
