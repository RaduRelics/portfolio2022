import React, { useState } from 'react'
import Head from 'next/head'
import {
    useColorMode,
    Stack,
    Input,
    InputGroup,
    InputRightElement,
    Container,
    Heading,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import ScrollAnimation from 'react-animate-on-scroll';


import GlobalDarkMode from '../components/UI/GlobalDarkMode/ColorChange'

import Navbar from '../components/UI/Navbar/Navbar'

import HeroS from '../components/Sections/Home/HeroSection/HeroSection'

import WorkPhilosophy from '../components/Sections/Home/WorkPhilosophy/WorkPhilosophy'

import AboutS from '../components/Sections/Home/About/AboutSection'

import BlogPost from '../components/Sections/Home/Blog/BlogPost'

import Projects from '../components/Sections/Home/Projects/ProjectsList'

import Reviews from '../components/Sections/Home/Reviews/Reviews'

import YourWebsite from '../components/Sections/Home/YourWebsite/yourwebsite'

import { getAllFilesFrontMatter } from '../lib/mdx'

import { SearchIcon } from '@chakra-ui/icons'

import ContactH from '../components/Sections/Home/Contact/ContactHeader'

import Footer from '../components/UI/Footer/Footer'

export default function Blog({ posts }) {
    const [searchValue, setSearchValue] = useState('')

    const filteredBlogPosts = posts
        .sort(
            (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .filter((frontMatter) =>
            frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <>
            <Head>
                <title>Mihai Radu | Freelance Designer & Developer</title>
            </Head>
            <Navbar />
            <GlobalDarkMode>
                <HeroS />
                <WorkPhilosophy />
                {/* <Reviews /> */}
                {/* <YourWebsite /> */}
                <Projects />
                <AboutS />
                <Container

               
                bg={useColorModeValue("#FFE4DF","#000")}
                maxW="100%">
                <Container  maxW={'8xl'} id="blog" mb={{ base: "100px", sm: "100px", md: "160px", lg: "160px" }}>
                    <Stack
                        spacing={8}
                        justifyContent="center"
                        alignItems="flex-start"
                        m="0 auto 4rem auto"
                    >
                        <Container justifyContent="center">
                            <ScrollAnimation style={{ marginTop: '0 !important' }} animateIn="fadeInDown" delay={300} animateOnce={true}>

                                {/* Articles ({posts.length} posts) */}

                                <Text opacity="0.4" fontSize='11px' fontWeight='500' letterSpacing='1.1px' textAlign="center" mb="24px">WRITING</Text>
                                <Heading mb="4rem" b='0' textAlign="center" fontSize={{ base: '43px', sm: '43px', md: '64px', lg: '64px' }} fontWeight="600" lineHeight="108%">
                                    LATEST ARTICLES
                                </Heading>
                            </ScrollAnimation>
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

                        {!filteredBlogPosts.length && 'No posts found :('}
                        {filteredBlogPosts.map((frontMatter) => <BlogPost key={frontMatter.title} {...frontMatter} />)}
                    </Stack>
                </Container>
                </Container>
            </GlobalDarkMode>
            <ContactH />
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')

    return { props: { posts } }
}