import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head";
import { ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import { Global, css } from '@emotion/react'
import { prismLightTheme, prismDarkTheme } from '../styles/prism'
import dynamic from 'next/dynamic'

const CCursor = dynamic(() => import('../components/UI/Cursor/Cursor')
  , { ssr: false });

import { ParallaxProvider } from 'react-scroll-parallax';


const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
        <title>Mihai Radu - Freelance Designer & Developer</title>
        <meta name="title" content="Mihai Radu - Freelance Designer & Developer" />
        <meta
          name="description"
          content="Freelance Developer & UI/UX Designer"
        />
        <meta name="google-site-verification" content="buewHmn4mfm212HHM4uMwGY-barfHN7l_T8W1pu4Lj0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mihairadu.cf/" />
        <meta
          property="og:title"
          content="Mihai Radu - Freelance Designer & Developer"
        />
        <meta name="theme-color" content="#4C30F5" />
        <meta name="background-color" content="#0B0D17" />
        <meta
          property="og:description"
          content="Freelance Developer & UI/UX Designer"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mihairadu.cf/" />
        <meta
          property="twitter:title"
          content="Mihai Radu - Freelance Designer & Developer"
        />
        <meta
          property="twitter:description"
          content="I help individuals & small businesses bring their ideas to life by designing memorable experiences for their products and building their brand identity."
        />
        <meta
          name="keywords"
          content="programare, programator, coder, web wordpress, blog wordpress, it, wordpress, site, informatica, software, blog, freelance, freelancer, development, design, prototyper, prototyping, prototype development, product design and development, ui ux designer, graphic designer, radu, mihai, radu mihai, alex, alexandru, radu mihai alexandru, mihai radu, dev, prototyped, portfolio"
        />
        <meta name="robots" content="nofollow" />
        <meta name="revisit-after" content="1 day" />
        <meta property="”og:type”" content="”website”" />
        <meta property="”og:locale”" content="”en_US”" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: ${colorMode === 'light' ? '#e43c47' : '#40b4ed'};
            color: white;
          }
          ::-moz-selection {
            background: transparent;
            color: #e61e2b;
          }
          ::-webkit-scrollbar {
            width: 7px
          }
          
          ::-webkit-scrollbar-track {
            background-color: ${colorMode === 'light' ? '#ece4de' : '#171923'};
          }
          
          ::-webkit-scrollbar-thumb {
            -webkit-border-radius: 10px;
            border-radius: 50px;
            background: #5757577a;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: ${colorMode === 'light' ? '#1818187a' : '171923'};
          }
          
          html {
            min-width: 356px;
            scroll-behavior: smooth;
            // cursor: none;
          }
          body {
            overflow-x: hidden;
          }
          .cursor {
            width: 40px;
            height: 40px;
            // border: 2px solid #fefefe;
            background-color: #fefefe;
            border-radius: 100%;
            position: fixed;
            transform: translate(-50%, -50%);
            pointer-events: none;
            transition: all 150ms ease;
            transition-property: background-color, opacity, transform, mix-blend-mode;
            z-index: 9999;
            mix-blend-mode: difference;
        }
        
        .cursor--hidden {
            opacity: 0;
        }
        
        .cursor--link-hovered {
            transform: translate(-50%, -50%) scale(0.6);
            background-color: #fefefe;
        }
        
        .cursor--clicked {
            transform: translate(-50%, -50%) scale(0.9);
            background-color: #fefefe;
        }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? '#ff0047' : '#0089ff'};
            //Orange: #fb8b23
            //Gray thing: #0a141f
          }
          .stroke {
            -webkit-text-stroke: ${colorMode === 'light' ? '1px #292a2b' : '1px #fff'}
          }
          .mailButton {
            height: 100%;
            padding-right: 40px;
            margin-right: 40px;
            display: flex;
            box-sizing: border-box;
            border-right: ${colorMode === 'light' ? '1px solid #292a2b' : '1px solid #fff'};
            justify-content: center;
            align-items: center;
          }
          .projectStroke {
            -webkit-text-stroke: ${colorMode === 'light' ? '1px #000' : '1px #fff'}
          }

        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: false,
        }}
      >
        <GlobalStyle>
          {typeof window !== 'undefined' && (
            <CCursor />
          )}
          <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
