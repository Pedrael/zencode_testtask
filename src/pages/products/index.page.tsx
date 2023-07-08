import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export const Page = () => {
  const orders = useSelector((state: RootState) => state.order.value)
  return (
    <>
      <h1>Products</h1>
      <div>
        {orders &&
          orders.map(({ title, date, description, products, id }) => (
            <p key={id}>
              {String(title)}, {String(date)}, {String(description)},{' '}
              {String(products)}
            </p>
          ))}
      </div>
    </>
  )
}
