import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { OrderCard, OrderProps } from '../../components/OrderCard'
import { Container, Typography } from '@mui/material'
import { cream } from '../../constants'
import { useTranslation } from 'react-i18next'
import { createSelector } from '@reduxjs/toolkit'

export const Page = () => {
  const ordersSelector = createSelector(
    ({ order: { value } }: RootState) => value,
    (value) => value,
  )
  const orders = useSelector(ordersSelector)
  const { t } = useTranslation()
  return (
    <Container sx={{ bgcolor: `${cream}`, pt: '60px' }}>
      <Typography variant="h3" textTransform="capitalize" mb="30px">
        {t('arrival')}
      </Typography>
      {orders.map((orders) => (
        <OrderCard key={orders.id} {...(orders as OrderProps)} mb="20px" />
      ))}
    </Container>
  )
}
