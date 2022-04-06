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
import NextLink from 'next/link'
import DarkModeSwitch from '../../../UI/Navbar/DarkModeSwitch';

export default function HeroSection() {
    return (
        <Container maxW={'6xl'} pt={{ base: '150px', sm: '150px', md: '250px', lg: '250px' }} pb={{ base: '150px', sm: '150px', md: '200px', lg: '200px' }}>
            <Stack
                textAlign={'left'}
                align={'left'}
                spacing={{ base: 8, md: 10 }}
            >
                <Heading color={useColorModeValue("#000", "white")} lineHeight="120%" fontSize={{ base: '43px', sm: '43px', md: '70px', lg: '100px' }} fontWeight="400">
                    Your website is much
                    <br />
                    <Text d="inline" fontWeight="700">
                        more
                    </Text>
                    {' '}
                    than just
                    <br />
                    <Text d="inline" fontWeight="700">
                        a visual interface.
                    </Text>



                </Heading>

                <Heading
                    color={useColorModeValue("#000", "white")}
                    mt="25px !important"
                    mb="10px"
                    fontSize={{ lg: '45px' }}
                    lineHeight='120%'
                    fontWeight='400'
                >
                    It’s the meeting point between your  <br />
                    <Text d="inline" fontWeight="700">
                        business
                    </Text>
                    {' '}
                    and your {' '}
                    <Text d="inline" fontWeight="700">
                        users.
                    </Text>
                </Heading>
                <Image
                    display={{ base: 'none', sm: 'none', md: 'none', lg: 'inline-block' }}
                    position='relative'
                    left='0%'
                    top='10px'
                    mt="0 !important"
                    width='55%' src="/img/line_black.svg" />
            </Stack>

            <Container justify="center" maxW={'680px'} mt={{ base: '25px', sm: '25px', md: '55px', lg: '65px' }}>
                <Text
                    fontWeight="400"
                    fontSize={{ base: '16px', sm: '16px', md: '18px', lg: '24px' }}
                    fontStyle='italic'>
                    In today’s busy world, your customers are constantly bombarded with different marketing messages, which makes it significantly more difficult for customers to focus and make right choice. In order to stand out from the noise, your signal should be clear and precise.

                </Text>
                <NextLink href="mailto:miihairadu@gmail.com">
                    <Button
                        mt="50px"
                        mb="0"
                        px={8}
                        py={8}
                        width="100%"
                        colorScheme={'orange'}
                        bg={useColorModeValue('#292a2b', '#dcdfe2')}
                        color={useColorModeValue('white', 'black')}
                        borderRadius="0%"
                        _hover={{ bg: { light: '#1e1e1e', dark: '#cccccc' } }}>
                        BOOK A FREE CONSULTATION
                    </Button>
                </NextLink>
            </Container>
        </Container >
    );
}