import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import NextLink from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll';

const Logo = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={48} viewBox="0 0 589 628" {...props}>
      <g fill="#e61e2b" id="Logo" data-name="Logo">
        <path id="Top" d="M0,0V135L295,383,589,135V0L295,259Z" />
        <path id="Bottom" d="M0,245V380L295,628,589,380V245L295,504Z" />
        <path id="Left_Leg" data-name="Left Leg-good" d="M0,336V491l98,81V458Z" />
        <path id="Right_Leg" data-name="Right Leg-good" d="M589,354V489l-97,83V435Z" />
        <path id="Lower-Part-WLegs" d="M589,244.884L295,504.05,0,244.884V491l97.75,81.75V462L295,628.25,491.75,462V572.75L589,489V244.884Z" />
      </g>
    </svg>


  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (

    <ScrollAnimation style={{ margin: '0 !important' }} animateIn="fadeInUp" delay={300} animateOnce={true}>

      <Box

        padding='3rem 20px'
        bg={useColorModeValue('#FFE4DF', '#0a141f')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          fontSize={{ base: '20px', lg: "24px" }}
          direction={['column', "row"]}
          as={Stack}
          maxW={'8xl'}
          py={4}
          spacing={4}
          justifyContent={'space-between'}
          align={'center'}>
          {/* <Image
              boxSize="40px"
              objectFit="fill"
              src="/Logo.svg"
              alt="Michael Radu"
            /> */}
          {/* <Stack direction="row" spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/blog'}>Blog</Link>
          <Link href={'miihairadu@gmail.com'}>Contact</Link>
        </Stack> */}
          <NextLink href="#">
            <div className="cursorHover">
              <Logo alt="Michael Radu Logo" />
            </div>
          </NextLink>
          <Stack direction="row" spacing={6}>
            <Link href={'mailto:miihairadu@gmail.com'}>miihairadu@gmail.com</Link>
          </Stack>
        </Container>

        <Box
        >
          <Container
            fontSize="20px"
            borderTopWidth={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('#cecece', 'gray.700')}
            as={Stack}
            maxW={'8xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text
              fontSize={{ base: "14px", sm: "14px", md: "20px", lg: "20px" }}
            >&copy; {new Date().getFullYear()} Michael Radu. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </ScrollAnimation>
  );
}