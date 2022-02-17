import React from 'react'
import NextLink from 'next/link'
import { useColorMode, useColorModeValue, Heading, Text, Flex, Box, Link } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'
import { ArrowRightIcon } from '@chakra-ui/icons'

const BlogPost = ({ title, publishedAt, summary, slug }) => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <NextLink href={`/blog/${slug}`} passHref>
      <Link my="0 !important" w="100%" _hover={{ textDecoration: 'none' }}>
        <Box display="block" width="100%"
          borderBottom='1px solid #0000001a'
        >
          <Flex flexDirection={['column', 'row']} justifyContent="space-between" alignItems="center">
            <Flex
              width="100%"
              align="flex-start"
              justifyContent="space-between"
              flexDirection={['column', 'row']}
            >
              <Flex alignSelf={{base: 'left', lg:"center"}}>
                <Text
                  color={useColorModeValue("gray.700", "white.100")}
                  minWidth="140px"
                  textAlign='left'

                  fontSize={{base: '18px', sm: '18px', md: '25px', lg:'25px'}}
                  lineHeight={{base: '28px',sm:'28px',md:'35px',lg:'35px'}}
                  fontWeight='200'
                  padding={{base: '40px 0px 10px 0px', sm: '40px 0px 10px 0px', md: '50px 0px', lg: '50px 0px'}}
                  opacity='0.7'
                >
                  {format(parseISO(publishedAt), 'MMMM dd, yyyy')}

                </Text>
              </Flex>
              <Box borderRight={{base: '0', sm: '0', md:'1px solid #0000001a', lg:'1px solid #0000001a'}}
                padding={{base: '0px 0px 40px 0px', sm: '0px 0px 40px 0px', md: '50px 40px',lg:'50px 40px'}}>
                <Flex flexDirection="column" textAlign={{base: "left", sm: "left", md: "right", lg: "right"}} justifyContent="start" width="100%">
                  <Heading
                    fontSize={{base: '22px',sm: '22px',md: '32px',lg:"32px"}}
                    mb={1}
                    lineHeight={{base: '32px', sm: '32px', md: '42px',lg:'42px'}}
                    fontWeight='200'

                    letterSpacing='1px'
                  >
                    {title}
                  </Heading>
                </Flex>
                <Text 
                fontSize="18px"
                mt= '8px'
                color={useColorModeValue('#6b6b6b', '#8c8c8c')}>{summary}</Text>
              </Box>




            </Flex>
            <Flex display={{base: 'none', sm: 'none', md: 'none', lg: 'flex' }}alignSelf="center" justifyContent="center" px="50px">
              <ArrowRightIcon h={8} w={8} color={useColorModeValue("#000", "#fff")} />
            </Flex>
          </Flex>
        </Box>
      </Link>
    </NextLink>
  )
}

export default BlogPost