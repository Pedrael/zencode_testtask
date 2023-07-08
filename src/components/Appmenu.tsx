import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material'
import { Timedisplay } from './Timedisplay'
import { primary, white } from '../constants'
import { LanguageSwitch } from './LanguageSwitch'

export const Appmenu = () => {
  return (
    <AppBar sx={{ bgcolor: `${white}` }}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box display="flex" alignItems="center">
            {' '}
            <Avatar sx={{ mr: '10px' }} />
            <Typography
              color={primary}
              textTransform="uppercase"
              fontWeight="bold"
            >
              Inventory
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <LanguageSwitch />
            <Timedisplay />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
