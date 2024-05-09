import { Heading, styled, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  marginLeft: 'auto',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
})

export const Hero = styled('div', {
  maxWidth: '480px',
  position: 'relative',

  '& #hero-background': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    translate: '-50% -50%',
    height: '681px',
    maxWidth: '1200px',
    width: '100vw',
    pointerEvents: 'none',
  },

  [`> ${Heading}`]: {
    '@media (max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media (max-width: 600px)': {
    display: 'none,',
  },
})
