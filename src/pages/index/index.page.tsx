import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { OrderCard } from '../../components/orderCard'

export const Page = () => {
  const { id, title, date, description, products } = useSelector(
    (state: RootState) => state.order.value[0],
  )
  return (
    <>
      <h1>Products</h1>
      <div>
        <OrderCard
          id={id}
          title={title}
          date={date}
          description={description}
          products={[...products]}
        />
      </div>
    </>
  )
}
