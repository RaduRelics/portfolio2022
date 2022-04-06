import {
  Box,
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  useColorModeValue,
  createIcon,
  Image
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import TextLoop from "react-text-loop";
import CircleButton from '../../../UI/CircleButton/circlebutton';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-scroll-parallax';
import NextLink from 'next/link'

export const Line = (props: IconProps) => {
  return (

    <Icon display={{ base: 'none', sm: 'none', md: 'none', lg: 'inline-block' }}
      draggable="false"
      position='relative'
      left='0px'
      top='0px'
      mt="0 !important"
      width='67%' height="16" viewBox="0 0 878 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12.2765C59.9097 5.28768 121.262 8.07546 177.506 5.14558C209.18 3.49565 241.132 4.72612 272.835 4.72612C302.162 4.72612 331.488 4.72612 360.815 4.72612C400.824 4.72612 440.598 8.27556 480.571 8.5013C561.191 8.95659 641.615 12.2765 722.269 12.2765C761.024 12.2765 799.722 12.4892 838.45 10.8084C850.246 10.2964 862.219 8.5013 874 8.5013" stroke={useColorModeValue('#e43c47', '#40b4ed')} strokeWidth="7" strokeLinecap="round" strokeLinejoin="bevel" />
    </Icon>
  )
}

export default function HeroSection() {
  return (
    <Container bg={useColorModeValue("#ff0047", "#0089ff")} maxW="100%">
      <Container mt={{ base: '75px', sm: '0px', md: '0px', lg: '0px' }} color="white" pb={{ base: '60px', sm: '60px', md: '240px', lg: '240px' }} maxW='1200px'>
        <Stack
          textAlign={'left'}
          align={'left'}
          spacing={{ base: 8, md: 10 }}
        >
          <Stack zIndex="1">
            <ScrollAnimation animatePreScroll={true} animateIn="fadeInDown" delay={500} animateOnce={true}>

              <Heading fontFamily="Bebas Neue" color="#fff" fontSize={{ base: '65px', sm: '80px', md: '150px', lg: '200px' }} lineHeight={{ base: "80px", sm: "80px", md: "138px", lg: "180px" }} fontWeight="400">
                DESIGN. BRANDING. DEVELOPMENT.

              </Heading>
            </ScrollAnimation>
          </Stack>

          <Stack
            display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }}
            position='absolute'
            width='680px'
            top='auto'
            right='0%'

            opacity="0.5"
            mt="0px !important"
          >
            <Parallax y={[-20, 20]}>

              <ScrollAnimation animatePreScroll={true} animateIn="zoomIn" delay={700} animateOnce={true}>
                <Image
                  draggable="false"
                  styles="mix-blend-mode: luminosity"
                  width='680px'
                  height="850px"
                  filter='grayscale(100%)'
                  alt="Photo"
                  src="/images/photo.jpg" />
              </ScrollAnimation>
            </Parallax>
          </Stack>
        </Stack>
        <ScrollAnimation animatePreScroll={true} animateIn="fadeInLeft" delay={600} animateOnce={true}>

          <Container justify="center" maxW={'560px'} mt={{ base: '10px', sm: '10px', md: '10px', lg: '10px' }} mx="0 !important" px="0 !important">
            <Text
              color="#ffe4e2"
              fontWeight="400"
              fontSize={{ base: '16px', sm: '16px', md: '18px', lg: '18px' }}
              fontStyle='italic'>
              I help agencies and creatives design and develop memorable experiences for their products and build their brand identity with clarity, meaning, and intention.
            </Text>
          </Container>
        </ScrollAnimation>

        <Flex mt='30px' justify="left">
          <ScrollAnimation animatePreScroll={true} delay={800} animateIn="zoomIn" animateOnce={true}>
            {/* <CircleButton /> */}
            <NextLink href="mailto:miihairadu@gmail.com">
              <div className="cursorHover">
                <Button
                  d='flex'
                  position='relative'
                  alignItems='center'
                  justifyContent="none"
                  h='80px'
                  w="100%"
                  px="0"
                  m="0"
                  bg="transparent"
                  color={useColorModeValue('#fff', '#fff')}
                  border="1px solid #fff"
                  borderRadius="0%"
                  fontSize={{ base: "4vw", sm: "4vw", md: "1.2vw", lg: "1.2vw" }}
                  _hover={{ bg: { light: '#FFE4DF', dark: '#cccccc' } }}>
                  <Box
                    height= '100%'
                    px= {{base: '20px', sm: '20px', md: '40px', lg:'40px'}}
                    marginRight= {{base: '20px', sm: '20px', md: '40px', lg:'40px'}}
                    display= 'flex'
                    boxSizing= 'border-box'
                    borderRight= '1px solid #fff'
                    justifyContent= 'center'
                    alignItems= 'center'
                  >
                    <svg width="16" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M.254 10.188H15.12V.438H.254v9.75zm2.403-8.635h10.075L7.72 4.923l-5.062-3.37zm-1.287.484l6.352 4.228 6.283-4.222v7.03H1.37V2.037z" fill="#fff" fillRule="evenodd"></path></svg>
                  </Box>
                  <Text
                  marginRight= {{base: '20px', sm: '20px', md: '40px', lg:'40px'}}
                  >
                    hello@mihairadu.cf
                  </Text>
                </Button>
              </div>
            </NextLink>
          </ScrollAnimation>
        </Flex>

      </Container >
    </Container >
  );
}