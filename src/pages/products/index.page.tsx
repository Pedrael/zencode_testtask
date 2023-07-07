import { useSelector } from 'react-redux'
import { State } from '../../types'

export const Page = () => {
  const orders = useSelector((state: State) => state.orders)
  return (
    <>
      <h1>Products</h1>
      <div>
        {orders.map(({ title, date, description, products }, id) => (
          <p key={id}>
            {String(title)}, {String(date)}, {String(description)},{' '}
            {String(products)}
          </p>
        ))}
      </div>
    </>
  )
}
