import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { OrderCard, OrderProps } from '../../components/OrderCard'

export const Page = () => {
  const orders = useSelector((state: RootState) => state.order.value)
  return (
    <>
      <h1>Products</h1>
      <div>
        {orders.map((orders) => (
          <OrderCard {...(orders as OrderProps)} />
        ))}
      </div>
    </>
  )
}
