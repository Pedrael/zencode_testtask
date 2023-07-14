import { Avatar, Badge, Stack } from '@mui/material'
import { Link } from '../renderer/Link'
import { useTranslation } from 'react-i18next'
import { Label } from './Label'
import { cream, red, Paths } from '../constants'
import { useEffect, useState } from 'react'

export const Navmenu = () => {
  const [url, setUrl] = useState<string>('/')
  const { t } = useTranslation()

  useEffect(() => {
    setUrl(window.location.pathname)
  }, [])

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100%"
      maxHeight="100vh"
      borderRight="1px solid black"
      bgcolor={cream}
    >
      <Badge
        sx={{ mb: '60px' }}
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <Avatar
            alt="Remy Sharp"
            src=""
            sx={{ width: '20px', height: '20px', bgcolor: `${red}` }}
          />
        }
      >
        <Avatar
          alt="Travis Howard"
          src=""
          sx={{ width: '70px', height: '70px' }}
        />
      </Badge>

      <Label gutterBottom underlined={String(url === Paths.Home)}>
        <Link href={Paths.Home}>{t('arrival')}</Link>
      </Label>

      <Label gutterBottom underlined={String(url === Paths.Groups)}>
        <Link href={Paths.Groups}> {t('groups')}</Link>
      </Label>

      <Label gutterBottom underlined={String(url === Paths.Products)}>
        <Link href={Paths.Products}>{t('products')}</Link>
      </Label>

      <Label gutterBottom underlined={String(url === Paths.Users)}>
        <Link href={Paths.Users}>{t('users')}</Link>
      </Label>

      <Label gutterBottom underlined={String(url === Paths.Settings)}>
        <Link href={Paths.Settings}>{t('settings')}</Link>
      </Label>
    </Stack>
  )
}
