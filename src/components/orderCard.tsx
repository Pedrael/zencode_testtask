import { Box, BoxProps, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { gray, white } from '../constants'
import DeleteIcon from '@mui/icons-material/Delete'
import { Currency, Order, Price } from '../types'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ProductCard, ProductProps } from './ProductCard'
import { AlertDialog } from './AlertDialog'
import { removeOrderActionById } from '../slices/orderSlice'

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
    dispatch(removeOrderActionById(id))
  }
  const handleVisible = () => {
    isVisible(!visible)
  }
  const prices = productsById.map(({ price }) => price)
  const sumPrices = (prices: Array<Array<Price>>) => {
    let value = Object.values(Currency).map(
      (cur) => ({ value: 0, symbol: cur } as Price),
    )
    prices.forEach((p) => {
      p.forEach((c, i) => {
        value[i].value += c.value
      })
    })
    return value
  }

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
        <Stack>
          {sumPrices(prices).map(
            ({ value, symbol }) =>
              value !== 0 && (
                <Typography>
                  {value} {symbol}
                </Typography>
              ),
          )}
        </Stack>
        {visible ? (
          <ExpandLessIcon onClick={() => handleVisible()} />
        ) : (
          <ExpandMoreIcon onClick={() => handleVisible()} />
        )}
        <DeleteIcon onClick={handleOpen} />
        <AlertDialog
          handleOpen={open}
          handleConfirm={() => handleAccept(id)}
          handleCancel={handleCancel}
          title={t('productAlertTitle')}
          description={t('productAlertDescription')}
        />
      </Box>
      <Stack display={visible ? 'flex' : 'none'}>
        {productsById &&
          productsById.map((product) => (
            <ProductCard {...(product as ProductProps)} />
          ))}
      </Stack>
    </Stack>
  )
}
