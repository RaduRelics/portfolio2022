import React, { useState } from 'react'
import Head from 'next/head'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Box,
    Image,
    Grid,
    useColorModeValue,
} from '@chakra-ui/react';

import Dark from '../components/UI/GlobalDarkMode/ColorChange'

import Navbar from '../components/UI/Navbar/Navbar'
import ScrollAnimation from 'react-animate-on-scroll';

// import PortfolioH from '../components/Sections/Portfolio/PortfolioHeader'

// import Projects from '../components/Sections/Portfolio/ProjectsList'

import Projects from '../components/Sections/Home/Projects/ProjectsList'

import Footer from '../components/UI/Footer/Footer'

import NextLink from 'next/link'

import projects from "../components/Sections/Home/Projects/projects.json";


export default function Portfolio() {

    return (
        <>
            <Head>
                <title>Portfolio - Michael Radu</title>
            </Head>
            <Navbar />
            <Dark>
                <Container

                    pt={{ base: '150px', sm: '150px', md: '210px', lg: '210px' }} pb={{ base: '150px', sm: '150px', md: '260px', lg: '260px' }}
                    backgroundColor={useColorModeValue("#f2f2f2", "#000")}
                    maxW="100%">
                    <Container maxW={'8xl'} id="portfolio">
                        <ScrollAnimation animateIn="fadeInDown" delay={300} animateOnce={true}>
                            {/* <Heading whiteSpace="nowrap" style={{ WebkitTextStroke: "1px #000" }} color="transparent" m='0' textAlign="center" fontSize={{ base: '43px', sm: '43px', md: '70px', lg: '64px' }} fontWeight="600" lineHeight="108%" opacity='.3'>
            LATEST PROJECTS
        </Heading> 
        whiteSpace="nowrap"
        */}
                            <Text opacity="0.4" fontSize='11px' fontWeight='500' letterSpacing='1.1px' textAlign="center" mb="24px">WORK</Text>
                            <Heading b='0' textAlign="center" fontSize={{ base: '64px', sm: '64px', md: '64px', lg: '64px' }} fontWeight="600" lineHeight="108%">
                                LATEST PROJECTS
                            </Heading>
                            {/* <Heading whiteSpace="nowrap" style={{ WebkitTextStroke: "1px #000" }} color="transparent" m='0' textAlign="center" fontSize={{ base: '43px', sm: '43px', md: '70px', lg: '64px' }} fontWeight="600" lineHeight="108%" opacity='.3'>
            LATEST PROJECTS
        </Heading> */}
                        </ScrollAnimation>
                        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6}>
                            {projects?.map(
                                (
                                    {
                                        project_number,
                                        project_tags,
                                        project_image,
                                        project_name,
                                        project_description,
                                        project_url,
                                        project_git,
                                    },
                                    index
                                ) => (
                                    <Stack
                                        key={index}
                                        textAlign={'center'}
                                        align={'center'}
                                        spacing={{ base: 8, md: 10 }}
                                        py={{ base: 14, md: 16 }}
                                        px={{ base: '0px', md: '10px' }}>
                                        <Stack w={'full'}>
                                            <Stack alignSelf={"flex-end"}>
                                                <ScrollAnimation animateIn="fadeInDown" delay={200} animateOnce={true}>

                                                    <Text align="right" as={'span'} bgColor={useColorModeValue("#e43c47", "#40b4ed")} color="white" textTransform={'uppercase'}>
                                                        {project_tags}
                                                    </Text>
                                                </ScrollAnimation>
                                            </Stack>
                                            <Stack direction={"row"} spacing="24px" justifyContent={"space-between"}>
                                                <Box>
                                                    <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                                                        {(project_number < 10) ?
                                                            <Heading
                                                                className="projectStroke"
                                                                fontWeight={600}
                                                                color="transparent"
                                                                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                                                lineHeight={'110%'}>
                                                                0{project_number}
                                                            </Heading>
                                                            :
                                                            <Heading
                                                                className="projectStroke"
                                                                fontWeight={600}
                                                                color="transparent"
                                                                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                                                lineHeight={'110%'}>
                                                                {project_number}
                                                            </Heading>
                                                        }
                                                    </ScrollAnimation>
                                                </Box>
                                                <Box>
                                                    <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>

                                                        <Heading
                                                            fontWeight={600}
                                                            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                                            lineHeight={'110%'}>
                                                            {project_name}
                                                        </Heading>
                                                    </ScrollAnimation>
                                                </Box>
                                            </Stack>
                                        </Stack>
                                        <ScrollAnimation animateIn="zoomIn" delay={400} animateOnce={true}>

                                            <Flex w={'full'}>
                                                <Box style={{ transition: 'transform 200ms ease 0s' }} _hover={{ transform: 'scaleX(0.95) scaleY(0.95)', zIndex: 2, cursor: 'pointer' }}>
                                                    <NextLink href={project_url} as="a">
                                                        <div className="cursorHover">
                                                            <Image src={project_image} width="auto" height="auto" alt="Freelance Project Image" />
                                                        </div>
                                                    </NextLink>
                                                </Box>
                                            </Flex>
                                        </ScrollAnimation>
                                    </Stack>

                                )
                            )}
                        </Grid>
                        
                    </Container>
                </Container>
            </Dark>
            <Footer />
        </>
    )
}