import { Box, BoxProps, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { black, gray, primary, white } from '../constants'
import CircleIcon from '@mui/icons-material/Circle'
import DeleteIcon from '@mui/icons-material/Delete'
import { Order, Price, Product } from '../types'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { useEffect, useMemo, useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export type OrderProps = Order & BoxProps

export const OrderCard = ({
  id,
  title,
  date,
  description,
  products,
  ...props
}: OrderProps) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [visible, isVisible] = useState(false)
  const dispatch = useDispatch()
  const productsById = useSelector(({ product: { value } }: RootState) =>
    value.filter((product) => products.includes(product.id)),
  )
  const handleOpen = () => {
    setOpen(true)
  }
  const handleCancel = () => {
    setOpen(false)
  }
  const handleAccept = (id: number) => {
    setOpen(false)
    //dispatch(removeProductActionById(id))
  }
  const handleVisible = () => {
    isVisible(!visible)
  }
  const sumPrices = productsById.reduce(
    (accumulator, { price }) => {
      price.forEach(({ value, symbol }, index) => {
        const existingPrice: Price[] = accumulator.price.find(
          ({ symbol }) => symbol === symbol,
        )
        if (existingPrice) {
          existingPrice.value += value
        } else {
          accumulator.price.push({ value, symbol, isDefault: 0 })
        }
      })
      return accumulator
    },
    { price: [] },
  ).price
  useEffect(() => {
    console.log(sumPrices)
  })
  return (
    <Stack>
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
        <Typography>{title}</Typography>
        <Typography>{date.toLocaleDateString()}</Typography>
        {visible ? (
          <ExpandLessIcon onClick={() => handleVisible()} />
        ) : (
          <ExpandMoreIcon onClick={() => handleVisible()} />
        )}

        {/* <CircleIcon fontSize="small" htmlColor={isNew === 1 ? primary : black} />
      <Box component="img" src={photo} alt="Image" />
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
          <Typography fontSize={p.isDefault === 1 ? '1rem' : '0.7rem'}>
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
      <DeleteIcon onClick={handleOpen} /> */}
        {/* <AlertDialog
        handleOpen={open}
        handleConfirm={() => handleAccept(id)}
        handleCancel={handleCancel}
        title={t('productAlertTitle')}
        description={t('productAlertDescription')}
      /> */}
      </Box>
      <Stack visibility={visible ? 'visible' : 'hidden'}>
        {productsById &&
          productsById.map((product) => (
            <p>{product.title}</p> // TODO
          ))}
      </Stack>
    </Stack>
  )
}
