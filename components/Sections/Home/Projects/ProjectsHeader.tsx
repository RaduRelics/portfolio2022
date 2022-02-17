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
} from '@chakra-ui/react';

export default function CallToActionWithIllustration() {
    return (
        <Container maxW={'5xl'} py='150px'>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}>
                <Heading
                    fontFamily={'Poppins'}
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '3xl', md: '4xl' }}
                    lineHeight={'55px'}
                    color={'#bbb'}>
                    By designing accessible interfaces, I make <br />digital products{' '}
                    <Text as={'span'} color={useColorModeValue('red.300','red.700')}>
                    usable for everyone.

                    </Text>

                </Heading>

            </Stack>
        </Container>
    );
}
