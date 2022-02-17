import {
    Container,
    Heading,
    Stack,
    Text,
    Image,
    Box,
    useColorModeValue,
} from '@chakra-ui/react';
import ScrollAnimation from 'react-animate-on-scroll';
import NextLink from 'next/link'

export default function HeroSection() {
    return (
        <Container maxW="100%" bg={useColorModeValue('#FFE4DF', '#000')}>
            <Container maxW={'3xl'} pt={{ base: '50px', sm: '50px', md: "100px", lg: "160px" }} pb={{ base: "50px", sm: "50px", md: "100px", lg: "160px" }}>
                <Stack
                    textAlign={'left'}
                    align={'left'}
                    spacing={{ base: 8, md: 10 }}
                >
                    <ScrollAnimation animateIn="fadeInDown" delay={300} animateOnce={true}>
                        {/* <Heading style={{ WebkitTextStroke: "1px #000" }} color="transparent" m='0' textAlign="left" fontSize={{ base: '43px', sm: '43px', md: '70px', lg: '110px' }} fontWeight="600" lineHeight="108%" opacity='.3'>
                            Contact Me
                        </Heading>
                        <Heading b='0' fontSize={{ base: '43px', sm: '43px', md: '70px', lg: '110px' }} textAlign="left" fontWeight="600" lineHeight="108%">
                            Contact Me
                        </Heading>
                        <Heading style={{ WebkitTextStroke: "1px #000" }} color="transparent" m='0' textAlign="left" fontSize={{ base: '43px', sm: '43px', md: '70px', lg: '110px' }} fontWeight="600" lineHeight="108%" opacity='.3'>
                            Contact Me
                        </Heading> */}

                        <Text color={useColorModeValue('#1A202C', '#EDF2F7')} opacity="0.4" fontSize='11px' fontWeight='500' letterSpacing='1.1px' textAlign="center" mb="0px">CONTACT</Text>

                    </ScrollAnimation>
                    <ScrollAnimation style={{margin: '0px !important'}} animateIn="fadeInDown" delay={300} animateOnce={true}>
                        <Box mt="24px" align="center">
                            <Image src="/img/pfp_small.png" width="auto" height="auto" alt="Freelance Project Image" />
                        </Box>
                    </ScrollAnimation>
                    <ScrollAnimation style={{margin: '0px !important'}} animateIn="fadeInDown" delay={300} animateOnce={true}>
                        <Heading color={useColorModeValue('#1A202C', '#fff')} textAlign="center" mb="16px !important" mt="24px !important" as="h1" fontSize={{ base: '38px', sm: '38px', md: '64px', lg: '64px' }} lineHeight={{ base: '44px', sm: '44px', md: '64px', lg: '76px' }}>
                            Got a project? Let’s connect.
                        </Heading>
                    </ScrollAnimation>
                    <ScrollAnimation style={{ marginTop: '0 !important' }} animateIn="fadeInDown" delay={300} animateOnce={true}>
                        <Container maxW="340px">
                            <Text
                                opacity="45%"
                                textAlign="center"
                                lineHeight='28px'
                                color={useColorModeValue("#0d0e10", "white")}
                                fontSize={{ base: '14px', sm: '14px', md: '14px', lg: '14px' }}>
                                If you'd like to talk about a project just drop me a message. I’m currently available.


                            </Text>
                        </Container>
                    </ScrollAnimation>


                    <ScrollAnimation style={{ marginTop: '0 !important' }} animateIn="fadeInUp" delay={500} animateOnce={true}>
                        <Container justifyContent="center">
                            <NextLink href="mailto:miihairadu@gmail.com" as="a">
                                <div style={{ textAlign: 'center' }} className="cursorHover">
                                    <Text
                                        mt="48px !important"
                                        mb="10px"
                                        color={useColorModeValue("#ff0131", "#8dcff6")}
                                        d="inline"
                                        fontWeight="700"
                                        fontSize="14px"
                                    >
                                        Let’s design your app

                                    </Text>
                                </div>
                            </NextLink>
                        </Container>
                    </ScrollAnimation>

                </Stack>


            </Container >
        </Container>
    );
}