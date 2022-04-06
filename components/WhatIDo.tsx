import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Container,
  Box
} from '@chakra-ui/react';

import NextLink from 'next/link'


export default function SplitScreen() {
  return (
    <Container maxW={'5xl'} py='150px'>
      <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Turning your <Text color={'blue.400'} as={'span'}>
                  ideas
                </Text>{' '} into <Text color={'blue.400'} as={'span'}>
                  reality.
                </Text>{' '}
              </Text>

            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              I’m a self-taught Developer & Designer with over 5 years of experience in design and product.
              In my free time I freelance, crafting websites for startups and small businesses.

            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <NextLink href="mailto:mihairadu@tutanota.com">
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Create Project
              </Button>
              </NextLink>
              <NextLink href="mailto:mihairadu@tutanota.com">
              <Button rounded={'full'}>How It Works</Button>
              </NextLink>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
      </Stack>
    </Container>
  );
}