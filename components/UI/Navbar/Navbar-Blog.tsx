import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Container
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import DarkModeSwitch from './DarkModeSwitch-Blog';
import NextLink from 'next/link'

import ScrollAnimation from 'react-animate-on-scroll';


const Logo = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={40} viewBox="0 0 589 628" {...props}>
      <g fill={useColorModeValue('#292a2b', 'white')} id="Logo" data-name="Logo">
        <path id="Top" d="M0,0V135L295,383,589,135V0L295,259Z" />
        <path id="Bottom" d="M0,245V380L295,628,589,380V245L295,504Z" />
        <path id="Left_Leg" data-name="Left Leg-good" d="M0,336V491l98,81V458Z" />
        <path id="Right_Leg" data-name="Right Leg-good" d="M589,354V489l-97,83V435Z" />
        <path id="Lower-Part-WLegs" d="M589,244.884L295,504.05,0,244.884V491l97.75,81.75V462L295,628.25,491.75,462V572.75L589,489V244.884Z" />
      </g>
    </svg>


  );
};

//old red #e61e2b

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    // <ScrollAnimation animatePreScroll={true} offset={850} style={{marginTop: '0 !important', zIndex: '9'}} animateIn="fadeInDown" delay={300} animateOnce={true}>

      <Box zIndex="2">
        <Container maxW='1200px'>
        <Flex
          bg="transparent"
          color={useColorModeValue('white', 'white')}
          minH={'60px'}
          // pt={{ base: '20px', sm: '20px', md: '50px', lg: '100px' }}
          pb={{ base: '0px', sm: '0px', md: '40px', lg: '80px' }}
          // px={{ base: 4, sm: 4, md: 4, lg: 300, xl: 500 }}
          // mb={{ base: '75px', sm: '0px', md: '0px', lg: '0px' }}
          mb="0px"
          align={'center'}
          justifyContent='space-between'
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              _hover={{bg: "#000000"}}
              _active={{bg: "#000"}}
            />
          </Flex>

          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'flex-end' }}>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'flex-start' }}>
              <NextLink href="/">
                <div className="cursorHover">
                  <Logo draggable="false" alt="Michael Radu Logo" />
                </div>
              </NextLink>
            </Flex>
            <Flex display={{ base: 'none', md: 'flex' }} mr={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <DarkModeSwitch />
          </Stack>
        </Flex>
        </Container>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    // </ScrollAnimation>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('#292a2b', 'gray.200');
  const linkHoverColor = useColorModeValue('##292a2b', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box d="flex" key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link

                p={2}
                href={navItem.href ?? '#'}
                fontFamily={'Poppins'}
                fontSize={'0.8rem'}
                fontWeight={600}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'red.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'red.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href} color={useColorModeValue('gray.600', 'gray.200')}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'PORTFOLIO',
    href: '/#portfolio',
    // children: [
    //   {
    //     label: 'Explore Design Work',
    //     subLabel: 'Trending Design to inspire you',
    //     href: '/portfolio',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: 'ABOUT',
    href: '/#about',
    // children: [
    //   {
    //     label: 'Job Board',
    //     subLabel: 'Find your dream design job',
    //     href: '#',
    //   },
    //   {
    //     label: 'Freelance Projects',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: 'BLOG',
    href: '/#blog',
  },
  {
    label: 'GET IN TOUCH',
    href: 'mailto:miihairadu@gmail.com',
  },
];