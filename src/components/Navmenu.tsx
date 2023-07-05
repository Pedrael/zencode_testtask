import { Avatar, Stack, Typography } from '@mui/material'
import { Link } from '../renderer/Link'
import { useTranslation } from 'react-i18next'

export const Navmenu = () => {
  const { t } = useTranslation()
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100%"
      borderRight="1px solid black"
      bgcolor="blue"
    >
      <Avatar></Avatar>
      <Link href="/">
        <Typography>{t('arrival')}</Typography>
      </Link>
      <Link href="/about">
        <Typography>{t('groups')}</Typography>
      </Link>
      <Link href="/about">
        <Typography>{t('products')}</Typography>
      </Link>
      <Link href="/about">
        <Typography>{t('users')}</Typography>
      </Link>
      <Link href="/about">
        <Typography>{t('settings')}</Typography>
      </Link>
    </Stack>
  )
}
