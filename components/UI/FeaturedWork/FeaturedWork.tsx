import { ReactElement } from 'react';
import { Container, Box, Heading, Text, Stack, Flex, Image } from '@chakra-ui/react';
import { fil } from 'date-fns/locale';

export default function SimpleThreeColumns() {
    return (
        <Container maxW={'5xl'} align="center">
            <Stack spacing="24px" direction="row" justifyContent="center" mb="40px">
                <Text
                    fontFamily="Poppins"
                    fontSize={{ base: '16px', sm: '16px', md: '16px' }}
                    lineHeight={'110%'}>
                    My work has been featured in:
                </Text>
            </Stack>
            <Stack spacing="45px" direction="row" justifyContent="center">
                <Box w="66px" h="80px">
                    <Image
                        boxSize="80px"
                        objectFit="fill"
                        src="/AlexConrad.png"
                        alt="AlexConrad"
                        filter= 'grayscale(100%)'
                        transition= '.3s cubic-bezier(.848, .009, .526, .974)'
                        _hover={{filter: 'grayscale(0%)', transform: 'translate(0,-20px)'}}
                    />
                </Box>
                <Box w="60px" h="80px">
                <Image
                        boxSize="80px"
                        objectFit="fill"
                        src="/LIIS.png"
                        alt="LIIS"
                        filter= 'grayscale(100%)'
                        transition= '.3s cubic-bezier(.848, .009, .526, .974)'
                        _hover={{filter: 'grayscale(0%)', transform: 'translate(0,-20px)'}}
                    />
                </Box>
                {/* <Box w="80px" h="80px" bg="pink.100">
                    3
                </Box> */}
            </Stack>
        </Container>
    );
}