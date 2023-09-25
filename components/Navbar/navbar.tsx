import {
  Box,
  Button,
  Center,
  Circle,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Stack,
  StackDivider,
  StackProps,
  Text,
  useBreakpointValue,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ElementType, ReactNode, useEffect } from 'react';
import {
  BlogIcon,
  CloseIcon,
  HamburgerMenuIcon,
  ProjectIcon,
  SnippetIcon,
  TalksIcon,
} from '../Icons/nav-icons';

type NavItemProps = {
  children: ReactNode;
  active?: boolean;
  icon: ElementType;
  href?: string;
  large?: boolean;
};

function NavItem(props: NavItemProps) {
  const { children, icon, active, href, large } = props;
  return (
    <HStack
      as={Link}
      href={href}
      spacing="2"
      paddingX="3"
      paddingY={large ? '5' : '2.5'}
      rounded="lg"
      aria-current={active ? 'page' : undefined}
      _hover={{ color: '_blue.main' }}
      _activeLink={{ bg: 'gray.800', shadow: 'highlight' }}
      transition="0.2s ease"
    >
      <Icon as={icon} color="_blue.main" fontSize="lg" />
      <Text fontFamily="heading">{children}</Text>
    </HStack>
  );
}

const items = [
  // { label: 'Talks', href: '/talks', icon: TalksIcon },
  { label: 'Profile', href: '/profile', icon: BlogIcon },
  { label: 'Projects', href: '/projects', icon: ProjectIcon },
  { label: 'Snippets', href: '/snippets', icon: SnippetIcon },
];

function DesktopNavItemGroup(props: StackProps) {
  const { asPath } = useRouter();

  return (
    <HStack as="nav" aria-label="Main navigation" spacing="8" {...props}>
      {items.map((item) => (
        <>
          {item.href === '/snippets' ? (
            <Box position="relative">
              <Box
                position="absolute"
                top="-10px"
                right="0"
                background="yellow"
                px="8px"
                borderRadius="6px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="#000"
                fontSize="12px"
              >
                soon
              </Box>
              <Button
                cursor="not-allowed"
                bg="transparent"
                disabled
                paddingX="3"
                _hover={{ bg: 'transparent' }}
                fontWeight="500"
              >
                <Icon as={item.icon} color="_blue.main" fontSize="lg" mr="2" />
                {item.label}
              </Button>
            </Box>
          ) : (
            <NavItem
              key={item.label}
              href={item.href}
              icon={item.icon}
              active={asPath.startsWith(item.href)}
            >
              {item.label}
            </NavItem>
          )}
        </>
      ))}
    </HStack>
  );
}

function MobileNavItemGroup(props: StackProps) {
  return (
    <Stack
      divider={<StackDivider borderColor="whiteAlpha.300" />}
      as="nav"
      aria-label="Main navigation"
      spacing="0"
      {...props}
    >
      {items.map((item) => (
        <>
          {item.href === '/snippets' ? (
            <Flex position="relative" justify="space-between" align="center">
              <Button
                cursor="not-allowed"
                bg="transparent"
                disabled
                paddingX="3"
                _hover={{ bg: 'transparent' }}
              >
                <Icon as={item.icon} color="_blue.main" fontSize="lg" mr="2" />
                {item.label}
              </Button>
              <Box
                background="yellow"
                px="8px"
                borderRadius="6px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="#000"
                h="30px"
              >
                soon
              </Box>
            </Flex>
          ) : (
            <NavItem key={item.label} href={item.href} icon={item.icon} large>
              {item.label}
            </NavItem>
          )}
        </>
      ))}
    </Stack>
  );
}

function Headshot() {
  return (
    <Circle size="10" rounded="full" borderWidth="2px" borderColor="_blue.main">
      <Circle rounded="full" overflow="hidden" size="8">
        <VisuallyHidden>Home</VisuallyHidden>
        <Image
          priority
          alt="Edric Phan"
          src="/static/images/avatar-1.png"
          width={32}
          height={32}
          style={{ objectFit: 'cover' }}
        />
      </Circle>
    </Circle>
  );
}

function MobileNavMenu() {
  const menu = useDisclosure();

  const breakpoint = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (menu.isOpen && !breakpoint) {
      menu.onClose();
    }
  }, [breakpoint, menu]);

  return (
    <>
      <Center
        width="10"
        height="10"
        display={{ base: 'flex', md: 'none' }}
        as="button"
        aria-haspopup="true"
        aria-expanded={menu.isOpen}
        aria-controls="nav-menu"
        id="nav-menu--trigger"
        type="button"
        onClick={menu.onOpen}
      >
        {menu.isOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
      </Center>
      <Drawer isOpen={menu.isOpen} onClose={menu.onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent id="nav-menu" bg="gray.800" padding="6">
          <MobileNavItemGroup />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function Navbar() {
  return (
    <Box as="header" paddingY="6" maxWidth="6xl" marginX="auto" paddingX="6">
      <Flex justify="space-between" align="center">
        <Link href="/">
          <Headshot />
        </Link>
        <DesktopNavItemGroup display={{ base: 'none', md: 'flex' }} />
        <MobileNavMenu />
      </Flex>
    </Box>
  );
}
