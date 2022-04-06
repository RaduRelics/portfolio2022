import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'white',
        dark: 'white',
    }
    return (
        <div className="cursorHover">
            <IconButton
                aria-label="Toggle dark mode"
                icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                onClick={toggleColorMode}
                color={iconColor[colorMode]}
                bgColor="transparent"
                _hover={{ bgColor: "transparent", color: { light: 'blue', dark: 'yellow' }[colorMode] }}
            />
        </div>
    )
}

export default DarkModeSwitch