import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Currency, Product } from '../types'

export type ProductState = {
  value: Array<Product>
}
export const productsInitialState: ProductState = {
  value: [
    {
      id: 1,
      serialnumber: 1234,
      isNew: 1,
      photo: './src/assets/pc.png',
      title: 'Product 1',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: new Date('2017-06-29 12:09:33'),
        end: new Date('2017-06-29 12:09:33'),
      },
      price: [
        { value: 101, symbol: Currency.USD, isDefault: 0 },
        { value: 2602, symbol: Currency.UAH, isDefault: 1 },
      ],
      date: new Date('2017-06-29 12:09:33'),
    },
    {
      id: 2,
      serialnumber: 1234,
      isNew: 0,
      photo: './src/assets/pc.png',
      title: 'Product 2',
      type: 'Monitors',
      specification: 'Specification 1',
      guarantee: {
        start: new Date('2017-06-29 12:09:33'),
        end: new Date('2017-06-29 12:09:33'),
      },
      price: [
        { value: 102, symbol: Currency.USD, isDefault: 0 },
        { value: 2604, symbol: Currency.UAH, isDefault: 1 },
      ],
      date: new Date('2017-06-29 12:09:33'),
    },
    {
      id: 3,
      serialnumber: 1234,
      isNew: 1,
      photo: './src/assets/pc.png',
      title: 'Product 1',
      type: 'Keyboards',
      specification: 'Specification 1',
      guarantee: {
        start: new Date('2017-06-29 12:09:33'),
        end: new Date('2017-06-29 12:09:33'),
      },
      price: [
        { value: 103, symbol: Currency.USD, isDefault: 0 },
        { value: 2606, symbol: Currency.UAH, isDefault: 1 },
      ],
      date: new Date('2017-06-29 12:09:33'),
    },
  ],
}

const productSlice = createSlice({
  name: 'product',
  initialState: productsInitialState,
  reducers: {
    updateProductAction: (
      state: ProductState,
      { payload }: PayloadAction<Array<Product> | null>,
    ) => {
      state.value = payload
        ? [...state.value, ...payload]
        : productsInitialState.value
    },
    removeProductActionById: (
      state: ProductState,
      { payload }: PayloadAction<number | null>,
    ) => {
      state.value = payload
        ? state.value.filter((item) => item.id !== payload)
        : productsInitialState.value
    },
  },
})

export const { updateProductAction, removeProductActionById } =
  productSlice.actions
export default productSlice
