import React from 'react'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'
import {
    Container,
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Avatar
} from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { useRouter } from 'next/router'

import GlobalDarkMode from '../components/UI/GlobalDarkMode/ColorChange'
import Navbar from '../components/UI/Navbar/Navbar-Blog'

export default function BlogLayout({ children, frontMatter }) {
    const { colorMode } = useColorMode()
    const textColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const router = useRouter()
    const slug = router.asPath.replace('/blog', '')
    return (
        <>
{/*Kinda hacky but eh */}
<Global
        styles={css`
        #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? '#FFE4DF' : '#0a141f'};
        
        `}
        />
            {/* <Navbar /> */}
            <GlobalDarkMode>
                <Head>
                    <title>${slug} - Blog - Michael Radu</title>
                </Head>
                <Navbar />
                <Stack
                    as="article"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                    w="100%"
                    px={2}
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        w="100%"
                    >
                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            {frontMatter.title}
                        </Heading>
                        <Flex
                            justify="space-between"
                            align={['initial', 'center']}
                            direction={['column', 'row']}
                            mt={2}
                            w="100%"
                            mb={4}
                        >
                            <Flex align="center">
                                <Avatar
                                    size="xs"
                                    name="Michael Radu"
                                    src="../images/portrait.jpeg"
                                    mr={2}
                                />
                                <Text fontSize="sm" color={textColor[colorMode]}>
                                    {frontMatter.by}
                                    {'Michael Radu / '}
                                    {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                                </Text>
                            </Flex>
                            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                                {frontMatter.readingTime.text}
                            </Text>
                        </Flex>
                    </Flex>
                    {children}
                </Stack>
            </GlobalDarkMode>
        </>
    )
}

