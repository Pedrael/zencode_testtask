import { configureStore } from '@reduxjs/toolkit'
import { Action, Currency, Order, Product, State } from './types'

const initialState: State = {
  orders: [
    {
      id: 1,
      title: 'Order 1',
      date: new Date('2017-06-29 12:09:33'),
      description: 'desc',
      products: [1, 2],
    },
    {
      id: 2,
      title: 'Order 2',
      date: new Date('2017-06-29 12:09:33'),
      description: 'desc',
      products: [1],
    },
    {
      id: 3,
      title: 'Order 3',
      date: new Date('2017-06-29 12:09:33'),
      description: 'desc',
      products: [],
    },
  ],

  products: [
    {
      id: 1,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 1',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: new Date('2017-06-29 12:09:33'),
        end: new Date('2017-06-29 12:09:33'),
      },
      price: [
        { value: 100, symbol: Currency.USD, isDefault: 0 },
        { value: 2600, symbol: Currency.UAH, isDefault: 1 },
      ],
      date: new Date('2017-06-29 12:09:33'),
    },
    {
      id: 2,
      serialNumber: 1234,
      isNew: 1,
      photo: 'pathToFile.jpg',
      title: 'Product 1',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: new Date('2017-06-29 12:09:33'),
        end: new Date('2017-06-29 12:09:33'),
      },
      price: [
        { value: 100, symbol: Currency.USD, isDefault: 0 },
        { value: 2600, symbol: Currency.UAH, isDefault: 1 },
      ],
      date: new Date('2017-06-29 12:09:33'),
    },
  ],
}

const rootReducer = (state = initialState, { payload, type }: Action) => {
  switch (type) {
    case 'ADD_ORDER': {
      const order = payload as Order
      return {
        ...state,
        orders: [...state.orders, order],
      }
    }
    case 'ADD_PRODUCT': {
      const product = payload as Product
      return {
        ...state,
        products: [...state.products, product],
      }
    }
    default:
      return state
  }
}

const store = configureStore({ reducer: rootReducer })

export default store
