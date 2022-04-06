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

function addButtonColors(e) {
    e.target.style.background = 'red';
}

export default function CircleButton() {
    return (
        <>
            <NextLink href="mailto:miihairadu@gmail.com">
                <a>
                    <Flex
                        mt='95px'
                        w={{ base: '210px', lg: "293px" }}
                        h={{ base: '210px', lg: "293px" }}
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="50%"
                        backgroundColor={useColorModeValue('#292a2b', '#40b4ed')}
                        transform={'rotate(-16deg)'}
                        transition={'0.5s ease-in-out'}
                        _hover={{ transform: 'rotate(16deg)', backgroundColor: '#e43c47' }}
                        overflow="hidden"
                    >

                        <Text
                            fontSize="20px"
                            color={useColorModeValue('#e0dfdb', 'black')}
                            fontWeight="900"
                            textAlign="center"
                            textTransform="uppercase"
                            position="relative"

                        >LET'S COLLABORATE</Text>
                        {/* <Flex
                        position='absolute'
                        zIndex='-1'
                        w='0'
                        h='0'
                        borderRadius='50%'
                        backgroundColor='#ed5d40'
                        transform='translate(-50%, -50%)'
                        transition={'height 400ms cubic-bezier(.455, .03, .515, .955), width 400ms cubic-bezier(.455, .03, .515, .955)'}
                        _hover={{width: '900px', height: '900px', top: '171.037px',
                        left: '122.662px'}}

                    ></Flex> */}
                    </Flex>
                </a>
            </NextLink>



        </>
    )
}

