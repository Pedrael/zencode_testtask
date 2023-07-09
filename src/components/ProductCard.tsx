import { Box, BoxProps, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { black, gray, primary, white } from '../constants'
import CircleIcon from '@mui/icons-material/Circle'
import DeleteIcon from '@mui/icons-material/Delete'

export type ProductProps = {
  // = Product when rebase
  id: number
  serialNumber: number
  isNew: number
  photo: string
  title: string
  type: string
  specification: string
  guarantee: {
    start: Date
    end: Date
  }
  price: [{ value: number; symbol: string; isDefault: number }]
  order: number
  date: Date
} & BoxProps

export const ProductCard = ({
  photo,
  specification,
  isNew,
  guarantee: { start, end },
  price,
  title,
  type,
  date,
  ...props
}: ProductProps) => {
  const { t } = useTranslation()
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      bgcolor={white}
      padding="20px"
      width="100%"
      borderRadius="8px"
      border="1px solid"
      borderColor={gray}
      gap="20px"
      {...props}
    >
      <CircleIcon fontSize="small" htmlColor={isNew === 1 ? primary : black} />
      <Box component="img" src={photo} alt="Image" />
      <Typography>{specification}</Typography>
      <Stack>
        <Typography>
          <Typography component="span" fontSize="0.7rem">
            {t('from')}
          </Typography>{' '}
          {start.toLocaleDateString()}
        </Typography>
        <Typography>
          <Typography component="span" fontSize="0.7rem">
            {t('to')}
          </Typography>{' '}
          {end.toLocaleDateString()}
        </Typography>
      </Stack>
      <Typography>{isNew === 1 ? t('new') : t('used')}</Typography>
      <Stack>
        {price.map((p) => (
          <Typography fontSize={p.isDefault === 1 ? '1rem' : '0.7rem'}>
            {p.value} {p.symbol}
          </Typography>
        ))}
      </Stack>
      <Typography>{title}</Typography>
      <Typography>{type}</Typography>
      <Typography>{date.toLocaleDateString()}</Typography>
      <DeleteIcon />
    </Box>
  )
}
