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
import reviews from './reviews.json';

export default function HeroSection() {
    return (
        <>
        { reviews?.map(
            (
            {
                number,
                author,
                project,
                description,
            },
            index
        ) => (
            <Container key={index} align="center" pt={{ base: "70px", sm: "70px", md: "0", lg: "90px" }} pb={{ base: "80px", sm: "80px", md: "0", lg: "90px" }} maxWidth='1640px' maxW={'8xl'} 
            bgColor={useColorModeValue("#1e1e1e", "#040d17")}>
                <Stack

                    maxWidth='1280px'
                    p={{ base: '50px 16px', sm: '50px 16px', md: '25px 25px', lg: '80px 50px' }}
                    textAlign={'left'}
                    align={'left'}
                    spacing={{ base: 8, md: 10 }}
                >
                    <Flex
                        direction={["column", "row"]}
                        justify="space-between">
                        <Stack
                            align={'flex-start'}
                            direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
                            mb={{ base: '30px', sm: '30px', md: '0', lg: '0' }}
                        >
                            <Image
                                mt="6px"
                                mr="50px" src="/img/quote_icon.svg" />
                            <Stack>
                                <Heading color="#e0dfdb" mb="5px" fontSize={{ base: '26px', sm: '26px', md: '30px', lg: '30px' }} fontWeight="700">
                                    {author}
                                </Heading>
                                <Text mt="0 !important" fontWeight="400" fontSize={{ base: '24px' }} color="#e0dfdb">
                                    ‍{project}
                                </Text>
                            </Stack>
                        </Stack>
                        <Stack maxWidth='690px'>
                            <Heading
                                lineHeight='160%'
                                letterSpacing="0.6px"
                                color="#e0dfdb" fontStyle="italic"
                                fontSize={{ base: '20px', sm: '20px', md: '24px', lg: '24px' }}
                                fontWeight="400">
                                "{description}"
                            </Heading>
                        </Stack>
                    </Flex>
                </Stack>
            </Container >
            )
            )}
            </>
    );
}