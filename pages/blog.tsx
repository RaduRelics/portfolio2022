import React, { useState } from 'react'
import Head from 'next/head'
import {
    Container,
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement,
    useColorModeValue,
    Grid,
    Box
} from '@chakra-ui/react'

import { getAllFilesFrontMatter } from '../lib/mdx'
import BlogPost from '../components/Sections/Home/Blog/BlogPost'

import { SearchIcon } from '@chakra-ui/icons'

import Footer from '../components/UI/Footer/Footer'
import Navbar from '../components/UI/Navbar/Navbar'

export default function Blog({ posts }) {
    const [searchValue, setSearchValue] = useState('')

    const filteredBlogPosts = posts
        .sort(
            (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .filter((frontMatter) =>
            frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))
    const { colorMode } = useColorMode()
    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    return (
        <>
            <Head>
                <title>Blog - Michael Radu</title>
            </Head>
            <Navbar />
            {/* <Stack
                as="main"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 4rem auto"
                maxWidth="700px"
                px={2}
            >
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                >
                    <Heading mb={2}>Hi, I'm <Text mb={2} color={"#e61e2b"} style={{ display: 'inline-block' }}>Michael Radu</Text></Heading>
                    <br></br>
                    <Text color={colorSecondary[colorMode]}>I create software that helps me in my daily life and I like computers (especially Thinkpads), Unix-like operating systems and other stuff.</Text>
                    <br></br>
                    <Text color={colorSecondary[colorMode]}>I like TV series/Movies like Mr. Robot and The Social Network but I guess that's to be expected.</Text>
                    <br></br>
                    <Text color={colorSecondary[colorMode]}>On this website I usually post guides, tutorials and whatever comes to my mind that I'd find interesting but who knows, maybe it'll turn into a lifestyle guru blog where I tell you all to clean your room, buckos.</Text>
                </Flex>
            </Stack> */}

            <Container
                maxW="100%">
                <Container maxW={'5xl'} id="blog" mb={{ base: "100px", sm: "100px", md: "160px", lg: "160px" }}>
                    <Stack
                        spacing={8}
                        justifyContent="center"
                        alignItems="flex-start"
                        m="0 auto 4rem auto"
                    >
                        <Container justifyContent="center">


                            <Text opacity="0.4" fontSize='11px' fontWeight='500' letterSpacing='1.1px' textAlign="center" mb="24px">WRITING</Text>
                            <Heading mb="4rem" b='0' textAlign="center" fontSize={{ base: '43px', sm: '43px', md: '64px', lg: '64px' }} fontWeight="600" lineHeight="108%">
                                Articles ({posts.length} posts)
                            </Heading>
                        </Container>
                        <InputGroup borderColor={useColorModeValue("#000", "#fff")} mt="0 !important" mb={4} mr={4} w="100%">
                            <Input
                                w="100%"
                                borderRadius="0px !important"
                                aria-label="Search by title"
                                placeholder="Search by title"
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <InputRightElement>
                                <SearchIcon color={useColorModeValue("#000", "#fff")} />
                            </InputRightElement>
                        </InputGroup>

                        <Box display={{ md: 'flex' }}>
                            <Grid templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]} gap={6}>
                                {!filteredBlogPosts.length && 'No posts found :('}
                                {filteredBlogPosts.map((frontMatter) => <BlogPost key={frontMatter.title} {...frontMatter} />)}
                            </Grid>
                        </Box>
                    </Stack>

                </Container>
            </Container>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')

    return { props: { posts } }
}