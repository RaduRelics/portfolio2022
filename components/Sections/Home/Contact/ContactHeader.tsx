import {
    Container,
    Heading,
    Stack,
    Text,
    Image,
    Box,
    useColorModeValue,
    Button
} from '@chakra-ui/react';
import ScrollAnimation from 'react-animate-on-scroll';
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function HeroSection() {
    return (
        <Container maxW={'4xl'} pt={{ base: '50px', sm: '50px', md: "100px", lg: "160px" }} pb={{ base: "50px", sm: "50px", md: "100px", lg: "160px" }}>
            <Box pt="60px" display={{ md: 'flex' }}>
                <Box flexGrow={1} textAlign="center">
                    <Text color={useColorModeValue("#3d7aed", "#ff5277")} mb="1rem" fontSize="1.1875rem" fontWeight="700" letterSpacing="1px">GET IN TOUCH</Text>
                    <Heading as="h2" variant="page-title" fontSize={{ base: "3rem", lg: "7rem" }} mb="0.33em" lineHeight="1">
                        Let’s work together
                    </Heading>
                    <Text mb="12px" fontSize={{ base: "1rem", lg: "1.2rem" }}>
                        If you have a project idea in mind, need some advice or just want to say <br /> hi, feel free to contact me and as soon as I’m able to I’ll get in touch <br /> with you.
                    </Text>
                    <div className="cursorHover">
                        <NextLink href="mailto:miihairadu@gmail.com">
                            <Button rightIcon={<ChevronRightIcon />} bg="transparent" color={useColorModeValue("#3d7aed", "#ff5277")} _hover={{ color: useColorModeValue("#366dd5", '#FF2957') }}>
                                Contact me
                            </Button>
                        </NextLink>
                    </div>
                </Box>
            </Box>
        </Container >
    );
}