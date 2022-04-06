import React from 'react'
import NextLink from 'next/link'
import { useColorMode, useColorModeValue, Heading, Text, Flex, Stack, Box, Link, Spacer } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'
import { ArrowRightIcon } from '@chakra-ui/icons'

const BlogPost = ({ title, publishedAt, summary, slug, featuredImage }) => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <NextLink href={`/blog/${slug}`} passHref>
      <Link color={"white"} my="0 !important" w="100%" _hover={{ textDecoration: 'none' }}>
        <Box position="relative" p="16px" display="block" width="230px" h="268px" borderRadius="12px"
          bg={featuredImage ? `url(${featuredImage})` : '#343434'}
          boxShadow="inset 0 0 0 1000px rgba(0,0,0,0.5)"
          bgPos="center" bgSize="cover"
          backdropFilter={`blur(10px)`}
        >
          <Box alignSelf={{ base: 'center', lg: "center" }}>

            <Flex flexDirection="column" textAlign={"left"} justifyContent="start" width="100%">
              <Heading
                fontSize={{ base: '22px', sm: '22px', md: '1.75rem', lg: "1.75rem" }}
                mb={1}
                fontWeight='200'
              >
                {title}
              </Heading>
            </Flex>
            <Text
              fontSize="18px"
              mt='8px'
              color={useColorModeValue('#abaaaa', '#abaaaa')}
              >
                {summary}
              </Text>
          </Box>

          <Text
            color={useColorModeValue("white.100", "white.100")}
            minWidth="140px"
            textAlign='left'

            fontSize={{ base: '18px', sm: '18px', md: '18px', lg: '18px' }}
            fontWeight='200'
            bottom="1rem"
            left="1rem"
            d="flex"
            position={'absolute'}
          >
            {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
          </Text>
        </Box>
      </Link>
    </NextLink>
  )
}

export default BlogPost