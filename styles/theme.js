import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
      body: {
        bg: mode('#FFE4DF', '#202023')(props)
      }
    })
  }

const fonts = {
    ...chakraTheme.fonts,
    body: `Poppins, IBM Plex Mono,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Bebas neue, Poppins, IBM Plex Mono,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
}

const breakpoints = createBreakpoints({
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "130em",
    "2xl": "106em",
})

const overrides = {
    ...chakraTheme,
    fonts,
    breakpoints,
    fontWeights: {
        normal: 300,
        medium: 600,
        bold: 700
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
    },
}
const config = {
    initialColorMode: 'light',
    useSystemColorMode: true
}

const customTheme = extendTheme({styles, fonts, breakpoints, overrides, config})

export default customTheme