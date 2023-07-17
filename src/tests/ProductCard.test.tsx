import { Provider } from 'react-redux'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import {
  AnyAction,
  Middleware,
  ThunkDispatch,
  configureStore,
} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { useDispatch } from 'react-redux'
import { ProductCard } from '../components/ProductCard'
import { removeProductActionById } from '../slices/productSlice'
import productsSlice from '../slices/productSlice'
import { removeProductFromOrdersActionById } from '../slices/orderSlice'
import ordersSlice from '../slices/orderSlice'
import { EnhancedStore } from '@reduxjs/toolkit/dist/configureStore'
import { RootState } from '../store'
import '@testing-library/jest-dom/extend-expect'

// Initialize configureStore with middleware
const middlewares = [thunk]

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}))

describe('<ProductCard />', () => {
  let store = {} as EnhancedStore<
    RootState,
    AnyAction,
    Middleware<
      object,
      RootState,
      ThunkDispatch<RootState, unknown, AnyAction>
    >[]
  >

  beforeEach(() => {
    // Initializes the real store with a deep copy of the initial state
    store = configureStore({
      reducer: {
        product: productsSlice.reducer,
        order: ordersSlice.reducer,
      },
      middleware: middlewares,
    }) as EnhancedStore<
      RootState,
      AnyAction,
      Middleware<
        object,
        RootState,
        ThunkDispatch<RootState, unknown, AnyAction>
      >[]
    >

    // Mocks the dispatch function
    const mockDispatch = jest.fn()
    ;(useDispatch as jest.Mock).mockReturnValue(mockDispatch)
  })

  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <ProductCard {...store.getState().product.value[0]} />
      </Provider>,
    )

    expect(
      screen.getByText(store.getState().product.value[0].title),
    ).toBeInTheDocument()
  })

  it('calls correct action creators when delete icon is clicked and confirmed', async () => {
    render(
      <Provider store={store}>
        <ProductCard {...store.getState().product.value[0]} />
      </Provider>,
    )

    fireEvent.click(screen.getByTestId('delete-icon'))

    await waitFor(async () => {
      fireEvent.click(screen.getByTestId('dialog-approver'))

      // Assume that the confirm action of AlertDialog is fired immediately
      await waitFor(() => {
        const mockDispatch = useDispatch()
        expect(mockDispatch).toHaveBeenCalledWith(
          removeProductActionById(store.getState().product.value[0].id),
        )
        expect(mockDispatch).toHaveBeenCalledWith(
          removeProductFromOrdersActionById(
            store.getState().product.value[0].id,
          ),
        )
      })
    })
  })
})
