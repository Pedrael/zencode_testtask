import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { black, primary } from '../constants'
import { useTranslation } from 'react-i18next'

export const Timedisplay = () => {
  const [time, setTime] = useState<Date>(new Date())
  const { t } = useTranslation()
  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  return (
    <Box display="flex">
      <Stack mr="30px">
        <Typography color={black}>{t('today')}</Typography>
        <Typography color={black}>{time.toLocaleDateString()}</Typography>
      </Stack>
      <Box display="flex" alignItems="end">
        {' '}
        <AccessTimeIcon sx={{ fontSize: 16, mb: '5px', color: `${primary}` }} />
        <Typography ml="5px" color={black}>
          {time.toLocaleTimeString()}
        </Typography>
      </Box>
    </Box>
  )
}
