import { Box, BoxProps, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { black, gray, primary, white } from '../constants'
import CircleIcon from '@mui/icons-material/Circle'
import DeleteIcon from '@mui/icons-material/Delete'
import { Product } from '../types'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { removeProductActionById } from '../slices/productSlice'
import { AlertDialog } from './AlertDialog'
import { useState } from 'react'
import { removeProductFromOrdersActionById } from '../slices/orderSlice'

export type ProductProps = Product & BoxProps

export const ProductCard = ({
  id,
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
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const orderName = useSelector(
    (state: RootState) =>
      state.order.value.find((order) => order.products.find((id) => id))
        ?.title ?? 'none',
  )
  const handleOpen = () => {
    setOpen(true)
  }
  const handleCancel = () => {
    setOpen(false)
  }
  const handleAccept = (id: number) => {
    setOpen(false)
    dispatch(removeProductActionById(id))
    dispatch(removeProductFromOrdersActionById(id))
  }
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
      <Box component="img" src={photo} alt="Image" width="50px" />
      <Typography>{type}</Typography>
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
          <Typography
            key={p.symbol}
            fontSize={p.isDefault === 1 ? '1rem' : '0.7rem'}
          >
            {p.value} {p.symbol}
          </Typography>
        ))}
      </Stack>
      <Typography>{title}</Typography>
      <Typography>{orderName}</Typography>
      <Stack>
        <Typography fontSize="0.7rem">{date.toDateString()}</Typography>
        <Typography>{date.toLocaleDateString()}</Typography>
      </Stack>
      <DeleteIcon onClick={handleOpen} />
      <AlertDialog
        handleOpen={open}
        handleConfirm={() => handleAccept(id)}
        handleCancel={handleCancel}
        title={t('productAlertTitle')}
        description={t('productAlertDescription')}
      />
    </Box>
  )
}
