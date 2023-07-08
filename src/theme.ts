import { createTheme } from '@mui/material/styles'
import { primary } from './constants'

export const theme = createTheme({
  palette: {
    primary: {
      main: `${primary}`,
    },
  },
})
