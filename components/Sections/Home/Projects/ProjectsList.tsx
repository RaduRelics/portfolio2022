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

import projects from "./projects.json";

import NextLink from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll';
import { ChevronRightIcon } from '@chakra-ui/icons';
// import { NoConfigError } from 'sitemap';


const PortfolioItems = () => {
    return (
        <>
            <Container

                pt={{ base: '150px', sm: '150px', md: '210px', lg: '210px' }} pb={{ base: '150px', sm: '150px', md: '260px', lg: '260px' }}
                backgroundColor={useColorModeValue("#f2f2f2", "#202023")}
                maxW="100%">
                <Container maxW={'8xl'} id="portfolio">
                    <ScrollAnimation animateIn="fadeInDown" delay={300} animateOnce={true}>
                        <Text opacity="0.4" fontSize='11px' fontWeight='500' letterSpacing='1.1px' textAlign="center" mb="24px">WORK</Text>
                        <Heading b='0' textAlign="center" fontSize={{ base: '64px', sm: '64px', md: '64px', lg: '64px' }} fontWeight="600" lineHeight="108%">
                            LATEST PROJECTS
                        </Heading>
                    </ScrollAnimation>
                    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6}>
                        {projects?.filter(x => (x.showHome === true)).map(
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

                                                <Text align="right" as={'span'} bgColor={useColorModeValue("#e43c47", "#40b4ed")} color="white">
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
                                                        fontSize={{ base: '4xl', sm: '4xl', md: '6xl' }}
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
                                                <NextLink href={project_url}>
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
                    <Box textAlign="center">
                        <ScrollAnimation animateIn="fadeInDown" delay={300} animateOnce={true}>
                            <div className="cursorHover">
                                <NextLink href="/portfolio">
                                    {/* <Button b='0' textAlign="center" fontSize={{ base: '64px', sm: '64px', md: '64px', lg: '64px' }} fontWeight="600" lineHeight="108%">
                                        ...and more
                                    </Button> */}
                                    <Button fontSize={{ base: '30px', sm: '30px', md: '48px', lg: '48px' }} fontWeight="600" lineHeight="108%" rightIcon={<ChevronRightIcon />} bg="transparent" color={useColorModeValue("#FF2957", "#3d7aed")} _hover={{ color: useColorModeValue("#FF2957", '#366dd5') }}>
                                        ...and more
                                    </Button>
                                </NextLink>
                            </div>

                        </ScrollAnimation></Box>
                </Container>
            </Container>
        </>
    );
}
export default PortfolioItems;
