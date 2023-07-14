import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import { OrderCard } from '../components/OrderCard'
import store, { RootState } from '../store'
import { Order } from '../types'
import { removeOrderActionById } from '../slices/orderSlice'

// Create a mock Redux store
type MockedStore = MockStoreEnhanced<RootState>
const mockStore = configureStore([])
const dispatchMock = jest.fn()

describe('OrderCard', () => {
  let mockedStore: MockedStore

  beforeEach(() => {
    // Initialize the store with initial state if needed
    mockedStore = mockStore(store) as MockedStore
  })

  it('renders the OrderCard component correctly', () => {
    const order: Order = {
      id: 1,
      title: 'Order 1',
      date: new Date('2022-01-01'),
      description: 'Description',
      products: [1, 2, 3],
    }

    render(
      <Provider store={mockedStore}>
        <OrderCard {...order} />
      </Provider>,
    )

    // Assertions for rendered components, texts, etc.
    expect(screen.getByText('Order 1')).toBeInTheDocument()
    expect(screen.getByText('01/01/2022')).toBeInTheDocument()
    // Add more assertions as needed
  })

  it('triggers the delete action when delete button is clicked', () => {
    const order = {
      id: 1,
      title: 'Order 1',
      date: new Date('2022-01-01'),
      description: 'Description',
      products: [1, 2, 3],
    }

    render(
      <Provider store={store}>
        <OrderCard {...order} />
      </Provider>,
    )

    fireEvent.click(screen.getByLabelText('Delete Icon'))

    // Assert that the delete action was dispatched
    expect(dispatchMock).toHaveBeenCalledWith(removeOrderActionById(1))
  })

  // Add more test cases as needed
})
