import { Typography, styled } from '@mui/material'
import { primary } from '../constants'

interface LabelProps {
  underlined?: boolean
}

export const Label = styled(Typography)(({ underlined }: LabelProps) => ({
  variant: 'h1',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontSize: '20px',
  fontWeight: 'bold',
  position: 'relative',
  overflow: 'hidden',

  ...(underlined
    ? {
        '&:after, &.label-with-underline::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: '-10px',
          width: '100%',
          height: '14px',
          backgroundColor: `${primary}`,
          zIndex: 1,
        },
      }
    : {}),

  '&:hover::after, &.label-with-underline::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: '-10px',
    width: '100%',
    height: '14px',
    backgroundColor: `${primary}`,
    zIndex: 1,
    animation: 'underlineAnimation 0.3s forwards',
  },

  '@keyframes underlineAnimation': {
    '0%': {
      transform: 'scaleX(0)',
    },
    '100%': {
      transform: 'scaleX(1)',
    },
  },
}))
