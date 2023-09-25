import { Alert, Box, chakra, DarkMode, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
// import { useSubscribeForm } from 'lib/use-subscribe-form';

function Feedback({ state, message, count }: any) {
  if (state === 'error') {
    return (
      <DarkMode>
        <Alert role="status" status="error" rounded="md" variant="left-accent" color="white" mt="5">
          {message}
        </Alert>
      </DarkMode>
    );
  }

  if (state === 'success') {
    return (
      <DarkMode>
        <Alert
          role="status"
          status="success"
          rounded="md"
          variant="left-accent"
          color="white"
          mt="5"
        >
          {message}
        </Alert>
      </DarkMode>
    );
  }

  return (
    <Text mt="5">
      {count === 0
        ? 'Be the first subscriber'
        : `${count} ${count === 1 ? 'subscriber' : 'subscribers'}`}
    </Text>
  );
}

export default function SubscribeForm() {
  // const form = useSubscribeForm();
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState('idle');

  return (
    <Box maxWidth="42rem" py="vGutter">
      <Heading marginBottom="4" size="2xl" letterSpacing="tight" color="#fff">
        Stay up to date
      </Heading>

      <Text maxW="32rem" fontSize="lg">
        Get emails from me about web development, tech, and early access to new projects.
      </Text>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          // await form.submit();
        }}
      >
        <Flex gap="4" marginTop="8" direction={{ base: 'column', md: 'row' }}>
          <chakra.input
            required
            // ref={form.inputRef}
            flex="1"
            paddingX="6"
            autoComplete="email"
            paddingY="5"
            name="email"
            aria-label="Enter your email address"
            bg="gray.800"
            rounded="lg"
            placeholder="devpch.wwp@gmail.com"
            _placeholder={{ color: 'whiteAlpha.400' }}
          />
          <chakra.button
            disabled
            minW="10.8rem"
            type="submit"
            aria-label="Enter your email address"
            fontWeight="bold"
            letterSpacing="wide"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            textTransform="uppercase"
            color="#fff"
            paddingX="10"
            paddingY="5"
            rounded="lg"
            transition="background 0.2s ease-in-out"
            bg="_blue.main"
            _hover={{ bg: 'brown.700' }}
            _active={{ bg: 'brown.800' }}
          >
            {state === 'loading' ? <Spinner size="md" /> : 'Subscribe'}
          </chakra.button>
        </Flex>
      </form>
      {/* <Feedback state={form.state} message={form.message} count={form.data?.count ?? 0} /> */}
    </Box>
  );
}
