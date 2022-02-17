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
    <Container py="200px" bg="#000" maxW="100%">
      <Container color="white" maxW='1200px' px="0 !important">
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
        >
          <Stack zIndex="1">
            <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true}>
              <Text opacity="0.4" fontSize='11px' fontWeight='500' letterSpacing='1.1px' textAlign="center" mb="24px">MY WORK PHILOSOPHY</Text>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true}>

              <Heading maxWidth="910px" fontFamily="Bebas Neue" color="#fff" fontSize={{ base: '38px', sm: '38px', md: '64px', lg: '64px' }} lineHeight={{base: "44px",sm: "44px", md: "76px",lg:"76px"}} fontWeight="400">
              „Simplicity is the soul of efficiency.”
              </Heading>
            </ScrollAnimation>
          </Stack>
          <Stack mt="30px !important" zIndex="1">
            <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true}>

              <Container justify="center" maxW={'540px'} mx="0">
                <Text
                  color="#ffffff73"
                  fontWeight="400"
                  fontSize="15px"
                  lineHeight="28px">
                  I aim to build and ship easy to use and accessible products and
services for the new generation of workers. 
                </Text>
              </Container>
            </ScrollAnimation>
          </Stack>
        </Stack>
      </Container >
    </Container >
  );
}