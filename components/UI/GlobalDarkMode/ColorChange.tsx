// Work on this one later

import React from 'react'
import {
    useColorMode,
    Flex,
} from '@chakra-ui/react'

const ColorChange = ({ children }) => {
    const { colorMode } = useColorMode()

    const bgColor = {
        light: '#FFE4DF',
        dark: '#0a141f'
    }

    const color = {
        light: '#292a2b',
        dark: 'white'
    }

    return (
        <>
            
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 0, 0]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default ColorChange