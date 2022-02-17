import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
    useColorModeValue,
    ColorModeProvider, useColorMode,
    Image
} from '@chakra-ui/react';
import NextLink from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll';

export default function CallToActionWithIllustration() {
    const { colorMode } = useColorMode()
    return (
        <Container bg={useColorModeValue("#FFE4DF","#000")} pt={{ base: '100px', sm: '100px', md: '150px', lg: '340px' }} pb='300px' maxW="100%">
            <Container maxW={'8xl'} id="about">
                <Stack
                    direction={["column", "row"]}>
                    <Stack
                        mr='80px'
                        width="100%"
                    >
                        <ScrollAnimation style={{ marginTop: '0 !important' }} animateIn="zoomIn" delay={300} animateOnce={true}>

                            {/* <Image
                                width={{base: "296px", sm: "296px", md:"623px",lg:"623px"}}
                                height={{base: "370px", sm: "370px", md: "779px", lg:"779px"}}
                                maxWidth='100%'
                                src="/img/tempphoto2.jpg"
                                alt="Picture of Me"
                            /> */}
                            <Image
                                width="auto"
                                height="auto"
                                maxWidth='100%'
                                src="/img/photo.jpg"
                                alt="Picture of Radu Mihai Alexandru"
                            />
                        </ScrollAnimation>
                    </Stack>
                    <Stack
                        textAlign={'left'}
                        align={'left'}
                        spacing={{ base: 8, md: 10 }}
                    >
                        <ScrollAnimation style={{ marginTop: '0 !important' }} animateIn="fadeInDown" delay={500} animateOnce={true}>

                            <Heading className="stroke" color="transparent" fontSize={{ base: '50px', sm: '50px', md: '50px', lg: '100px' }} lineHeight="120%" fontWeight="400">
                                Hello !
                                <br />
                                I am Mihai
                            </Heading>
                        </ScrollAnimation>
                        <ScrollAnimation style={{ marginTop: '0 !important' }} animateIn="fadeInDown" delay={700} animateOnce={true}>

                            <Heading
                                mt='15px !important'
                                fontSize={{ base: '30px', sm: '30px', md: '36px', lg: '48px' }}
                                lineHeight='120%'
                                fontWeight='400'
                            >
                                I’m Building Digital
                                <br />
                                Experiences & Interfaces


                            </Heading>
                        </ScrollAnimation>

                        <ScrollAnimation style={{ marginTop: '0 !important' }} animateIn="fadeIn" delay={1000} animateOnce={true}>

                            <Text
                                my='35px !important'
                                fontSize='20px'
                            >
                                I’m Mihai Radu, a freelance Product / UI - UX Designer & Developer currently living in Romania.
                                <br />
                                <br />
                                With an entrepreneurial spirit, and big passion I strive to offer what the client wants to gain, a functional and professional design solution.
                                <br />
                                <br />
                                One of my goals during a project is to make sure we are always on the same page by documenting and communicating about the journey.
                            </Text>
                        </ScrollAnimation>
                        <ScrollAnimation style={{ marginTop: '0 !important' }} animateIn="zoomIn" delay={1000} animateOnce={true}>

                            <NextLink href="mailto:miihairadu@gmail.com">
                                <div className="cursorHover">
                                    <Button
                                        d='flex'
                                        position='relative'
                                        alignItems='center'
                                        justifyContent="none"
                                        h='80px'
                                        w="100%"
                                        px="40px"
                                        m="0"
                                        bg="transparent"
                                        color={useColorModeValue('#292a2b', '#fff')}
                                        border={useColorModeValue("1px solid #292a2b", "1px solid #fff")}
                                        borderRadius="0%"
                                        fontSize={{base: "4vw", sm: "4vw", md: "1.2vw", lg:"1.2vw"}}
                                        _hover={{ bg: { light: '#1e1e1e', dark: '#cccccc' } }}>
                                        {/* Error with color mode */}
                                        <div className="mailButton">
                                            <svg width="16" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M.254 10.188H15.12V.438H.254v9.75zm2.403-8.635h10.075L7.72 4.923l-5.062-3.37zm-1.287.484l6.352 4.228 6.283-4.222v7.03H1.37V2.037z" fill={useColorModeValue("#292a2b","#fff")} fillRule="evenodd"></path></svg>
                                        </div>
                                       
                                            hello@mihairadu.cf
                                    </Button>
                                </div>
                            </NextLink>
                        </ScrollAnimation>
                    </Stack>
                </Stack>
            </Container >
        </Container>
    );
}