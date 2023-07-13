import { useSelector } from 'react-redux'
import { OrderCard, OrderProps } from '../../components/OrderCard'
import { Container, Typography } from '@mui/material'
import { cream } from '../../constants'
import { useTranslation } from 'react-i18next'
import { ordersSelector } from '../../selectors'

export const Page = () => {
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
