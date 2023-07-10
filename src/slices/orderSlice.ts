import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Order } from '../types'

export type OrderState = {
  value: Array<Order>
}

export const ordersInitialState: OrderState = {
  value: [
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
      products: [1, 2, 3],
    },
    {
      id: 3,
      title: 'Order 3',
      date: new Date('2017-06-29 12:09:33'),
      description: 'desc',
      products: [],
    },
  ],
}

const orderSlice = createSlice({
  name: 'order',
  initialState: ordersInitialState,
  reducers: {
    updateOrderAction: (
      state: OrderState,
      { payload }: PayloadAction<Array<Order> | null>,
    ) => {
      state.value = payload
        ? [...state.value, ...payload]
        : ordersInitialState.value
    },
    removeProductFromOrdersActionById: (
      state: OrderState,
      { payload }: PayloadAction<number | null>,
    ) => {
      state.value = payload
        ? [
            ...state.value.map(
              (order) =>
                ({
                  ...order,
                  products: order.products.filter(
                    (product) => product !== payload,
                  ),
                } as Order),
            ),
          ]
        : ordersInitialState.value
    },
    removeOrderActionById: (
      state: OrderState,
      { payload }: PayloadAction<number | null>,
    ) => {
      state.value = payload
        ? state.value.filter((item) => item.id !== payload)
        : ordersInitialState.value
    },
  },
})

export const {
  updateOrderAction,
  removeProductFromOrdersActionById,
  removeOrderActionById,
} = orderSlice.actions
export default orderSlice
